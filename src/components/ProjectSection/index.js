import React from "react";
import {
  ProjectContainer,
  TextWrapper,
  ProjectH1,
  ProjectP,
  CardWrapper,
  GridPadding,
  TopWrapper,
  CalloutWrapper,
  CalloutTextWrapper,
  CalloutText,
} from "./ProjectElements";
import {
  RecipeHingeCard,
  MazeVisualizerCard,
  PortfolioCard,
  ExcellenceAnimatorCard,
  PyramidSolitaireCard,
  FakeDiscordCard,
} from "./ProjectCard/Data";
import { VscGithub } from "react-icons/vsc";
import ProjectCard from "./ProjectCard";

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
          <ProjectCard {...FakeDiscordCard} />
          <ProjectCard {...RecipeHingeCard} />
          <ProjectCard {...PortfolioCard} />
          <ProjectCard {...MazeVisualizerCard} />
          <ProjectCard {...ExcellenceAnimatorCard} />
          <ProjectCard {...PyramidSolitaireCard} />
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
