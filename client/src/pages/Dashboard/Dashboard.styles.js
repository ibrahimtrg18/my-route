import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.secondaryBackground};
`;

export const LeftSide = styled.div`
  margin: 0 32px;
  float: left;
  width: 70%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
  @media (max-width: 600px) {
    margin-bottom: 16px;
  }
`;

export const Brand = styled.div`
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 32px;
  cursor: pointer;
  & > span {
    color: ${(props) => props.theme.primaryText};
  }
`;

export const ContentContainer = styled.div``;

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  @media (max-width: 600px) {
    margin-bottom: 16px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.primaryButton};
  box-shadow: ${(props) => props.theme.boxShadowButton};
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.lightText};
  font-weight: 500;
  padding: ${(props) => (props.px ? props.px : 8)}px
    ${(props) => (props.py ? props.py : 16)}px;
  border-color: transparent;
  border-radius: 16px;
  cursor: pointer;
  font-size: 14px;
  position: relative;
  left: 16px;
  bottom: 64px;
  display: flex;
  align-items: center;
  & > svg {
    margin-left: 8px;
  }
  @media (max-width: 600px) {
    position: static;
  }
`;

export const EmployeeList = styled.div``;

export const Employee = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  font-size: 14px;
  padding: 8px 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.customId === props.active
        ? props.theme.primaryBackground
        : props.theme.inputBackground};
  }
  background-color: ${(props) =>
    props.customId === props.active
      ? props.theme.primaryBackground
      : props.theme.secondaryBackground};
  @media (max-width: 600px) {
    display: inline-flexbox;
    overflow-x: scroll;
  }
`;

export const Avatar = styled.img`
  margin-right: 16px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.secondaryBackground};
  width: 48px;
  height: 48px;
`;

export const Name = styled.div`
  margin-right: auto;
  @media (max-width: 600px) {
    margin-right: 16px;
  }
`;

export const CustomId = styled.div`
  margin-right: auto;
  @media (max-width: 600px) {
    margin-right: 16px;
  }
`;

export const Date = styled.div`
  margin-right: auto;
  @media (max-width: 600px) {
    margin-right: 16px;
  }
`;

export const Time = styled.div`
  margin-right: auto;
  @media (max-width: 600px) {
    margin-right: 16px;
  }
`;

export const Distance = styled.div``;
