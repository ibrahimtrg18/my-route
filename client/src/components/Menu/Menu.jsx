import React from "react";
import { MenuContainer, MenuList, MenuItem, MenuLink } from "./Menu.styles";

const Menu = (props) => {
  return (
    <MenuContainer>
      <MenuList>
        <MenuItem>
          <MenuLink active={props.dashboard && props.dashboard} to="/dashboard">
            On Progress
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink active={props.history && props.history} to="/history">
            History
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink active={props.employee && props.employee} to="/employee">
            Employee
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink active={props.settings && props.settings} to="/settings">
            Settings
          </MenuLink>
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;
