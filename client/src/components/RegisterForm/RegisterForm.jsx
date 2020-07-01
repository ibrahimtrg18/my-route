import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
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
} from "./RegisterForm.styles";

const validationSchema = yup.object().shape({
  businessName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits & no-space")
    .min(8)
    .max(20),
  password: yup.string().required(),
});

const RegisterForm = () => {
  return (
    <>
      <RegisterFormContainer>
        <Image src={require("../../assets/images/register.png")} />
        <Divider />
        <Formik
          initialValues={{
            businessName: "",
            email: "",
            phone: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(data) => {
            console.log(data);
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form id="register-form" onSubmit={handleSubmit}>
              <Label>
                Business Name
                <Input
                  name="businessName"
                  type="text"
                  value={values.businessName}
                  onChange={handleChange}
                  autoComplete="off"
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
                  autoComplete="off"
                />
                <span>{errors.email && touched.email && errors.email}</span>
              </Label>
              <Label>
                Phone Number
                <Input
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <span>{errors.phone && touched.phone && errors.phone}</span>
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
            </Form>
          )}
        </Formik>
        <Actions>
          <Button primary form="register-form" type="submit">
            Register
          </Button>
          <Paragraph>Already have account ?</Paragraph>
          <Button>Login</Button>
        </Actions>
      </RegisterFormContainer>
    </>
  );
};

export default RegisterForm;
