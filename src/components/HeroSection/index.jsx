import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";
import Video from "../../assets/video.mp4";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome To My Portfolio</HeroH1>
        <HeroP>Scroll downward to learn more about me.</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
