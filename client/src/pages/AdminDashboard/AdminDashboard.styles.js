import styled from "styled-components";
import { Link } from "react-router-dom";

export const AdminDashboardContainer = styled.div`
  height: 100vh;
  max-height: auto;
  background-color: ${(props) => props.theme.secondaryBackground};
  padding: 0 1px;
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

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftSide = styled.div`
  padding: 0 32px;
`;

export const RightSide = styled.div`
  background-color: ${(props) => props.theme.whiteColor};
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  height: 100vh;
  max-height: auto;
`;

export const BusinessListContainer = styled.div``;

export const EmployeeListContainer = styled.div``;

export const BusinessContainer = styled.div`
  display: grid;
  grid-template-columns: auto 30% 10% 30% 20% auto;
  grid-column-gap: auto;
  width: 100%;
  text-align: center;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  font-size: 14px;
  padding: 4px 8px;
  margin-bottom: 16px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
  }
  @media (max-width: 600px) {
    overflow-x: scroll;
    grid-template-columns: repeat(5, auto);
  }
`;

export const BusinessIndex = styled.div`
  padding: 8px;
  width: 38px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 8px;
  color: ${(props) => props.theme.whiteColor};
`;

export const BusinessName = styled.div``;

export const BusinessId = styled.div``;

export const BusinessEmail = styled.div``;

export const BusinessEmployee = styled.div``;

export const BusinessAction = styled.div``;

export const IconContainer = styled.div`
  float: right;
  padding: 6px;
  width: 38px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 8px;
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.primaryDarkColor};
  }
`;

export const List = styled.div`
  padding: 32px 32px;
`;

export const EmployeeContainer = styled.div`
  display: flex;
  padding: 16px 0;
  border-bottom: solid 1px ${(props) => props.theme.tertiaryColor};
  align-items: center;
`;

export const EmployeeAvatar = styled.img`
  width: 48px;
  height: 48px;
  max-width: 48px;
  max-height: auto;
  background-color: ${(props) => props.theme.primaryColor};
  margin-right: 16px;
`;

export const EmployeeName = styled.div`
  font-size: 14px;
  text-transform: capitalize;
`;

export const EmployeeCustomId = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;
