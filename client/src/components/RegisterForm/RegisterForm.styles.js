import styled from "styled-components";

export const RegisterFormContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 20% 40%;
  margin-bottom: 32px;
  @media (max-width: 600px) {
    grid-template-columns: auto;
    padding: 0 32px;
    height: auto;
    margin-bottom: 8px;
  }
`;

export const Image = styled.img`
  width: 100%;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Divider = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
  background-color: #e5e5e5;
  width: 1px;
  justify-self: center;
`;

export const Form = styled.form`
  align-self: center;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  display: block;
  color: ${(props) => props.theme.secondaryColor};
`;

export const Input = styled.input`
  display: block;
  color: ${(props) => props.theme.secondaryColor};
  background-color: ${(props) => props.theme.inputBackground};
  font-family: "Poppins", sans-serif;
  border-color: transparent;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 20px;
  height: 32px;
  font-size: 14px;
  padding: 0 8px;
  &:focus {
    border: solid 2px ${(props) => props.theme.primaryButton};
    background-color: ${(props) => props.theme.primaryBackground};
  }
`;

export const Button = styled.button`
  display: block;
  width: 128px;
  margin: 16px auto;
  color: ${(props) =>
    props.primary ? props.theme.whiteColor : props.theme.primaryColor};
  background-color: ${(props) =>
    props.primary ? props.theme.primaryButton : props.theme.secondaryButton};
  box-shadow: ${(props) =>
    props.primary
      ? props.theme.boxShadowPrimaryButton
      : props.theme.boxShadowSecondaryButton};
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding: ${(props) => (props.px ? props.px : 8)}px
    ${(props) => (props.py ? props.py : 16)}px;
  border-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: ${(props) =>
      props.primary
        ? props.theme.primaryDarkButton
        : props.theme.secondaryDarkButton};
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  color: ${(props) => props.theme.tertiaryColor};
  font-weight: 300;
  font-size: 16px;
`;

export const Buttons = styled.div`
  grid-column: 1 / span 3;
  @media (max-width: 600px) {
    grid-column: 1 / span 1;
  }
`;