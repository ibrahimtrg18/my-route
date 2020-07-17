import React from "react";
import { Redirect } from "react-router-dom";
import {
  LoginContainer,
  HeaderContainer,
  Title,
  Paragraph,
} from "./Login.styles";
import Navbar from "../../components/Navbar/Navbar";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/onprogress" />;
  }

  return (
    <>
      <Navbar login={1} />
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
