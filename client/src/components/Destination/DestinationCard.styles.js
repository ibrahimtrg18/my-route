import styled from "styled-components";

export const DestinationCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto 20% 40% 30% auto;
  grid-column-gap: auto;
  width: 100%;
  text-align: center;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  font-size: 14px;
  padding: 4px 8px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.whiteColor};
  @media (max-width: 600px) {
    overflow-x: scroll;
    grid-template-columns: repeat(5, auto);
  }
`;

export const DestinationIndex = styled.div`
  padding: 8px;
  width: 38px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 8px;
  color: ${(props) => props.theme.whiteColor};
`;

export const DestinationIdItem = styled.div`
  justify-self: left;
  padding: 4px 8px;
`;

export const DestinationAddress = styled.div`
  padding: 4px 8px;
`;

export const DestinationEmail = styled.div`
  padding: 4px 8px;
`;

export const DestinationAction = styled.button`
  justify-self: right;
  padding: 8px;
  width: 38px;
  height: 38px;
  cursor: pointer;
  background-color: ${(props) =>
    props.action ? props.theme.primaryColor : props.theme.tertiaryColor};
  border-radius: 8px;
  border: transparent;
  &:hover {
    background-color: ${(props) =>
      props.action
        ? props.theme.primaryDarkColor
        : props.theme.tertiaryDarkColor};
  }
`;
