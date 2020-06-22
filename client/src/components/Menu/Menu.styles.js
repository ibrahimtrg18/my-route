import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div``;

export const MenuList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
`;

export const MenuItem = styled.li`
  white-space: nowrap;
  margin-right: 64px;
  @media (max-width: 600px) {
    margin-right: 24px;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  border-radius: 16px;
  padding: 8px 14px;
  color: ${(props) =>
    props.active ? props.theme.lightText : props.theme.secondaryText};
  background-color: ${(props) =>
    props.active ? props.theme.primaryButton : "transparent"};
`;
