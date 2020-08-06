import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  DestinationContainer,
  Actions,
  Button,
  DestinationList,
} from "./Destination.styles";
import Navbar from "../../components/Navbar/Navbar";
import DestinationCard from "../../components/DestinationCard/DestinationCard";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";

const Destination = (props) => {
  const routeId = props.match.params.routeId;
  const token = localStorage.getItem("token");
  const history = useHistory();
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState([]);

  const updateSelectedDestination = (destination) => {
    const selected = selectedDestination.find(
      (selected) => selected.id == destination.id
    );
    if (!selected) {
      setSelectedDestination([...selectedDestination, { id: destination.id }]);
    } else {
      setSelectedDestination(
        selectedDestination.filter((selected) => selected.id !== destination.id)
      );
    }
  };

  const handleAdd = async () => {
    const data = { destination: selectedDestination };
    try {
      const response = await axios.put(
        `${SERVER_URL}/api/business/route/${routeId}`,
        data,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      console.log(response);
      history.push("/onprogress");
    } catch (err) {
      console.error(err.response);
    }
  };

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${SERVER_URL}/api/business/destination`,
          {
            headers: {
              "x-token": token,
            },
          }
        );
        setDestinations(response.data.data.destination);
      } catch (err) {
        console.error(err.response);
      }
    })();
  }, []);

  return (
    <>
      <Navbar destination={1} />
      <DestinationContainer>
        <Actions>
          <Button onClick={() => history.goBack()}>Cancel</Button>
          <Button primary onClick={handleAdd}>
            Add
          </Button>
        </Actions>
        <DestinationList>
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              destination={{ index, ...destination }}
              selectedDestination={selectedDestination}
              updateSelectedDestination={updateSelectedDestination}
            />
          ))}
        </DestinationList>
      </DestinationContainer>
    </>
  );
};

export default Destination;
