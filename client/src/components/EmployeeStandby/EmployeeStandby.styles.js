import styled from "styled-components";

export const EmployeeStandbyContainer = styled.div`
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
