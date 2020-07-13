import styled from "styled-components";

export const EmployeeDetailContainer = styled.div`
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
  font-size: 14px;
  font-weight: 400;
`;

export const Divider = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
  background-color: #e5e5e5;
  width: 1px;
  justify-self: center;
`;

export const Avatar = styled.img`
  width: 100%;
  height: auto;
  margin-right: 16px;
  background-color: ${(props) => props.theme.primaryBackground};
`;

export const AllWork = styled.div`
  display: grid;
  grid-template-columns: 48% 2% 48%;
  text-align: center;
  height: 48px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
  font-weight: 500;
`;

export const TotalRoute = styled.div`
  align-self: center;
`;

export const TotalDistance = styled.div`
  align-self: center;
`;

export const Information = styled.div`
  margin-top: 32px;
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top: 16px;
`;

export const CustomId = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-top: 16px;
  text-transform: uppercase;
`;

export const PhoneNumber = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top: 16px;
`;

export const Address = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top: 16px;
`;
