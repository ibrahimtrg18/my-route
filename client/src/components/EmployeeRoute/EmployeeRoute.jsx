/*global google*/
import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import {
  EmployeeRouteContainer,
  EmployeeContainer,
  Avatar,
  Name,
  CustomId,
  MapContainer,
  AddDestination,
} from "./EmployeeRoute.styles";
import Map from "./Map";
import RouteContainer from "./RouteContainer";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

const EmployeeRoute = (props) => {
  const token = localStorage.getItem("token");
  const [destinations, setDestination] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${SERVER_URL}/api/business/employee/${props.employee.id}/route/${
            props.employee.route && props.employee.route.id
          }`,
          {
            headers: {
              "x-token": token,
            },
          }
        );
        setDestination(response.data.data.destination);
        setLoading(false);
      } catch (err) {
        console.error(err.response);
      }
    })();
  }, [props.employee.id]);

  if (Object.keys(props.employee).length === 0)
    return <EmployeeRouteContainer />;
  else {
    return (
      <EmployeeRouteContainer>
        <EmployeeContainer>
          <Avatar src={require("../../assets/images/avatar.png")} />
          <div>
            <Name>{props.employee.name}</Name>
            <CustomId>{props.employee.custom_id}</CustomId>
          </div>
        </EmployeeContainer>
        <MapContainer>
<<<<<<< HEAD
          <Map destinations={destinations} />
=======
          {/* {isLoading ? "Loading..." : <Map destinations={destinations} />} */}
>>>>>>> 3ac3965b0b44637231fbd6563d60068384030435
          <AddDestination
            to={`/destination/${
              props.employee.route && props.employee.route.id
            }`}
          >
            Add New Destination
          </AddDestination>
        </MapContainer>
        <RouteContainer
          destinations={destinations}
          routeId={props.employee.route.id}
        />
      </EmployeeRouteContainer>
    );
  }
};

export default EmployeeRoute;
