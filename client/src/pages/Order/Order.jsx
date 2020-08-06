import React, { useState, useRef, useCallback } from "react";
import {
  useLoadScript,
  GoogleMap,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { OrderContainer } from "./Order.styles";
import Navbar from "../../components/Navbar/Navbar";

const libraries = ["directions"];

const google = window.google;

const mapContainerStyle = {
  width: "inherit",
  height: "inherit",
};

const defaultCenter = {
  lat: 3.565407,
  lng: 98.716225,
};

const Order = (props) => {
  const orderId = props.match.params.orderId;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const mapRef = useRef();
  const [response, setResponse] = useState();
  const [origin, setOrigin] = useState({ lat: 3.565489, lng: 98.716395 });
  const [destination, setDestination] = useState({
    lat: 3.567702,
    lng: 98.649679,
  });

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const directionsCallback = (response) => {
    console.log(response);

    if (response !== null) {
      if (response.status === "OK") {
        setResponse(response);
      } else {
        console.log("response: ", response);
      }
    }
  };

  if (loadError) return "Errors!";

  return (
    <>
      <Navbar adminLogin={1} mb={0} />
      <OrderContainer>
        {!isLoaded ? (
          "Loading..."
        ) : (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={defaultCenter}
            zoom={12}
            options={{
              disableDefaultUI: true,
            }}
            onLoad={onMapLoad}
          >
            <DirectionsService
              // required
              options={{
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING,
              }}
              // required
              callback={directionsCallback}
            />
            <DirectionsRenderer directions={response} />
          </GoogleMap>
        )}
      </OrderContainer>
    </>
  );
};

export default Order;
