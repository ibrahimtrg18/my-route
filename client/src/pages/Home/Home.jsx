import React from "react";
import { HomeContainer } from "./Home.styles";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar home={true} />
      <HomeContainer>Home</HomeContainer>
    </>
  );
};

export default Home;
