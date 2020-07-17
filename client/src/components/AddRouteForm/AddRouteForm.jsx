import React, { useEffect, useRef } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  AddRouteFormContainer,
  Form,
  Input,
  Label,
  Group,
  Button,
} from "./AddRouteForm.styles";

const validationSchema = yup.object().shape({
  address: yup.string().required(),
  numberPhone: yup.string().required("number phone is a required field"),
  idItem: yup.string().required("ID item is a required field"),
  email: yup.string().required(),
});

const AddRouteForm = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <AddRouteFormContainer>
      <Formik
        initialValues={{ address: "", numberPhone: "", idItem: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Group size={["60%", "35%"]} gap={"5%"}>
              <Label>
                Address
                <Input
                  name="address"
                  type="text"
                  ref={inputRef}
                  value={values.address}
                  onChange={handleChange}
                />
                <span>
                  {errors.address && touched.address && errors.address}
                </span>
              </Label>
              <Label>
                Number Phone
                <Input
                  name="numberPhone"
                  type="text"
                  value={values.numberPhone}
                  onChange={handleChange}
                />
                <span>
                  {errors.numberPhone &&
                    touched.numberPhone &&
                    errors.numberPhone}
                </span>
              </Label>
            </Group>
            <Group size={["35%", "60%"]} gap={"5%"}>
              <Label>
                ID Item
                <Input
                  name="idItem"
                  type="text"
                  value={values.idItem}
                  onChange={handleChange}
                />
                <span>{errors.idItem && touched.idItem && errors.idItem}</span>
              </Label>
              <Label>
                Email Address
                <Input
                  name="email"
                  type="text"
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

export default AddRouteForm;
