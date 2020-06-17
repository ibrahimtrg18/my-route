import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 48px;
  box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1);
  padding: 32px 128px;
  display: flex;
  justify-content: space-between;
`;

export const BrandContainer = styled.div`
  font-size: 21px;
  width: 25%;
  margin-right: 128px;
  font-weight: 500;
  cursor: pointer;
  & > span {
    color: ${(props) => props.theme.primaryText};
  }
  & > p {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 200;
    color: ${(props) => props.theme.tertiaryText};
  }
`;

export const JoinContainer = styled.div`
  width: 25%;
`;

export const AboutContainer = styled.div`
  width: 25%;
`;

export const ContactContainer = styled.div`
  width: 25%;
`;

export const Title = styled.h5`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.secondaryText};
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  font-size: 14px;
  color: ${(props) => props.theme.tertiaryText};
  cursor: pointer;
  font-weight: 200;
  margin-bottom: 8px;
`;
