import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  CardRoute,
  IdItem,
  Address,
  Actions,
  IconContainer,
} from "./RouteContainer.styles.js";
import { ReactComponent as Pin } from "../../assets/icons/pin.svg";
import { ReactComponent as Trash } from "../../assets/icons/trash.svg";
import { ReactComponent as Check } from "../../assets/icons/check.svg";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

function RouteContainer({ destinations, routeId }) {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const handleClick = async (destinationId) => {
    try {
      const response = await axios.delete(
        `${SERVER_URL}/api/business/route/${routeId}/destination/${destinationId}`,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {destinations.map((dest) => (
        <CardRoute key={dest.id}>
          <div>
            <IdItem>ID ({dest.order_id ? dest.order_id : "-"})</IdItem>
            <Address>
              <Pin width={18} height={18} />
              {dest.order_address}
            </Address>
          </div>
          <Actions>
            <IconContainer status={dest.status} disabled>
              <Check width={18} height={18} />
            </IconContainer>
            <IconContainer
              status={dest.status}
              onClick={() => handleClick(dest.id)}
            >
              <Trash width={18} height={18} />
            </IconContainer>
          </Actions>
        </CardRoute>
      ))}
    </>
  );
}

export default RouteContainer;
