import React from "react";
import {
  Card,
  ProjectContentWrapper,
  CardH1,
  CardP,
  CardLink,
} from "./ProjectCardElements";

const ProjectCard = ({ projectTitle, projectDescription, link, linkText }) => {
  return (
    <Card>
      <ProjectContentWrapper>
        <CardH1>{projectTitle}</CardH1>
        <CardP>{projectDescription}</CardP>
        <CardLink href={link}>{linkText}</CardLink>
      </ProjectContentWrapper>
    </Card>
  );
};

export default ProjectCard;
