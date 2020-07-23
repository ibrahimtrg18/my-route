import styled from "styled-components";

export const AdminLoginContainer = styled.div`
  padding: 0 128px;
  @media (max-width: 600px) {
    padding: 0 8px;
  }
  height: auto;
`;

export const HeaderContainer = styled.div`
  text-align: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  font-weight: 800;
  margin-bottom: 8px;
  color: ${(props) => props.theme.secondaryColor};
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.tertiaryColor};
  font-weight: 300;
  font-size: 16px;
  text-align: center;
`;

export const AfterContent = styled.div`
  text-align: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  display: block;
  background-color: ${(props) => props.theme.inputBackground};
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
