import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  EmployeeStandbyContainer,
  EmployeeContainer,
  EmployeeImage,
  EmployeeName,
  EmployeeCustomId,
  EmployeeStatus,
  EmployeeAction,
} from "./EmployeeStandby.styles";
import { ReactComponent as Send } from "../../assets/icons/send.svg";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

const EmployeeStandby = ({ employees, selectEmployee }) => {
  return (
    <EmployeeStandbyContainer>
      {employees.map((employee) => {
        return (
          <EmployeeContainer key={employee.id}>
            <EmployeeImage src={require("../../assets/images/defaultavatar.png")}/>
            <div>
              <EmployeeName>{employee.name}</EmployeeName>
              <EmployeeCustomId>{employee.custom_id}</EmployeeCustomId>
              <EmployeeStatus status={employee.status}>
                <span></span>
                {employee.status === 0 ? "Standby" : "On Way"}
              </EmployeeStatus>
            </div>
            <EmployeeAction onClick={() => selectEmployee(employee)}>
              <Send
                style={{ verticalAlign: "middle" }}
                width={32}
                height={32}
              />
            </EmployeeAction>
          </EmployeeContainer>
        );
      })}
    </EmployeeStandbyContainer>
  );
};

export default EmployeeStandby;
