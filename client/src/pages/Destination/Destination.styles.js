import styled from "styled-components";

export const DestinationContainer = styled.div`
  height: auto;
  max-height: 100vh;
  padding: 0 128px;
  @media (max-width: 600px) {
    padding: 0 8px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: solid 1px #e5e5e5;
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

export const DestinationList = styled.div``;
