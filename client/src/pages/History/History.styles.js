import styled from "styled-components";
import { Link } from "react-router-dom";

export const HistoryContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.secondaryBackground};
  min-height: 100vh;
  height: auto;
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

export const DatePickerContainer = styled.div`
  margin-bottom: 32px;
`;

export const ButtonDatePicker = styled.button`
  display: flex;
  align-items: center;
  border: transparent;
  padding: 8px 18px;
  font-size: 14px;
  font-weight: 400;
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.darkColor};
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  & > svg {
    margin-right: 8px;
  }
`;

export const EmployeeListContainer = styled.div``;

export const EmployeeContainer = styled.div`
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
  border-radius: 8px;
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

export const EmployeeImg = styled.img`
  border-radius: 8px;
  background-color: ${(props) => props.theme.secondaryBackground};
  width: 40px;
  height: 40px;
`;

export const EmployeeName = styled.div``;

export const EmployeeCustomId = styled.div``;

export const EmployeeDate = styled.div``;

export const EmployeeTime = styled.div``;

export const EmployeeDistance = styled.div``;
