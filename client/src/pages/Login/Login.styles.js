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
