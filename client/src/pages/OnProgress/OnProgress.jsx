import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";
import { ReactComponent as Add } from "../../assets/icons/add-circle.svg";
import {
  OnProgressContainer,
  LeftSide,
  HeaderContainer,
  Brand,
  BannerContainer,
  Banner,
  Button,
  EmployeeList,
  Employee,
  Avatar,
  Name,
  CustomId,
  Date,
  Time,
  Distance,
} from "./OnProgress.styles";
import EmployeeRoute from "../../components/EmployeeRoute/EmployeeRoute";
import Menu from "../../components/Menu/Menu";

const SERVER_URL = process.env.SERVER_URL || "http://localhost:4000";

const OnProgress = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const history = useHistory();

  useEffect(() => {
    if (!token) history.push("/login");
  }, [token]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${SERVER_URL}/api/business/onprogress`,
          {
            headers: {
              "x-token": token,
            },
          }
        );
        console.log(response);
      } catch (err) {
        console.log(err);
        localStorage.removeItem("token");
        setToken(null);
      }
      setPageLoading(false);
    })();
  }, []);

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

  if(!token){
    return <Redirect to="/login"/>
  }

  return (
    <>
      {!pageLoading ? (
        <OnProgressContainer>
          <LeftSide>
            <HeaderContainer>
              <Brand>
                <span>My</span>Route
              </Brand>
              <Menu onprogress={1} />
            </HeaderContainer>
            <BannerContainer>
              <Banner
                src={require("../../assets/images/onprogress.png")}
              ></Banner>
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
        </OnProgressContainer>
      ) : (
        "Loading.."
      )}
    </>
  );
};

export default OnProgress;
