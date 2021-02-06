import React from "react";
import {
  HomeWrap,
  ContentWrap,
  IntroText,
  Header1,
  Header2,
  Paragraph,
  IconRow,
  SocialLink,
} from "./HeroComponents";
import { VscGithub } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Home2Section = () => {
  return (
    <HomeWrap>
      <ContentWrap>
        <IntroText>Hi, I'm</IntroText>
        <Header1>John Henry Rudden.</Header1>
        <Header2>I like to build things.</Header2>
        <Paragraph>
          I am an Austin, Texas native pursuing a Computer Science degree at
          Northeastern University in Boston, Massachusetts. I am a side project
          enthusiast and was last found working on ...
        </Paragraph>
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
      </ContentWrap>
    </HomeWrap>
  );
};

export default Home2Section;
