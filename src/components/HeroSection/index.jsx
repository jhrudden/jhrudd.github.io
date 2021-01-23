import React from "react";
import {
  HeroContainer,
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
import Background from "../../images/background.jpg";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgBg src={Background} />
      </HeroBg>
      <HeroContent>
        <HeroHeader>John Henry Rudden</HeroHeader>
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
