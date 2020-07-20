import styled from "styled-components";
import { Combobox } from "@reach/combobox";

export const AddRouteFormContainer = styled.div`
  margin-bottom: 32px;
`;

export const Form = styled.form``;

export const Group = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.size.join(" ")};
  column-gap: ${(props) => props.gap};
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
  &:disabled {
    background-color: ${(props) => props.theme.tertiaryBackground};
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.primaryButton};
  box-shadow: ${(props) => props.theme.boxShadowButton};
  color: ${(props) => props.theme.whiteColor};
  padding: ${(props) => (props.px ? props.px : 6)}px
    ${(props) => (props.py ? props.py : 18)}px;
  border-color: transparent;
  width: 100%;
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
