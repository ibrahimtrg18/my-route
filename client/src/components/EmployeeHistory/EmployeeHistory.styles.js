import styled from "styled-components";

export const EmployeeHistoryContainer = styled.div`
  float: right;
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
  & > div {
    display: inline-block;
  }
  align-items: flex-end;
`;

export const Avatar = styled.img`
  display: none;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  margin-right: 16px;
  background-color: ${(props) => props.theme.primaryBackground};
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

export const CustomId = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
