import React from "react";
import { Formik } from "formik";
import {
  AddRouteFormContainer,
  Form,
  Input,
  Label,
  Group,
  Button,
} from "./AddRouteForm.styles";

const AddRouteForm = () => {
  return (
    <AddRouteFormContainer>
      <Formik
        initialValues={{ address: "", idItem: "", email: "" }}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Label>
              Address
              <Input
                name="address"
                type="text"
                value={values.address}
                onChange={handleChange}
              />
            </Label>
            <Group>
              <Label>
                ID Item
                <Input
                  name="idItem"
                  type="text"
                  value={values.idItem}
                  onChange={handleChange}
                />
              </Label>
              <Label>
                Email Address
                <Input
                  name="email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                />
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
