import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  SignupContainer,
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
} from "./Register.styles";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/Button/Button.styles";

const Signup = () => {
  return (
    <>
      <Navbar register={true} />
      <SignupContainer>
        <HeaderContainer>
          <Title>Register</Title>
          <Paragraph>Please fill up the blank fields below</Paragraph>
        </HeaderContainer>
        <ContentContainer>
          <Image src={require("../../assets/images/register.png")} />
          <Divider />
          <Form>
            <Label>
              Business Name
              <Input type="text" />
            </Label>
            <Label>
              Email Address
              <Input type="text" />
            </Label>
            <Label>
              Phone Number
              <Input type="text" />
            </Label>
            <Label>
              Password
              <Input type="password" />
            </Label>
          </Form>
        </ContentContainer>
        <AfterContent>
          <PrimaryButton px={8} py={64} mb={16}>Register</PrimaryButton>
          <Paragraph>
            Already have account ?
          </Paragraph>
          <SecondaryButton px={8} py={74} mt={16} mb={16}>Login</SecondaryButton>
        </AfterContent>
      </SignupContainer>
    </>
  );
};

export default Signup;
