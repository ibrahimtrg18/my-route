import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
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

const LoginForm = () => {
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
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form id="login-form" onSubmit={handleSubmit}>
            <Label>
              Email Address
              <Input
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                autoComplete="off"
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
