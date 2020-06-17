import styled from "styled-components";

export const LoginContainer = styled.div`
  padding: 0 128px;
  @media (max-width: 600px) {
    padding: 0 8px;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  font-weight: 800;
  margin-bottom: 8px;
  color: ${(props) => props.theme.secondaryText};
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.tertiaryText};
  font-weight: 200;
  font-size: 16px;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 20% 40%;
  grid-row-gap: auto;
  margin-bottom: 32px;
`;

export const Image = styled.img`
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
  display: block;
  color: ${(props) => props.theme.secondaryText};
`;

export const Input = styled.input`
  display: block;
  color: ${(props) => props.theme.secondaryText};
  background-color: ${(props) => props.theme.inputBackground};
  font-family: "Poppins", sans-serif;
  border-color: transparent;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 32px;
  height: 32px;
  font-size: 14px;
`;

export const AfterContent = styled.div`
  text-align: center;
  align-items: center;
`;
