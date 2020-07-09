import styled from "styled-components";
import { Link } from "react-router-dom";

export const EmployeeContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.secondaryBackground};
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

export const Brand = styled.div`
  display: inline-block;
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

export const Button = styled(Link)`
  position: absolute;
  left: 24px;
  bottom: 24px;
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

export const EmployeeCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 10% 30% 30% 10% 10% 10%;
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
      props.customId === props.active
        ? props.theme.secondaryBackground
        : props.theme.primaryBackground};
  }
  background-color: ${(props) =>
    props.customId === props.active
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

export const Name = styled.div``;

export const CustomId = styled.div``;

export const Status = styled.div``;

export const TotalRoute = styled.div``;

export const TotalDistance = styled.div``;
