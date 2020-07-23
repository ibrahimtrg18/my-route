import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AdminDashboardContainer,
  HeaderContainer,
  Brand,
  Container,
  LeftSide,
  BusinessListContainer,
  RightSide,
  EmployeeListContainer,
  List,
  BusinessContainer,
  BusinessIndex,
  BusinessName,
  BusinessId,
  BusinessEmail,
  BusinessEmployee,
  BusinessAction,
  IconContainer,
  EmployeeContainer,
  EmployeeAvatar,
  EmployeeCustomId,
  EmployeeName,
} from "./AdminDashboard.styles";
import { ReactComponent as Trash } from "../../assets/icons/trash.svg";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

const AdminDashboard = (props) => {
  const [business, setBusiness] = useState([]);
  const [employees, setEmployees] = useState([]);

  const updateEmployees = (employees) => {
    setEmployees(employees);
  };

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(`${SERVER_URL}/api/admin/business`);
        console.log(response);
        setBusiness(response.data.data.business);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <AdminDashboardContainer>
      <Container>
        <LeftSide>
          <HeaderContainer>
            <Brand to="/admin/dashboard">
              <span>My</span>Route
            </Brand>
          </HeaderContainer>
          <BusinessList business={business} setEmployees={updateEmployees} />
        </LeftSide>
        <RightSide>
          <EmployeeList employees={employees} />
        </RightSide>
      </Container>
    </AdminDashboardContainer>
  );
};

function BusinessList({ business, setEmployees }) {
  return (
    <BusinessListContainer>
      {business.map((bus, i) => {
        return (
          <BusinessContainer
            key={bus.id}
            onClick={() => setEmployees(bus.employee)}
          >
            <BusinessIndex>{i}</BusinessIndex>
            <BusinessName>{bus.name}</BusinessName>
            <BusinessId>{bus.id}</BusinessId>
            <BusinessEmail>{bus.email}</BusinessEmail>
            <BusinessEmployee>{bus.employee.length} Employee</BusinessEmployee>
            <BusinessAction>
              <IconContainer>
                <Trash width={20} height={20} />
              </IconContainer>
            </BusinessAction>
          </BusinessContainer>
        );
      })}
    </BusinessListContainer>
  );
}

function EmployeeList({ employees }) {
  console.log(employees);
  return (
    <EmployeeListContainer>
      <List>
        {employees.map((emp) => {
          return (
            <EmployeeContainer key={emp.id}>
              <EmployeeAvatar
                src={require("../../assets/images/defaultavatar.png")}
              />
              <div>
                <EmployeeName>{emp.name}</EmployeeName>
                <EmployeeCustomId>{emp.custom_id}</EmployeeCustomId>
              </div>
            </EmployeeContainer>
          );
        })}
      </List>
    </EmployeeListContainer>
  );
}

export default AdminDashboard;
