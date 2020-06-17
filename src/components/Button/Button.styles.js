import styled from "styled-components";

export const PrimaryButton = styled.button`
  margin-top: ${(props) => props.mt && props.mt}px;
  margin-right: ${(props) => props.mr && props.mr}px;
  margin-bottom: ${(props) => props.mb && props.mb}px;
  margin-left: ${(props) => props.ml && props.ml};
  background-color: ${(props) => props.theme.primaryButton};
  box-shadow: ${(props) => props.theme.boxShadowButton};
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.lightText};
  font-weight: 500;
  padding: ${(props) => (props.px ? props.px : 8)}px
    ${(props) => (props.py ? props.py : 16)}px;
  border-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;

export const SecondaryButton = styled.button`
  margin-top: ${(props) => props.mt && props.mt}px;
  margin-right: ${(props) => props.mr && props.mr}px;
  margin-bottom: ${(props) => props.mb && props.mb}px;
  margin-left: ${(props) => props.ml && props.ml};
  background-color: ${(props) => props.theme.secondaryButton};
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.primaryText};
  font-weight: 500;
  padding: ${(props) => (props.px ? props.px : 8)}px
    ${(props) => (props.py ? props.py : 16)}px;
  border-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;
