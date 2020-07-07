import React from "react";
import {
  EmployeeHistoryContainer,
  EmployeeContainer,
  Avatar,
  Name,
  CustomId,
} from "./EmployeeHistory.styles";

const EmployeeHistory = (props) => {
  return (
    <EmployeeHistoryContainer>
      <EmployeeContainer>
        <Avatar src={require("../../assets/images/avatar.png")} />
        <div>
          <Name>{props.employee.name}</Name>
          <CustomId>{props.employee.customId}</CustomId>
        </div>
      </EmployeeContainer>
    </EmployeeHistoryContainer>
  );
};

export default EmployeeHistory;
