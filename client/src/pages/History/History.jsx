import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  HistoryContainer,
  LeftSide,
  HeaderContainer,
  Brand,
  ButtonDatePicker,
  DatePickerContainer,
  EmployeeListContainer,
  EmployeeContainer,
  EmployeeImg,
  EmployeeName,
  EmployeeCustomId,
  EmployeeDate,
  EmployeeTime,
  EmployeeDistance,
} from "./History.styles";
import Menu from "../../components/Menu/Menu";
import EmployeeHistory from "../../components/EmployeeHistory/EmployeeHistory";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg";

const CustomDatePicker = ({ value, onClick }) => {
  return (
    <ButtonDatePicker onClick={onClick}>
      <CalendarIcon width={21} height={21} />
      {value}
    </ButtonDatePicker>
  );
};

const History = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [date, setDate] = useState(new Date());
  const [employees] = useState([
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

  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <HistoryContainer>
      <LeftSide>
        <HeaderContainer>
          <Brand to="/history">
            <span>My</span>Route
          </Brand>
          <Menu history={1} />
        </HeaderContainer>
        <DatePickerContainer>
          <DatePicker
            startDate={date}
            selected={date}
            dateFormat="dd/MMMM/yyyy"
            locale="id"
            onChange={(date) => setDate(date)}
            customInput={<CustomDatePicker />}
          />
        </DatePickerContainer>
        <EmployeeListContainer>
          {employees.map((emp) => {
            return (
              <EmployeeContainer
                key={emp.customId}
                customId={emp.customId}
                active={employee.customId}
                onClick={() => handleEmployeeClick(emp)}
              >
                <EmployeeImg src={require("../../assets/images/avatar.png")} />
                <EmployeeName>{emp.name}</EmployeeName>
                <EmployeeCustomId>{emp.customId}</EmployeeCustomId>
                <EmployeeDate>{emp.date}</EmployeeDate>
                <EmployeeTime>{emp.time}</EmployeeTime>
                <EmployeeDistance>{emp.distance}KM</EmployeeDistance>
              </EmployeeContainer>
            );
          })}
        </EmployeeListContainer>
      </LeftSide>
      <EmployeeHistory employee={employee} />
    </HistoryContainer>
  );
};

export default History;
