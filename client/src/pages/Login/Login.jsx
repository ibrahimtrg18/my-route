import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  LoginContainer,
  HeaderContainer,
  Title,
  Paragraph,
  ContentContainer,
  Image,
  Divider,
  Form,
  Label,
  Input,
  AfterContent,
} from "./Login.styles";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/Button/Button.styles";

const Login = () => {
  return (
    <>
      <Navbar login={true} />
      <LoginContainer>
        <HeaderContainer>
          <Title>Login</Title>
          <Paragraph>Please fill up the blank fields below</Paragraph>
        </HeaderContainer>
        <ContentContainer>
          <Image src={require("../../assets/images/login.png")} />
          <Divider />
          <Form>
            <Label>
              Email Address
              <Input type="text" />
            </Label>
            <Label>
              Password
              <Input type="password" />
            </Label>
          </Form>
        </ContentContainer>
        <AfterContent>
          <PrimaryButton px={8} py={74} mb={16}>Login</PrimaryButton>
          <Paragraph>
            Don't have account ?
          </Paragraph>
          <SecondaryButton px={8} py={64} mt={16} mb={16}>Register</SecondaryButton>
        </AfterContent>
      </LoginContainer>
    </>
  );
};

export default Login;
