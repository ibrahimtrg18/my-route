import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { comboBoxStyle, comboBoxInputStyle } from "./ComboBox.styles";

const mapContainerStyle = {
  width: "auto",
  height: "300px",
};

const center = {
  lat: 3.565407,
  lng: 98.716225,
};

const libraries = ["places"];

const Map = ({ defaultCenter, setAddress, setLocation }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markerLocation, setMarkerLocation] = useState(defaultCenter || center);
  const mapRef = useRef();

  // init marker
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    (async function () {
      try {
        const response = await getGeocode({ location: markerLocation });
        setAddress(response[0].formatted_address);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  // callback search
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(17);
    setMarkerLocation({ lat, lng });
  }, []);

  // when drag marker
  const handleDragEnd = (e) => {
    setMarkerLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  useEffect(() => {
    if (mapRef.current) {
      (async function () {
        try {
          const response = await getGeocode({
            location: markerLocation,
          });
          setAddress(await response[0].formatted_address);
        } catch (err) {
          console.log({ err });
        }
      })();
    }
    setLocation(markerLocation)
  }, [markerLocation]);

  if (loadError) return "Error...!";

  return (
    <>
      {!isLoaded ? (
        "Loading..."
      ) : (
        <>
          <Search panTo={panTo} />
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
              mapTypeControl: true,
              scaleControl: true,
              streetViewControl: true,
            }}
            onLoad={onMapLoad}
            onClick={(e) =>
              setMarkerLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() })
            }
          >
            <Marker
              position={markerLocation}
              onDragEnd={(e) => handleDragEnd(e)}
              draggable
            />
          </GoogleMap>
        </>
      )}
    </>
  );
};

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => center.lat, lng: () => center.lng },
      radius: 200 * 1000,
    },
  });

  return (
    <div style={{ height: "0px" }}>
      <Combobox
        style={comboBoxStyle}
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const response = await getGeocode({ address });
            const { lat, lng } = await getLatLng(response[0]);
            panTo({ lat, lng });
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <ComboboxInput
          style={comboBoxInputStyle}
          aria-labelledby="demo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          placeholder="Enter an address"
        />
        <ComboboxPopover>
          <ComboboxList aria-labelledby="demo">
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default Map;
