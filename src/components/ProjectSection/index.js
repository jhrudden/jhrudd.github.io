import React from "react";
import {
  ProjectContainer,
  TextWrapper,
  ProjectH1,
  ProjectP,
  CardWrapper,
  ProjectCard,
  ProjectContentWrapper,
  CardH1,
  CardP,
  GridPadding,
  TopWrapper,
  CalloutWrapper,
  CalloutTextWrapper,
  CalloutText,
} from "./ProjectElements";
import { VscGithub } from "react-icons/vsc";

const Project = () => {
  return (
    <ProjectContainer id="projects">
      <TopWrapper>
        <TextWrapper>
          <ProjectH1>My Projects</ProjectH1>
          <ProjectP>
            I like to do projects in my free time. Right now I am interested
            Full Stack development, but you can also find me working on other
            types of projects.
          </ProjectP>
        </TextWrapper>
      </TopWrapper>
      <GridPadding>
        <CardWrapper>
          <ProjectCard>
            <ProjectContentWrapper>
              <CardH1>Hello Word</CardH1>
              <CardP>Project made to say hello to the world</CardP>
            </ProjectContentWrapper>
          </ProjectCard>
          <ProjectCard>
            <ProjectContentWrapper>
              <CardH1>Hello Word</CardH1>
              <CardP>Project made to say hello to the world</CardP>
            </ProjectContentWrapper>
          </ProjectCard>
          <ProjectCard>
            <ProjectContentWrapper>
              <CardH1>Hello Word</CardH1>
              <CardP>Project made to say hello to the world</CardP>
            </ProjectContentWrapper>
          </ProjectCard>
        </CardWrapper>
      </GridPadding>
      <CalloutWrapper href="https://github.com/jhrudden">
        <CalloutTextWrapper>
          <VscGithub />
          <CalloutText>Check out my Github</CalloutText>
        </CalloutTextWrapper>
      </CalloutWrapper>
    </ProjectContainer>
  );
};

export default Project;
