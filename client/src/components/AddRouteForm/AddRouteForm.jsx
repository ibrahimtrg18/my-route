import React, { useEffect, useState, useRef, useCallback } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  getZipCode,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import {
  AddRouteFormContainer,
  Form,
  Input,
  Label,
  Group,
  Button,
} from "./AddRouteForm.styles";
import { comboBoxStyle, comboBoxInputStyle } from "./ComboBox.styles";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

const validationSchema = yup.object().shape({
  address: yup.string().required(),
  phoneNumber: yup.string().required(),
  itemId: yup.string().required("ID item is a required field"),
  email: yup.string().email().required(),
});

const mapContainerStyle = {
  width: "auto",
  height: "350px",
  marginBottom: "16px",
};

const center = {
  lat: 3.565407,
  lng: 98.716225,
};

const libraries = ["places"];

const AddRouteForm = () => {
  const token = localStorage.getItem("token");
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markerLocation, setMarkerLocation] = useState(center);
  const inputRef = useRef();
  const mapRef = useRef();
  const [address, setAddress] = useState(null);
  const [zipCode, setZipCode] = useState("");

  // init marker
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    (async function () {
      try {
        const response = await getGeocode({ location: markerLocation });
        setZipCode(await getZipCode(response[0], false));
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
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      (async function () {
        try {
          const response = await getGeocode({
            location: markerLocation,
          });
          setZipCode(await getZipCode(response && response[0], false));
          setAddress(await response[0].formatted_address);
        } catch (err) {
          console.log({ err });
        }
      })();
    }
  }, [markerLocation]);

  if (loadError) return "Errors!";

  return (
    <AddRouteFormContainer>
      {!isLoaded ? (
        "loading..."
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
      <Formik
        enableReinitialize
        initialValues={{
          address: address || "",
          zipCode: zipCode || "",
          phoneNumber: "",
          itemId: "",
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (data, { resetForm }) => {
          try {
            const response = await axios.post(
              `${SERVER_URL}/api/business/destination`,
              { coordinate: { ...markerLocation }, ...data },
              {
                headers: {
                  "x-token": token,
                },
              }
            );
            resetForm();
            window.location.reload();
          } catch (err) {
            console.error(err.response);
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Group size={["60%", "10%", "20%"]} gap={"5%"}>
              <Label>
                Address
                <Input
                  name="address"
                  type="text"
                  ref={inputRef}
                  value={values.address}
                  onChange={handleChange}
                  disabled={true}
                />
                <span>
                  {errors.address && touched.address && errors.address}
                </span>
              </Label>
              <Label>
                Zip Code
                <Input
                  name="zipCode"
                  type="text"
                  ref={inputRef}
                  value={values.zipCode}
                  onChange={handleChange}
                  disabled={true}
                />
                <span>
                  {errors.zipCode && touched.zipCode && errors.zipCode}
                </span>
              </Label>
              <Label>
                Number Phone
                <Input
                  name="phoneNumber"
                  type="text"
                  value={values.phoneNumber}
                  onChange={handleChange}
                />
                <span>
                  {errors.phoneNumber &&
                    touched.phoneNumber &&
                    errors.phoneNumber}
                </span>
              </Label>
            </Group>
            <Group size={["35%", "60%"]} gap={"5%"}>
              <Label>
                ID Item
                <Input
                  name="itemId"
                  type="text"
                  value={values.itemId}
                  onChange={handleChange}
                />
                <span>{errors.itemId && touched.itemId && errors.itemId}</span>
              </Label>
              <Label>
                Email Address
                <Input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <span>{errors.email && touched.email && errors.email}</span>
              </Label>
            </Group>
            <Button type="submit">Insert</Button>
          </Form>
        )}
      </Formik>
    </AddRouteFormContainer>
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

export default AddRouteForm;
