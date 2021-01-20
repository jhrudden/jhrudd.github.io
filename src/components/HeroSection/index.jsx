import React from "react";
import {
  HeroContainer,
  HeaderRow,
  HeroContent,
  HeroHeader,
  HeroP,
  SocialLink,
  IconRow,
  HeroBg,
  ImgBg,
} from "./HeroElements";

import { VscGithub } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Background from "../../assets/images/background.jpg";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgBg src={Background} />
      </HeroBg>
      <HeroContent>
        <HeaderRow>
          <HeroHeader>J O H N</HeroHeader>
          <HeroHeader>H E N R Y </HeroHeader>
        </HeaderRow>
        <HeroHeader>R U D D E N</HeroHeader>
        <HeroP>
          {
            "College student learning software development and doing personal projects along the way"
          }
        </HeroP>
        <IconRow>
          <SocialLink href="https://github.com/jhrudden">
            <VscGithub />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/johnhenryrudden/">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="mailto:johnhenryrudden@gmail.com">
            <MdEmail />
          </SocialLink>
        </IconRow>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
