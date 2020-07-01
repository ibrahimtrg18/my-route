import React from "react";
import {
  SignupContainer,
  HeaderContainer,
  Title,
  Paragraph,
} from "./Register.styles";
import Navbar from "../../components/Navbar/Navbar";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Signup = () => {
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
