import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 48px;
  box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1);
  padding: 32px 128px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 600px) {
    padding: 32px 8px;
    grid-template-columns: auto auto;
    text-align: center;
  }
`;

export const BrandContainer = styled.div`
  font-size: 21px;
  font-weight: 500;
  cursor: auto;
  & > span {
    color: ${(props) => props.theme.primaryColor};
  }
  & > p {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    color: ${(props) => props.theme.tertiaryColor};
  }
  @media (max-width: 600px) {
    grid-column: 1 / span 2;
    margin: 8px auto;
  }
`;

export const JoinContainer = styled.div`
  margin: 8px auto;
`;

export const AboutContainer = styled.div`
  margin: 8px auto;
`;

export const ContactContainer = styled.div`
  margin: 8px auto;
  @media (max-width: 600px) {
    grid-column: 1 / span 2;
  }
`;

export const Title = styled.h5`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.secondaryColor};
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 8px;
  color: ${(props) => props.theme.tertiaryColor};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
