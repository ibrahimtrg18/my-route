import React from "react";
import { useHistory } from "react-router-dom";
import {
  AdminLoginContainer,
  HeaderContainer,
  Title,
  Paragraph,
  Form,
  Label,
  Input,
  Button,
} from "./AdminLogin.styles";
import Navbar from "../../components/Navbar/Navbar";

const AdminLogin = () => {
  const history = useHistory();

  return (
    <>
      <Navbar adminLogin={1} />
      <AdminLoginContainer>
        <HeaderContainer>
          <Title>Admin</Title>
          <Paragraph>Please fill up the blank fields below</Paragraph>
        </HeaderContainer>
        <Form>
          <Label>
            Username
            <Input />
          </Label>
          <Label>
            Password
            <Input />
          </Label>
          <Button primary onClick={() => history.push("/admin/dashboard")}>
            Login
          </Button>
        </Form>
      </AdminLoginContainer>
    </>
  );
};

export default AdminLogin;
