import React from "react";
import {
  AboutContainer,
  ImgContainer,
  TextColumn,
  TextHeader,
  TextBody,
} from "./AboutElements";
import AboutImage from "../../images/me.png";

const About = () => {
  return (
    <AboutContainer id="about">
      <ImgContainer src={AboutImage} />
      <TextColumn>
        <TextHeader>About Me</TextHeader>
        <TextBody>
          I am a Austin, Texas native pursuing a Computer Science degree at
          Northeastern University in Boston, Massachusetts. Outside of school, I
          am a side project enthusiast and can always be found building
          something. As of current, I am specifically interested in building
          fullstack mobile and web apps. You can find more information about
          this in my Project section.
        </TextBody>
        <TextHeader>Work Ethic</TextHeader>
        <TextBody>
          Without getting to into the weeds with specific projects, my general
          work philosophy is to strive to create readable and maintainable code.
          No one likes to get lost in their code. Likewise, no one likes to hit
          a brick wall when trying to scale their projects. These issues seem to
          mostly stem from tight coupling, lack of testing, and overcomplication
          of issues. To prevent these problems I like to spend considerable time
          ensuring that my architecture is both clean (mind the pun) and sturdy.
          This helps me create my best possible code.
        </TextBody>
      </TextColumn>
    </AboutContainer>
  );
};

export default About;
