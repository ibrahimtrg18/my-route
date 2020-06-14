import styled from "styled-components";
import {Link} from 'react-router-dom';

export const NavbarContainer = styled.div`
  background-color: #ffffff;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 0 6rem;
  font-family: "Poppins", sans-serif;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px){
    padding: 0 0.5rem;
  }
`;

export const BrandContainer = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

export const Menu = styled.div`
  display: flex;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  text-decoration: none;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
  cursor: pointer;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.active && props.theme.primaryText};
`
