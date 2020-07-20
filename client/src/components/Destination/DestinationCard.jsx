import React, { useEffect } from "react";
import {
  DestinationCardContainer,
  DestinationIndex,
  DestinationIdItem,
  DestinationAddress,
  DestinationEmail,
  DestinationAction,
} from "./DestinationCard.styles";
import { ReactComponent as Check } from "../../assets/icons/check.svg";

const DestinationCard = (props) => {
  return (
    <DestinationCardContainer key={props.destination.id}>
      <DestinationIndex>
        <div>{props.destination.index}</div>
      </DestinationIndex>
      <DestinationIdItem>{props.destination.order_id}</DestinationIdItem>
      <DestinationAddress>{props.destination.order_address}</DestinationAddress>
      <DestinationEmail>{props.destination.order_email}</DestinationEmail>
      <DestinationAction
        action={props.selectedDestination.find(
          (destination) => destination.id === props.destination.id
        )}
        onClick={() => props.updateSelectedDestination(props.destination)}
      >
        <Check height={10} margin="auto" />
      </DestinationAction>
    </DestinationCardContainer>
  );
};

export default DestinationCard;
