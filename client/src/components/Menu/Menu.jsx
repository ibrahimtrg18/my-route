import React from "react";
import { MenuContainer, MenuList, MenuItem, MenuLink } from "./Menu.styles";

const Menu = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <MenuContainer>
      <MenuList>
        <MenuItem active={props.onprogress && props.onprogress}>
          <MenuLink to="/onprogress">On Progress</MenuLink>
        </MenuItem>
        <MenuItem active={props.history && props.history}>
          <MenuLink to="/history">History</MenuLink>
        </MenuItem>
        <MenuItem active={props.employee && props.employee}>
          <MenuLink to="/employee">Employee</MenuLink>
        </MenuItem>
        <MenuItem active={props.settings && props.settings}>
          <MenuLink to="/settings">Settings</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <MenuLink to="/login">Log out</MenuLink>
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;
