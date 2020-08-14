import styled from "styled-components";

export const CardRoute = styled.div`
  display: flex;
  padding: 8px;
  margin-top: 16px;
  border-top: solid 1px #e5e5e5;
`;

export const IdItem = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  text-transform: uppercase;
`;

export const AddressContainer = styled.div`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: end;
  & > svg {
    margin-right: 8px;
  }
`;

export const Address = styled.p`
  flex: 0.95;
`;

export const Actions = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 0px;
`;

export const IconContainer = styled.div`
  background-color: ${(props) =>
    props.status ? props.theme.primaryColor : props.theme.tertiaryColor};
  align-self: center;
  border-radius: 8px;
  padding: 8px;
  margin-left: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${(props) =>
      !props.disabled && props.theme.primaryDarkColor};
  }
`;
