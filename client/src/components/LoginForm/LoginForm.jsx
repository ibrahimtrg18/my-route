import React from "react";
import {
  LoginFormContainer,
  Paragraph,
  Image,
  Divider,
  Form,
  Label,
  Input,
  Buttons,
  Button,
} from "./LoginForm.styles";

const LoginForm = () => {
  return (
    <LoginFormContainer>
      <Image src={require("../../assets/images/login.png")} />
      <Divider />
      <Form id="login-form">
        <Label>
          Email Address
          <Input type="text" required />
        </Label>
        <Label>
          Password
          <Input type="password" require />
        </Label>
      </Form>
      <Buttons>
        <Button primary form="login-form">
          Login
        </Button>
        <Paragraph>Dont have account ?</Paragraph>
        <Button>Register</Button>
      </Buttons>
    </LoginFormContainer>
  );
};

export default LoginForm;
