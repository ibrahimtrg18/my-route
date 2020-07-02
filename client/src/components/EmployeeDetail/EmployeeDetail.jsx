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
        <Avatar src={require("../../assets/images/avatar-big.png")} />
        <AllWork>
          <TotalRoute>{props.employee.totalRoute} Route</TotalRoute>
          <Divider />
          <TotalDistance>{props.employee.totalDistance} KM</TotalDistance>
        </AllWork>
        <Information>
          <Name>{props.employee.name}</Name>
          <CustomId>{props.employee.customId}</CustomId>
          <PhoneNumber>{props.employee.phoneNumber}</PhoneNumber>
          <Address>{props.employee.address}</Address>
        </Information>
      </EmployeeContainer>
    </EmployeeDetailContainer>
  );
};

export default EmployeeDetail;
