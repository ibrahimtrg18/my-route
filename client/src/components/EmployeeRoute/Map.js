import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import {
  useLoadScript,
  GoogleMap,
  DirectionsRenderer,
} from "@react-google-maps/api";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

const mapContainerStyle = {
  width: "auto",
  height: "225px",
  marginBottom: "16px",
  borderRadius: "4px",
};

const defaultCenter = {
  lat: 3.565407,
  lng: 98.716225,
};

const libraries = ["directions"];

const google = window.google;

function Map({ locations }) {
  const token = localStorage.getItem("token");
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [businessLocation, setBusinessLocation] = useState(null);
  const [places, setPlaces] = useState([]);
  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${SERVER_URL}/api/business/location`,
          {
            headers: {
              "x-token": token,
            },
          }
        );
        setBusinessLocation(response.data.data.location);
        locations.unshift(businessLocation);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    setPlaces(
      locations.map((loc) => {
        return { marker: { lat: loc.lat, lng: loc.lng } };
      })
    );
  }, [locations]);

  if (loadError) return "Errors!";

  return (
    <>
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
          <MapDirectionsRenderer
            places={places}
            travelMode={google.maps.TravelMode.DRIVING}
          />
        </GoogleMap>
      )}
    </>
  );
}

function MapDirectionsRenderer({ places, travelMode }) {
  const [directions, setDestination] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (places.length > 0)
      try {
        const waypoints = places.map((p) => ({
          location: { lat: p.marker.lat, lng: p.marker.lng },
          stopover: true,
        }));
        const origin = waypoints.shift().location;
        const destination = waypoints.pop().location;

        const directionsService = new google.maps.DirectionsService();
        directionsService.route(
          {
            origin: origin,
            destination: destination,
            travelMode: travelMode,
            waypoints: waypoints,
          },
          (response, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              setDestination(response);
            } else {
              setError(response);
            }
          }
        );
      } catch (err) {
        console.log(err);
      }
  }, [places]);

  if (directions) {
    return directions && <DirectionsRenderer directions={directions} />;
  } else {
    return <div>{error}</div>;
  }
}

export default Map;
