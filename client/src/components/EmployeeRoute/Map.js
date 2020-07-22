import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import {
  useLoadScript,
  GoogleMap,
  Marker,
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

function Map({ destinations }) {
  const token = localStorage.getItem("token");
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const markersLocation = destinations.map((dest) => {
    return { id: dest.id, marker: { lat: dest.lat, lng: dest.lng } };
  });
  const [location, setLocation] = useState(null);
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
        setLocation(response.data.data.location);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

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
            places={markersLocation}
            travelMode={google.maps.TravelMode.DRIVING}
            location={location}
          />
        </GoogleMap>
      )}
    </>
  );
}

function MapDirectionsRenderer(props) {
  const [directions, setDestination] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    try {
      const { places, travelMode, location } = props;

      const waypoints = places.map((p) => ({
        location: { lat: p.marker.lat, lng: p.marker.lng },
        stopover: true,
      }));
      // const origin = waypoints.shift().location;
      const destination = waypoints.pop().location;

      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: location,
          destination: destination,
          travelMode: travelMode,
          waypoints: waypoints,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDestination(result);
          } else {
            setError(result);
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  }, [props.places]);
=======
    const { places, travelMode, location } = props;

    const waypoints = places.map((p) => ({
      location: { lat: p.marker.lat, lng: p.marker.lng },
      stopover: true,
    }));
    // const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: location,
        destination: destination,
        travelMode: travelMode,
        waypoints: waypoints,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDestination(result);
        } else {
          setError(result);
        }
      }
    );
  }, [null, props.places]);
>>>>>>> 3ac3965b0b44637231fbd6563d60068384030435

  if (directions) {
    return directions && <DirectionsRenderer directions={directions} />;
  } else {
    return <div>Error!</div>;
  }
}

export default Map;
