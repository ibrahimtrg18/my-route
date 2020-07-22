import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import {
  EmployeeRegisterFormContainer,
  Image,
  Divider,
  Form,
  Label,
  Input,
  Actions,
  Button,
} from "./EmployeeRegisterForm.styles";

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  customId: yup.string().required((obj) => "Employee ID is a required field"),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
  address: yup.string().required(),
  phoneNumber: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits & no-space")
    .min(8)
    .max(20),
});

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

const EmployeeRegisterForm = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);
  const history = useHistory();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <EmployeeRegisterFormContainer>
      <Image src={require("../../assets/images/login.png")} />
      <Divider />
      <Formik
        initialValues={{
          name: "",
          customId: "",
          email: "",
          password: "",
          address: "",
          phoneNumber: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (data, { resetForm }) => {
          try {
            const response = await axios.post(
              `${SERVER_URL}/api/business/employee/register`,
              data,
              {
                headers: {
                  "x-token": localStorage.getItem("token"),
                },
              }
            );
            setMessage(response.data.message);
            setStatus(1);
            history.push("/employee");
            resetForm();
          } catch (err) {
            console.log(err);
            setMessage(err.response.data.message);
            setStatus(0);
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form
            id="employee-register-form"
            onSubmit={handleSubmit}
            status={status}
            autoComplete="off"
          >
            <span>{message && message}</span>
            <Label>
              Name
              <Input
                name="name"
                type="text"
                ref={inputRef}
                value={values.name}
                onChange={handleChange}
              />
              <span>{errors.name && touched.name && errors.name}</span>
            </Label>
            <Label>
              Employee ID
              <Input
                name="customId"
                type="text"
                value={values.customId}
                onChange={handleChange}
              />
              <span>
                {errors.customId && touched.customId && errors.customId}
              </span>
            </Label>
            <Label>
              email
              <Input
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
              <span>{errors.email && touched.email && errors.email}</span>
            </Label>
            <Label>
              Password
              <Input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
              />
              <span>
                {errors.password && touched.password && errors.password}
              </span>
            </Label>
            <Label>
              Address
              <Input
                name="address"
                type="type"
                value={values.address}
                onChange={handleChange}
              />
              <span>{errors.address && touched.address && errors.address}</span>
            </Label>
            <Label>
              Phone Number
              <Input
                name="phoneNumber"
                type="tel"
                value={values.phoneNumber}
                onChange={handleChange}
              />
              <span>
                {errors.phoneNumber &&
                  touched.phoneNumber &&
                  errors.phoneNumber}
              </span>
            </Label>
          </Form>
        )}
      </Formik>
      <Actions>
        <Button primary form="employee-register-form" type="submit">
          Register
        </Button>
        <Button onClick={() => history.goBack()}>Cancel</Button>
      </Actions>
    </EmployeeRegisterFormContainer>
  );
};

export default EmployeeRegisterForm;
