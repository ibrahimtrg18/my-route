import React from "react";
import { Redirect } from "react-router-dom";
import {
  EmployeeRegisterContainer,
  HeaderContainer,
  Title,
  Paragraph,
} from "./EmployeeRegister.styles";
import EmployeeRegisterForm from "../../components/EmployeeRegisterForm/EmployeeRegisterForm.jsx";
import Navbar from "../../components/Navbar/Navbar";

const EmployeeRegister = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Navbar employeeRegister={1} />
      <EmployeeRegisterContainer>
        <HeaderContainer>
          <Title>Register for employee</Title>
          <Paragraph>Please fill up the blank fields below</Paragraph>
        </HeaderContainer>
        <EmployeeRegisterForm />
      </EmployeeRegisterContainer>
    </>
  );
};

export default EmployeeRegister;
