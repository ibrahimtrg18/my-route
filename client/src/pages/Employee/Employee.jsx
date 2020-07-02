import React, { useState } from "react";
import {
  EmployeeContainer,
  LeftSide,
  HeaderContainer,
  Brand,
  BannerContainer,
  Banner,
  Button,
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

const Employee = () => {
  const [employees] = useState([
    {
      avatar: "../../assets/images/avatar.png",
      name: "Ibrahim Tarigan",
      customId: "AF1020DC3040",
      status: 0,
      totalRoute: 20,
      totalDistance: 420,
      phoneNumber: "081209129012",
      address: "Jln. Jend jamin ginting no.685",
    },
    {
      avatar: "../../assets/images/avatar.png",
      name: "Jonatan Prima",
      customId: "AF1020DC1234",
      status: 1,
      totalRoute: 30,
      totalDistance: 430,
      phoneNumber: "085325232425",
      address: "Jln. Thamrin no.140",
    },
    {
      avatar: "../../assets/images/avatar.png",
      name: "Anggiat Pasaribu",
      customId: "AF1020DC4321",
      status: 1,
      totalRoute: 40,
      totalDistance: 440,
      phoneNumber: "087237332777",
      address: "Jln. Sekip no.125",
    },
  ]);
  const [employee, setEmployee] = useState({});
  const handleEmployeeClick = (employee) => {
    setEmployee(employee);
    console.log(employee);
  };
  return (
    <EmployeeContainer>
      <LeftSide>
        <HeaderContainer>
          <Brand>
            <span>My</span>Route
          </Brand>
          <Menu employee={1} />
        </HeaderContainer>
        <BannerContainer>
          <Banner src={require("../../assets/images/employee.png")}></Banner>
          <Button>
            Add new employee <Add width={21} height={21} />
          </Button>
        </BannerContainer>
        <EmployeeList>
          {employees.map((emp) => {
            return (
              <EmployeeCard
                key={emp.customId}
                customId={emp.customId}
                active={employee.customId}
                onClick={() => handleEmployeeClick(emp)}
              >
                <Avatar src={require("../../assets/images/avatar.png")} />
                <Name>{emp.name}</Name>
                <CustomId>{emp.customId}</CustomId>
                <Status>{emp.status === 0 ? "Standby" : "On Way"}</Status>
                <TotalRoute>{emp.totalRoute}</TotalRoute>
                <TotalDistance>{emp.totalDistance}KM</TotalDistance>
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
