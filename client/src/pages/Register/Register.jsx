import React from "react";
import { Redirect } from "react-router-dom";
import {
  SignupContainer,
  HeaderContainer,
  Title,
  Paragraph,
} from "./Register.styles";
import Navbar from "../../components/Navbar/Navbar";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Signup = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/onprogress" />;
  }

  return (
    <>
      <Navbar register={1} />
      <SignupContainer>
        <HeaderContainer>
          <Title>Register</Title>
          <Paragraph>Please fill up the blank fields below</Paragraph>
        </HeaderContainer>
        <RegisterForm />
      </SignupContainer>
    </>
  );
};

export default Signup;
