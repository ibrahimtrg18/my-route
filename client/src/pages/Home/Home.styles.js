import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0 128px;
  @media (max-width: 600px) {
    padding: 0 8px;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  margin-bottom: 48px;
  @media (max-width: 600px) {
    margin-bottom: 32px;
  }
`;

export const HeroContent = styled.div`
  float: left;
  width: 35%;
  margin-top: 16px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  margin-bottom: 8px;
  color: ${(props) => props.theme.secondaryColor};
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.tertiaryColor};
  font-weight: 300;
  margin-bottom: 32px;
  font-size: 16px;
  @media (max-width: 600px) {
    margin-bottom: 16px;
  }
`;

export const Banner = styled.div`
  float: right;
`;

export const Image = styled.img`
  width: 90%;
  box-shadow: 10px 10px 1px 1px rgb(0, 0, 0, 0.1);
  float: right;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const FeatureContainer = styled.div`
  font-family: "Poppins", sans-serif;
  margin-bottom: 32px;
`;

export const FeatureTitle = styled.h2`
  color: ${(props) => props.theme.secondaryColor};
  font-weight: 500;
  margin-bottom: 32px;
`;

export const FeatureList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 7rem;
  grid-row-gap: 48px;
  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-row-gap: 16px;
  }
`;

export const FeatureItem = styled.div`
  @media (max-width: 600px) {
    text-align: center;
    padding: 16px;
  }
`;

export const FeatureImage = styled.img`
  width: 100%;
  margin-bottom: 16px;
  @media (max-width: 600px) {
    width: 75%;
  }
`;

export const FeatureParagraph = styled.p`
  color: ${(props) => props.theme.tertiaryColor};
  font-weight: 300;
  font-size: 14px;
`;
