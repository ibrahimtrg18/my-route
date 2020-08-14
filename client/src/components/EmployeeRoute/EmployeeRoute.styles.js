import styled from "styled-components";
import { Link } from "react-router-dom";

export const EmployeeRouteContainer = styled.div`
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
  margin-bottom: 16px;
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  margin-right: 16px;
  background-color: ${(props) => props.theme.primaryBackground};
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
`;

export const CustomId = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;

// map
export const MapContainer = styled.div`
  width: auto;
  height: 189px;
  border-radius: 8px;
  margin-bottom: 72px;
`;

export const AddDestination = styled(Link)`
  position: relative;
  top: -25px;
  left: 22%;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
  &:hover {
    text-decoration: underline;
  }
`;

export const DistanceTotal = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.secondaryColor};
`;
