import styled from "styled-components";
import { Link } from "react-router-dom";

export const SettingsContainer = styled.div`
  height: auto;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondaryBackground};
  padding: 0 32px;
  padding-bottom: 16px;
`;

export const HeaderContainer = styled.div`
  padding-top: 16px;
  margin-bottom: 32px;
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
  margin-bottom: 32px;
  cursor: pointer;
  & > span {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  margin-bottom: 32px;
  @media (max-width: 600px) {
    margin-bottom: 16px;
  }
`;

export const Banner = styled.img`
  width: 100%;
  text-align: center;
  @media (max-width: 600px) {
    display: none;
  }
`;
