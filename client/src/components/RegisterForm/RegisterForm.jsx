import React from "react";
import { useFormik } from "formik";
import {
  RegisterFormContainer,
  Paragraph,
  Image,
  Divider,
  Form,
  Label,
  Input,
  Button,
  Buttons,
} from "./RegisterForm.styles";

const RegisterForm = () => {
  return (
    <>
      <RegisterFormContainer>
        <Image src={require("../../assets/images/register.png")} />
        <Divider />
        <Form id="register-form">
          <Label>
            Business Name
            <Input id="name" type="text" required />
          </Label>
          <Label>
            Email Address
            <Input id="email" type="text" required />
          </Label>
          <Label>
            Phone Number
            <Input id="phone" type="text" required />
          </Label>
          <Label>
            Password
            <Input id="password" type="password" required />
          </Label>
        </Form>
        <Buttons>
          <Button primary form="register-form">
            Register
          </Button>
          <Paragraph>Already have account ?</Paragraph>
          <Button>Login</Button>
        </Buttons>
      </RegisterFormContainer>
    </>
  );
};

export default RegisterForm;
