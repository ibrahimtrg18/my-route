import styled from "styled-components";

export const SettingsFormContainer = styled.div`
  padding: 0 48px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 48px;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  display: block;
  color: ${(props) => props.theme.secondaryColor};
  margin-bottom: 20px;
  & > span {
    font-size: 11px;
    font-weight: 300;
    color: ${(props) => props.theme.dangerColor};
  }
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.whiteColor};
  font-family: "Poppins", sans-serif;
  border-color: transparent;
  border-radius: 4px;
  width: 100%;
  height: 32px;
  font-size: 14px;
  padding: 0 8px;
  &:focus {
    border: solid 2px ${(props) => props.theme.primaryButton};
    background-color: ${(props) => props.theme.primaryBackground};
  }
`;

export const Confirmed = styled.div``;

export const ConfirmedPassword = styled.input`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.whiteColor};
  font-family: "Poppins", sans-serif;
  border-color: transparent;
  border-radius: 4px;
  height: 32px;
  font-size: 14px;
  padding: 0 8px;
  margin-bottom: 16px;
  box-shadow: ${(props) => props.theme.boxShadowSecondaryButton};
  &:focus {
    border: solid 2px ${(props) => props.theme.primaryButton};
    background-color: ${(props) => props.theme.primaryBackground};
  }
  &::placeholder {
    color: ${(props) => props.theme.tertiaryColor};
    text-align: center;
  }
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.primaryButton};
  box-shadow: ${(props) => props.theme.boxShadowButton};
  color: ${(props) => props.theme.whiteColor};
  padding: ${(props) => (props.px ? props.px : 6)}px
    ${(props) => (props.py ? props.py : 18)}px;
  border-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 600px) {
    position: static;
  }
`;
