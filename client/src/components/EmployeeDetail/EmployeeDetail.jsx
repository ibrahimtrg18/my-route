import React from "react";
import {
  EmployeeDetailContainer,
  EmployeeContainer,
  Avatar,
  TotalRoute,
  TotalDistance,
  Name,
  CustomId,
  PhoneNumber,
  Address,
  AllWork,
  Information,
  Divider,
} from "./ExmployeeDetail.styles";

const EmployeeDetail = (props) => {
  return (
    <EmployeeDetailContainer>
      <EmployeeContainer>
        <Avatar
          src={
            props.employee.id &&
            require("../../assets/images/avatar-big.png")
          }
        />
        {props.employee.id && (
          <AllWork>
            <TotalRoute>{props.employee.total_route} Route</TotalRoute>
            <Divider />
            <TotalDistance>{props.employee.total_distance} KM</TotalDistance>
          </AllWork>
        )}
        <Information>
          <Name>{props.employee.name}</Name>
          <CustomId>{props.employee.custom_id}</CustomId>
          <PhoneNumber>{props.employee.phone_number}</PhoneNumber>
          <Address>{props.employee.address}</Address>
        </Information>
      </EmployeeContainer>
    </EmployeeDetailContainer>
  );
};

export default EmployeeDetail;
