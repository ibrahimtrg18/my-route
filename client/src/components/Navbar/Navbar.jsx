import React from "react";
import {
  NavbarContainer,
  BrandContainer,
  Menu,
  MenuItem,
  MenuLink,
} from "./Navbar.styles";

const Navbar = (props) => {
  const token = localStorage.getItem("token");

  console.log(props);
  return (
    <NavbarContainer>
      <BrandContainer>
        <span>My</span>route.
      </BrandContainer>
      {props.home || props.login || props.register ? (
        <Menu>
          <MenuItem>
            <MenuLink active={props.home && props.home} to="/">
              Home
            </MenuLink>
          </MenuItem>
          {token ? (
            <>
              <MenuItem>
                <MenuLink
                  active={props.onprogress && props.onprogress}
                  to="/onprogress"
                >
                  Dashboard
                </MenuLink>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem>
                <MenuLink active={props.login && props.login} to="/login">
                  Login
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink
                  active={props.register && props.register}
                  to="/register"
                >
                  Register
                </MenuLink>
              </MenuItem>
            </>
          )}
        </Menu>
      ) : (
        <></>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
