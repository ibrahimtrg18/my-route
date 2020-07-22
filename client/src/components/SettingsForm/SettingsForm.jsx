import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import {
  SettingsFormContainer,
  Form,
  Confirmed,
  ConfirmedPassword,
  Label,
  Input,
  Button,
} from "./SettingsForm.styles";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

const SettingsForm = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState({});

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${SERVER_URL}/api/business/settings`,
          {
            headers: {
              "x-token": token,
            },
          }
        );
        const businessSettings = response.data.data.business;
        setData(businessSettings);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <SettingsFormContainer>
      <Formik
        enableReinitialize
        initialValues={{
          businessName: data.name || "",
          phoneNumber: data.phone_number || "",
          email: data.email || "",
          newPassword: data.password || "",
          prevPassword: "",
        }}
        onSubmit={async (data, { resetForm }) => {
          try {
            const response = await axios.put(
              `${SERVER_URL}/api/business/settings`,
              data,
              {
                headers: {
                  "x-token": token,
                },
              }
            );
            setData({
              name: data.businessName,
              phone_number: data.phoneNumber,
              email: data.email,
              password: data.newPassword,
            });
            resetForm();
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <Form id="settings-form" onSubmit={handleSubmit}>
              <Label>
                Business Name
                <Input
                  name="businessName"
                  type="text"
                  value={values.businessName}
                  onChange={handleChange}
                />
              </Label>
              <Label>
                Phone Number
                <Input
                  name="phoneNumber"
                  type="tel"
                  value={values.phoneNumber}
                  onChange={handleChange}
                />
              </Label>
              <Label>
                Email Address
                <Input
                  name="email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                />
              </Label>
              <Label>
                New Password
                <Input
                  name="newPassword"
                  type="password"
                  value={values.newPassword}
                  onChange={handleChange}
                />
              </Label>
            </Form>
            <Confirmed>
              <ConfirmedPassword
                name="prevPassword"
                type="password"
                value={values.prevPassword}
                onChange={handleChange}
                placeholder="enter previous password"
              />
              <Button type="submit" py={56} form="settings-form">
                Save
              </Button>
            </Confirmed>
          </>
        )}
      </Formik>
    </SettingsFormContainer>
  );
};

export default SettingsForm;
