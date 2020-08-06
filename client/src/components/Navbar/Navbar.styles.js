import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  background-color: #ffffff;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 0 128px;
  font-family: "Poppins", sans-serif;
  margin-bottom: ${(props) =>
    props.mb !== undefined ? `${props.mb}px` : "21px"};
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    padding: 0 8px;
  }
`;

export const BrandContainer = styled.div`
  font-size: 21px;
  font-weight: 500;
  cursor: pointer;
  & > span {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const Menu = styled.div`
  display: flex;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  text-decoration: none;
  margin-right: 24px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: ${(props) =>
    props.active ? props.theme.primaryColor : props.theme.secondaryColor};
  &:hover {
    text-decoration: underline;
  }
`;
