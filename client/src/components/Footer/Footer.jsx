import React from "react";
import {
  FooterContainer,
  BrandContainer,
  JoinContainer,
  AboutContainer,
  ContactContainer,
  Title,
  List,
  Item,
} from "./Footer.styles";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <BrandContainer>
          <span>My</span>route.
          <p>We kaboom your business with best performance</p>
        </BrandContainer>
        <JoinContainer>
          <Title>For Beginners</Title>
          <List>
            <Item>New Account</Item>
            <Item>Start Make a Route</Item>
            <Item>Mobile App</Item>
          </List>
        </JoinContainer>
        <AboutContainer>
          <List>
            <Title>Explorer Us</Title>
            <Item>Our Careers</Item>
            <Item>Privacy</Item>
            <Item>Term & Conditions</Item>
          </List>
        </AboutContainer>
        <ContactContainer>
          <List>
            <Title>Connect Us</Title>
            <Item>support@myroute.id</Item>
            <Item>021-2208-1996</Item>
            <Item>Menteng, Medan</Item>
          </List>
        </ContactContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
