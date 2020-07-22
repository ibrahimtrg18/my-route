import styled from "styled-components";
import { Link } from "react-router-dom";

export const AddRouteContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
`;

export const LeftSide = styled.div`
  margin: 0 32px;
  float: left;
  width: 70%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  @media (max-width: 600px) {
    margin-bottom: 16px;
  }
`;

export const Brand = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${(props) => props.theme.darkColor};
  font-size: 21px;
  font-weight: 500;
  cursor: pointer;
  & > span {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.primaryColor};
  margin-bottom: 32px;
`;
