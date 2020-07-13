import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import * as yup from "yup";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  RegisterFormContainer,
  Paragraph,
  Image,
  Divider,
  Form,
  Label,
  Input,
  Actions,
  Button,
} from "./RegisterForm.styles";

const validationSchema = yup.object().shape({
  businessName: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits & no-space")
    .min(8)
    .max(20),
  password: yup.string().required(),
});

const RegisterForm = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <RegisterFormContainer>
        <Image src={require("../../assets/images/register.png")} />
        <Divider />
        <Formik
          initialValues={{
            businessName: "",
            email: "",
            phoneNumber: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (data, { resetForm }) => {
            await setLoading(true);
            try {
              const response = await axios.post(
                `http://localhost:4000/api/business/register`,
                data
              );
              setMessage(response.data.message);
              setStatus(1);
              setLoading(false);
              resetForm();
            } catch (err) {
              setMessage(err.response.data.message);
              setStatus(0);
              setLoading(false);
            }
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form
              id="register-form"
              onSubmit={handleSubmit}
              status={status}
              autoComplete="off"
            >
              <span>{message && message}</span>
              <Label>
                Business Name
                <Input
                  name="businessName"
                  type="text"
                  value={values.businessName}
                  onChange={handleChange}
                />
                <span>
                  {errors.businessName &&
                    touched.businessName &&
                    errors.businessName}
                </span>
              </Label>
              <Label>
                Email Address
                <Input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <span>{errors.email && touched.email && errors.email}</span>
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
            </Form>
          )}
        </Formik>
        <Actions>
          <Button primary form="register-form" type="submit" disabled={loading}>
            {loading ? (
              <Loader
                type="Oval"
                color="#fff"
                height={22}
                width={22}
                style={{ display: "flex", justifyContent: "center" }}
              />
            ) : (
              "Register"
            )}
          </Button>
          <Paragraph>Already have account ?</Paragraph>
          <Button>Login</Button>
        </Actions>
      </RegisterFormContainer>
    </>
  );
};

export default RegisterForm;
