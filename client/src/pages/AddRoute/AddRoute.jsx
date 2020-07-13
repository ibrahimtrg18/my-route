import React, { useState } from "react";
import {
  AddRouteContainer,
  LeftSide,
  HeaderContainer,
  Brand,
  Divider,
} from "./AddRoute.styles";
import AddRouteForm from "../../components/AddRouteForm/AddRouteForm";
import DistanceCard from "../../components/DistanceCard/DistanceCard";
import EmployeeStandby from "../../components/EmployeeStandby/EmployeeStandby";

const AddRoute = () => {
  const [distances, setDistances] = useState([
    {
      id: 1,
      idItem: "AF100001",
      address: "Alamat 1",
      email: "example1@gmail.com",
      action: 0,
    },
    {
      id: 2,
      idItem: "AF100002",
      address: "Alamat 2",
      email: "example2@gmail.com",
      action: 0,
    },
    {
      id: 3,
      idItem: "AF100003",
      address: "Alamat 3",
      email: "example3@gmail.com",
      action: 1,
    },
  ]);

  const handleSetAction = (id) => {
    setDistances(
      distances.map((distance) => {
        if (distance.id == id) {
          distance.action = distance.action ? 0 : 1;
        }
        return distance;
      })
    );
  };
  
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
        {distances.map((distance, index) => (
          <DistanceCard
            key={index}
            distance={{ index, ...distance }}
            handleSetAction={handleSetAction}
          />
        ))}
      </LeftSide>
      <EmployeeStandby />
    </AddRouteContainer>
  );
};

export default AddRoute;
