import React, { useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import {
  LoginFormContainer,
  Paragraph,
  Image,
  Divider,
  Form,
  Label,
  Input,
  Actions,
  Button,
} from "./LoginForm.styles";

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const SERVER_URL = process.env.SERVER_URL || "http://localhost:4000";

const LoginForm = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);

  let history = useHistory();
  return (
    <LoginFormContainer>
      <Image src={require("../../assets/images/login.png")} />
      <Divider />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (data) => {
          try {
            const response = await axios.post(
              `${SERVER_URL}/api/business/login`,
              data
            );
            localStorage.setItem("token", response.data.data.accessToken);
            setMessage(response.data.message);
            setStatus(1);
            history.push("/onprogress");
          } catch (err) {
            console.log(err.response);
            setMessage(err.response.data.message);
            setStatus(0);
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form
            id="login-form"
            onSubmit={handleSubmit}
            status={status}
            autoComplete="off"
          >
            <span>{message && message}</span>
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
        <Button primary form="login-form" type="submit">
          Login
        </Button>
        <Paragraph>Dont have account ?</Paragraph>
        <Button>Register</Button>
      </Actions>
    </LoginFormContainer>
  );
};

export default LoginForm;
