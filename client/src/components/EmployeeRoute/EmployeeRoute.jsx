import React from "react";
import {
  EmployeeRouteContainer,
  EmployeeContainer,
  Avatar,
  Name,
  CustomId,
} from "./EmployeeRoute.styles";

const EmployeeRoute = (props) => {
  return (
    <EmployeeRouteContainer>
      <EmployeeContainer>
        <Avatar src={require("../../assets/images/avatar.png")} />
        <div>
          <Name>{props.employee.name}</Name>
          <CustomId>{props.employee.customId}</CustomId>
        </div>
      </EmployeeContainer>
    </EmployeeRouteContainer>
  );
};

export default EmployeeRoute;
