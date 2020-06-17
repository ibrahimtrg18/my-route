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

const SignIn = () => {
  return (
    <>
      <Navbar login={true} />
      <LoginContainer>
        <HeaderContainer>
          <Title>Sign in</Title>
          <Paragraph>Please fill up the blank fields below</Paragraph>
        </HeaderContainer>
        <ContentContainer>
          <Image src={require("../../assets/images/authentication.png")} />
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
          <PrimaryButton px={8} py={64} mb={16}>Sign in</PrimaryButton>
          <Paragraph>
            Don't have account ?
          </Paragraph>
          <SecondaryButton px={8} py={64} mt={16} mb={16}>Sign up</SecondaryButton>
        </AfterContent>
      </LoginContainer>
    </>
  );
};

export default SignIn;
