import React, { useState } from "react";
import {
  DashboardContainer,
  LeftSide,
  HeaderContainer,
  Brand,
  BannerContainer,
  Image,
  Button,
  EmployeeList,
  Employee,
  Avatar,
  Name,
  CustomId,
  Date,
  Time,
  Distance,
} from "./Dashboard.styles";

import { ReactComponent as Add } from "../../assets/icons/add-circle.svg";
import Menu from "../../components/Menu/Menu";
import EmployeeRoute from "../../components/EmployeeRoute/EmployeeRoute";

const Dashboard = () => {
  const [employees, setEmployees] = useState([
    {
      avatar: "../../assets/images/avatar.png",
      name: "Ibrahim Tarigan",
      customId: "AF1020DC3040",
      date: "17 Mei 2020",
      time: "09 : 30",
      distance: 42,
    },
    {
      avatar: "../../assets/images/avatar.png",
      name: "Jonatan Prima",
      customId: "AF1020DC1234",
      date: "17 Mei 2020",
      time: "09 : 30",
      distance: 43,
    },
    {
      avatar: "../../assets/images/avatar.png",
      name: "Anggiat Pasaribu",
      customId: "AF1020DC4321",
      date: "17 Mei 2020",
      time: "09 : 30",
      distance: 44,
    },
  ]);

  const [employee, setEmployee] = useState({});

  const handleEmployeeClick = (employee) => {
    setEmployee(employee);
    console.log(employee);
  };

  return (
    <>
      <DashboardContainer>
        <LeftSide>
          <HeaderContainer>
            <Brand>
              <span>My</span>Route
            </Brand>
            <Menu dashboard={1} />
          </HeaderContainer>
          <BannerContainer>
            <Image src={require("../../assets/images/dashboard.png")} />
            <Button>
              Add new route <Add width={21} height={21} />
            </Button>
          </BannerContainer>
          <EmployeeList>
            {employees.map((emp) => {
              return (
                <Employee
                  key={emp.customId}
                  customId={emp.customId}
                  active={employee.customId}
                  onClick={() => handleEmployeeClick(emp)}
                >
                  <Avatar src={require("../../assets/images/avatar.png")} />
                  <Name>{emp.name}</Name>
                  <CustomId>{emp.customId}</CustomId>
                  <Date>{emp.date}</Date>
                  <Time>{emp.time}</Time>
                  <Distance>{emp.distance}KM</Distance>
                </Employee>
              );
            })}
          </EmployeeList>
        </LeftSide>
        <EmployeeRoute employee={employee} />
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
