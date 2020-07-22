import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AddRouteContainer,
  LeftSide,
  HeaderContainer,
  Brand,
  Divider,
} from "./AddRoute.styles";
import AddRouteForm from "../../components/AddRouteForm/AddRouteForm";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import EmployeeStandby from "../../components/EmployeeStandby/EmployeeStandby";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

const AddRoute = () => {
  const token = localStorage.getItem("token");
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState([]);
  const [employee, setEmployee] = useState({});
  const [employees, setEmployees] = useState([]);

  const updateSelectedDestination = (destination) => {
    const selected = selectedDestination.find(
      (selected) => selected.id == destination.id
    );
    if (!selected) {
      setSelectedDestination([...selectedDestination, { id: destination.id }]);
    } else {
      setSelectedDestination(
        selectedDestination.filter((selected) => selected.id !== destination.id)
      );
    }
  };

  const selectEmployee = async ({ id }) => {
    const data = { employeeId: id, destination: selectedDestination };
    try {
      const response = await axios.post(
        `${SERVER_URL}/api/business/route`,
        data,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      window.location.reload();
    } catch (err) {
      console.error(err.response);
    }
  };

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${SERVER_URL}/api/business/destination`,
          {
            headers: {
              "x-token": token,
            },
          }
        );
        setDestinations(response.data.data.destination);
      } catch (err) {
        console.error(err.response);
      }
    })();
    (async function () {
      try {
        const response = await axios.get(
          `${SERVER_URL}/api/business/employee/standby`,
          {
            headers: {
              "x-token": token,
            },
          }
        );
        setEmployees(response.data.data.employee);
      } catch (err) {
        console.error(err.response);
      }
    })();
  }, []);

  return (
    <AddRouteContainer>
      <LeftSide>
        <HeaderContainer>
          <Brand to="/onprogress">
            <span>My</span>Route
          </Brand>
        </HeaderContainer>
        <AddRouteForm />
        <Divider />
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            destination={{ index, ...destination }}
            selectedDestination={selectedDestination}
            updateSelectedDestination={updateSelectedDestination}
          />
        ))}
      </LeftSide>
      <EmployeeStandby employees={employees} selectEmployee={selectEmployee} />
    </AddRouteContainer>
  );
};

export default AddRoute;
