import React from "react";
import {
  HomeContainer,
  HeroContainer,
  HeroContent,
  Banner,
  Title,
  Paragraph,
  Image,
  FeatureContainer,
  FeatureTitle,
  FeatureList,
  FeatureItem,
  FeatureImage,
  FeatureParagraph,
} from "./Home.styles";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const featuresItems = () => {
    let features = [];

    for (let i = 0; i < 6; i++) {
      features.push(
        <FeatureItem key={i}>
          <FeatureImage
            src={require("../../assets/images/feature1.png")}
          ></FeatureImage>
          <FeatureParagraph>
            We provide what you need to improve your business it's time to make
            your business more powerful
          </FeatureParagraph>
        </FeatureItem>
      );
    }

    return features;
  };

  return (
    <>
      <Navbar home={1} />
      <HomeContainer>
        <HeroContainer>
          <HeroContent>
            <Title>make your business more powerful</Title>
            <Paragraph>
              We provide what you need to improve your business it's time to
              make your business more powerful
            </Paragraph>
          </HeroContent>
          <Banner>
            <Image src={require("../../assets/images/route1.png")}></Image>
          </Banner>
        </HeroContainer>
        <FeatureContainer>
          <FeatureTitle>Our Features</FeatureTitle>
          <FeatureList>{featuresItems()}</FeatureList>
        </FeatureContainer>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
