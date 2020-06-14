import React from "react";
import {
  NavbarContainer,
  BrandContainer,
  Menu,
  MenuItem,
  MenuLink,
} from "./Navbar.styles";

const Navbar = (props) => {
  return (
    <NavbarContainer>
      <BrandContainer>Myroute.</BrandContainer>
      <Menu>
        <MenuItem>
          <MenuLink active={props.home && props.home} to="/">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink active={props.login && props.login} to="/login">Sign In</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink active={props.register && props.register} to="/register">Sign Up</MenuLink>
        </MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
