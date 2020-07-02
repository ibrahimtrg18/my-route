import React from "react";
import { MenuContainer, MenuList, MenuItem, MenuLink } from "./Menu.styles";

const Menu = (props) => {
  return (
    <MenuContainer>
      <MenuList>
        <MenuItem active={props.dashboard && props.dashboard}>
          <MenuLink to="/dashboard">On Progress</MenuLink>
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
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;
