import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";
import * as yup from "yup";
import Loader from "react-loader-spinner";
import Modal from "react-modal";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  RegisterFormContainer,
  Paragraph,
  Image,
  Divider,
  Form,
  Label,
  Input,
  Actions,
  Button,
  Group,
  DetectType,
  IconContainer,
} from "./RegisterForm.styles";
import { ReactComponent as Explore } from "../../assets/icons/explore.svg";
import Map from "./Map";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

const validationSchema = yup.object().shape({
  businessName: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
  phoneNumber: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits & no-space")
    .min(8)
    .max(20),
  password: yup.string().required().min(8),
});

const modalStyle = {
  content: {
    top: "50%",
    left: "25%",
    right: "25%",
    bottom: "auto",
    transform: "translate(0, -50%)",
  },
};

const RegisterForm = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();
  const inputRef = useRef();
  const history = useHistory();

  const updateLocation = ({ lat, lng }) => {
    setLocation({ lat, lng });
  };

  const updateAddress = (address) => {
    setAddress(address);
  };

  useEffect(() => {
    inputRef.current.focus();
    Modal.setAppElement("body");
  }, []);

  return (
    <>
      <Modal isOpen={modalIsOpen} style={modalStyle}>
        <button onClick={() => setIsOpen(false)}>Close</button>
        <Map
          location={location}
          setLocation={updateLocation}
          setAddress={updateAddress}
        />
      </Modal>
      <RegisterFormContainer>
        <Image src={require("../../assets/images/register.png")} />
        <Divider />
        <Formik
          enableReinitialize
          initialValues={{
            businessName: "",
            address: address || "",
            email: "",
            password: "",
            phoneNumber: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (data, { resetForm }) => {
            await setLoading(true);
            try {
              const response = await axios.post(
                `${SERVER_URL}/api/business/register`,
                { ...data, location }
              );
              setMessage(response.data.message);
              setStatus(1);
              setLoading(false);
              resetForm();
              history.push("/login");
            } catch (err) {
              setMessage(err.response.data.message);
              setStatus(0);
              setLoading(false);
            }
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form
              id="register-form"
              onSubmit={handleSubmit}
              status={status}
              autoComplete="off"
            >
              <span>{message && message}</span>
              <Label>
                Business Name
                <Input
                  name="businessName"
                  type="text"
                  ref={inputRef}
                  value={values.businessName}
                  onChange={handleChange}
                />
                <span>
                  {errors.businessName &&
                    touched.businessName &&
                    errors.businessName}
                </span>
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
              <Label>
                Password
                <Input
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <span>
                  {errors.password && touched.password && errors.password}
                </span>
              </Label>
              <Label>
                Address
                <Group size={["90%", "5%"]} gap={"5% - 8px"}>
                  <Input
                    name="address"
                    type="text"
                    disabled={true}
                    value={address || ""}
                    onChange={handleChange}
                  />
                  <DetectType>
                    <IconContainer onClick={() => setIsOpen(true)}>
                      <Explore width={16} height={16} />
                    </IconContainer>
                  </DetectType>
                </Group>
                <span>
                  {errors.address && touched.address && errors.address}
                </span>
              </Label>
              <Label>
                Phone Number
                <Input
                  name="phoneNumber"
                  type="tel"
                  value={values.phoneNumber}
                  onChange={handleChange}
                />
                <span>
                  {errors.phoneNumber &&
                    touched.phoneNumber &&
                    errors.phoneNumber}
                </span>
              </Label>
            </Form>
          )}
        </Formik>
        <Actions>
          <Button
            primary
            form="register-form"
            type="submit"
            // disabled={!isLoading}
          >
            {!isLoading ? (
              <Loader
                type="Oval"
                color="#fff"
                height={22}
                width={22}
                style={{ display: "flex", justifyContent: "center" }}
              />
            ) : (
              "Register"
            )}
          </Button>
          <Paragraph>Already have account ?</Paragraph>
          <Button>Login</Button>
        </Actions>
      </RegisterFormContainer>
    </>
  );
};

export default RegisterForm;
