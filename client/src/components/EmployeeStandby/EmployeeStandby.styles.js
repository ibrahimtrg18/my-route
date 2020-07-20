import styled from "styled-components";

export const EmployeeStandbyContainer = styled.div`
  width: 30%;
  height: auto;
  min-height: 100vh;
  background-color: ${(props) => props.theme.primaryBackground};
  padding: 32px;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const EmployeeContainer = styled.div`
  display: flex;
  align-items: auto;
  padding: 8px 0;
  border-bottom: 1px solid ${(props) => props.theme.secondaryBackground};
`;

export const EmployeeImage = styled.img`
  width: 56px;
  height: auto;
  max-width: 72px;
  max-height: 72px;
  margin-right: 8px;
`;

export const EmployeeName = styled.div`
  font-size: 14px;
`;

export const EmployeeCustomId = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

export const EmployeeStatus = styled.div`
  & > span {
    display: inline-block;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    margin-right: 4px;
    background-color: ${(props) =>
      props.status ? props.theme.dangerColor : props.theme.primaryColor};
  }
`;

export const EmployeeAction = styled.div`
  margin-left: auto;
  align-self: center;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  background-color: ${(props) =>
    props.action ? props.theme.primaryColor : props.theme.tertiaryColor};
  border-radius: 8px;
  border: transparent;
  &:hover {
    background-color: ${(props) =>
      props.action
        ? props.theme.primaryDarkColor
        : props.theme.tertiaryDarkColor};
  }
`;
