import React, { useEffect } from "react";
import {
  DistanceCardContainer,
  DistanceIndex,
  DistanceIdItem,
  DistanceAddress,
  DistanceEmail,
  DistanceAction,
} from "./DistanceCard.styles";
import { ReactComponent as Check } from "../../assets/icons/check.svg";

const DistanceCard = (props) => {
  return (
    <DistanceCardContainer key={props.distance.id}>
      <DistanceIndex>
        <div>{props.distance.index}</div>
      </DistanceIndex>
      <DistanceIdItem>{props.distance.idItem}</DistanceIdItem>
      <DistanceAddress>{props.distance.address}</DistanceAddress>
      <DistanceEmail>{props.distance.email}</DistanceEmail>
      <DistanceAction
        action={props.distance.action}
        onClick={() => props.handleSetAction(props.distance.id)}
      >
        <Check height={10} margin="auto" />
      </DistanceAction>
    </DistanceCardContainer>
  );
};

export default DistanceCard;
