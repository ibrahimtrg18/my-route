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
import { ReactComponent as Direction } from "../../assets/icons/direction.svg";
import { ReactComponent as Pin } from "../../assets/icons/pin.svg";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

const Employee = () => {
  const token = localStorage.getItem("token");
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [search, setSearch] = useState("");

  const handleEmployeeClick = (employee) => {
    setEmployee(employee);
  };

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
      console.log(response.data);
      setEmployees(employees);
      setFilteredEmployees(employees);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilteredEmployees(
      employees.filter(
        (emp) => emp.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
    );
  }, [search]);

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
        <Search
          type="text"
          placeholder="Search Courier..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <EmployeeList>
          {filteredEmployees.map((emp) => {
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
                <TotalRoute>
                  <Direction width={14} width={14} />
                  {emp.allRoute.length}
                </TotalRoute>
                <TotalDistance>
                  <Pin width={12} width={12} />
                  {emp.allDestination.length}
                </TotalDistance>
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
