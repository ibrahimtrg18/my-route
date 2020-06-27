import React from "react";
import {
  LoginContainer,
  HeaderContainer,
  Title,
  Paragraph,
} from "./Login.styles";
import Navbar from "../../components/Navbar/Navbar";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <>
      <Navbar login={true} />
      <LoginContainer>
        <HeaderContainer>
          <Title>Login</Title>
          <Paragraph>Please fill up the blank fields below</Paragraph>
        </HeaderContainer>
        <LoginForm />
      </LoginContainer>
    </>
  );
};

export default Login;
