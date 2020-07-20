import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {
  EmployeeContainer,
  LeftSide,
  HeaderContainer,
  Brand,
  BannerContainer,
  Banner,
  Button,
  Search,
  EmployeeList,
  EmployeeCard,
  Avatar,
  Name,
  CustomId,
  Status,
  TotalRoute,
  TotalDistance,
} from "./Employee.styles";
import Menu from "../../components/Menu/Menu";
import EmployeeDetail from "../../components/EmployeeDetail/EmployeeDetail";
import { ReactComponent as Add } from "../../assets/icons/add-circle.svg";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

const Employee = () => {
  const token = localStorage.getItem("token");
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    (async function () {
      const response = await axios.get(`${SERVER_URL}/api/business/employee`, {
        headers: {
          "x-token": token,
        },
      });
      const employees = await response.data.data.employee.map((employee) => {
        employee.phone_number = employee.phone_number
          .match(/.{1,4}/g)
          .join(" ");
        return employee;
      });
      setEmployees(employees);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEmployeeClick = (employee) => {
    setEmployee(employee);
  };

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <EmployeeContainer>
      <LeftSide>
        <HeaderContainer>
          <Brand to="/employee">
            <span>My</span>Route
          </Brand>
          <Menu employee={1} />
        </HeaderContainer>
        <BannerContainer>
          <Banner src={require("../../assets/images/employee.png")}></Banner>
          <Button to="/employee/register">
            Add new employee <Add width={21} height={21} />
          </Button>
        </BannerContainer>
        <Search type="text" placeholder="Search Courier..." />
        <EmployeeList>
          {employees.map((emp) => {
            return (
              <EmployeeCard
                key={emp.id}
                customId={emp.custom_id}
                active={employee.custom_id}
                onClick={() => handleEmployeeClick(emp)}
              >
                <Avatar src={require("../../assets/images/avatar.png")} />
                <Name>{emp.name}</Name>
                <CustomId>{emp.custom_id}</CustomId>
                <Status status={emp.status}>
                  <span></span>
                  {emp.status === 0 ? "Standby" : "On Way"}
                </Status>
                <TotalRoute>{emp.total_route} route</TotalRoute>
                <TotalDistance>{emp.total_distance}KM</TotalDistance>
              </EmployeeCard>
            );
          })}
        </EmployeeList>
      </LeftSide>
      <EmployeeDetail employee={employee} />
    </EmployeeContainer>
  );
};

export default Employee;
