import React from "react";
import {
  Card,
  ProjectContentWrapper,
  Header,
  ProjectIcon,
  CardH1,
  CardP,
  CardLink,
} from "./ProjectCardElements";

const ProjectCard = ({
  projectTitle,
  projectDescription,
  link,
  linkText,
  pageIcon,
}) => {
  return (
    <Card>
      <ProjectContentWrapper>
        <Header>
          <ProjectIcon>{pageIcon}</ProjectIcon>
          <CardH1>{projectTitle}</CardH1>
        </Header>
        <CardP>{projectDescription}</CardP>
        <CardLink href={link}>{linkText}</CardLink>
      </ProjectContentWrapper>
    </Card>
  );
};

export default ProjectCard;
