import styled from "styled-components";
import { EmployeeRouteContainer } from "../../components/EmployeeRoute/EmployeeRoute.styles";
import { Link } from "react-router-dom";

export const OnProgressContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
  display: flex;
  height: 100%;
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

export const ContentContainer = styled.div``;

export const BannerContainer = styled.div`
  width: 100%;
  height: 300px;
  height: auto;
  position: relative;
  margin-bottom: 32px;
  @media (max-width: 600px) {
    margin-bottom: 16px;
    height: auto;
  }
`;

export const Banner = styled.img`
  width: 100%;
  text-align: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Button = styled(Link)`
  position: relative;
  display: inline-flex !important;
  left: 24px;
  top: -60px;
  background-color: ${(props) => props.theme.primaryButton};
  box-shadow: ${(props) => props.theme.boxShadowButton};
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.whiteColor};
  font-weight: 500;
  padding: ${(props) => (props.px ? props.px : 8)}px
    ${(props) => (props.py ? props.py : 16)}px;
  border-color: transparent;
  border-radius: 16px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-decoration: none;
  & > svg {
    margin-left: 8px;
  }
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 600px) {
    position: static;
  }
`;

export const EmployeeList = styled.div``;

export const Employee = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 10% 25% 25% 15% 15% 10%;
  grid-column-gap: auto;
  text-align: center;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  font-size: 14px;
  padding: 4px 8px;
  margin-bottom: 16px;
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.id === props.active
        ? props.theme.secondaryBackground
        : props.theme.primaryBackground};
  }
  background-color: ${(props) =>
    props.id === props.active
      ? props.theme.primaryBackground
      : props.theme.secondaryBackground};
  @media (max-width: 600px) {
    overflow-x: scroll;
    grid-template-columns: repeat(6, auto);
  }
`;

export const Avatar = styled.img`
  border-radius: 16px;
  background-color: ${(props) => props.theme.secondaryBackground};
  width: 48px;
  height: 48px;
`;

export const Name = styled.div`
  font-size: 14;
  font-weight: 400;
`;

export const CustomId = styled.div`
  font-size: 14;
  font-weight: 600;
`;

export const Date = styled.div`
  font-size: 14;
  font-weight: 400;
`;

export const Time = styled.div`
  font-size: 14;
  font-weight: 400;
`;

export const Distance = styled.div`
  font-size: 14;
  font-weight: 400;
`;

export const Destination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    margin-right: 2px;
  }
`;
