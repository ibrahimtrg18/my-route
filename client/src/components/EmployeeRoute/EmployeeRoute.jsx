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
  DistanceTotal,
} from "./EmployeeRoute.styles";
import Map from "./Map";
import RouteContainer from "./RouteContainer";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

const EmployeeRoute = (props) => {
  const token = localStorage.getItem("token");
  const [distanceTotal, setDistanceTotal] = useState(0);
  const [destinations, setDestination] = useState([]);
  const [locations, setLocations] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      if (props.employee.route) {
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
        } catch (err) {
          console.error(err.response);
        }
      }
    })();
  }, [props.employee.id]);

  useEffect(() => {
    (async function () {
      if (props.employee.route) {
        try {
          const response = await axios.get(
            `${SERVER_URL}/api/business/route/${
              props.employee.route && props.employee.route.id
            }`,
            {
              headers: {
                "x-token": token,
              },
            }
          );
          if (response.data.locationSorted) {
            setLocations(response.data.locationSorted);
            setDistanceTotal(response.data.distanceTotal / 1000);
          } else {
            setLocations(response.data.location);
            setDistanceTotal(response.data.distanceTotal / 1000);
          }
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
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
          {isLoading ? "Loading..." : <Map locations={locations} />}
          <AddDestination
            to={`/destination/${
              props.employee.route && props.employee.route.id
            }`}
          >
            Add New Destination
          </AddDestination>
        </MapContainer>
        <DistanceTotal>{distanceTotal} KM</DistanceTotal>
        <RouteContainer
          destinations={destinations}
          routeId={props.employee.route.id}
        />
      </EmployeeRouteContainer>
    );
  }
};

export default EmployeeRoute;
