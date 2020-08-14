import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
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
  Destination,
} from "./OnProgress.styles";
import EmployeeRoute from "../../components/EmployeeRoute/EmployeeRoute";
import Menu from "../../components/Menu/Menu";
import { ReactComponent as PinIcon } from "../../assets/icons/pin.svg";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

const OnProgress = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [pageLoading, setPageLoading] = useState(true);
  const [employee, setEmployee] = useState({});
  const [employees, setEmployees] = useState([]);
  const history = useHistory();

  const handleEmployeeClick = (employee) => {
    setEmployee(employee);
  };

  useEffect(() => {
    if (!token) history.push("/login");
  }, [token]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${SERVER_URL}/api/business/employee/onway`,
          {
            headers: {
              "x-token": token,
            },
          }
        );
        console.log(response.data);
        setEmployees(response.data.data.employees);
      } catch (err) {
        console.log(err);
        localStorage.removeItem("token");
        setToken(null);
      }
      setPageLoading(false);
    })();
  }, []);

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      {!pageLoading ? (
        <OnProgressContainer>
          <LeftSide>
            <HeaderContainer>
              <Brand to="/onprogress">
                <span>My</span>Route
              </Brand>
              <Menu onprogress={1} />
            </HeaderContainer>
            <BannerContainer>
              <Banner src={require("../../assets/images/onprogress.png")} />
              <Button to="/route/add">
                Add new route <Add width={21} height={21} />
              </Button>
            </BannerContainer>
            <EmployeeList>
              {employees.map((emp) => {
                console.log(emp);
                return (
                  <Employee
                    key={emp.employee.id}
                    id={emp.employee.id}
                    active={employee.id}
                    onClick={() => handleEmployeeClick(emp.employee)}
                  >
                    <Avatar src={require("../../assets/images/avatar.png")} />
                    <Name>{emp.employee.name}</Name>
                    <CustomId>{emp.employee.custom_id}</CustomId>
                    <Date>
                      {moment(emp.employee.route.created_at).format(
                        "DD MMMM YYYY"
                      )}
                    </Date>
                    <Time>
                      {moment(emp.employee.route.created_at).format("HH:mm")}
                    </Time>
                    <Destination>
                      <PinIcon width={14} height={14} />
                      {emp.employee.route.destination.length}
                    </Destination>
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
