import { Flex } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
import obj_projects from "./projectData";

const ProjectCardContainer = () => {
  return (
    <Flex borderRadius={4} overflow="hidden">
      {data.map((proj) => (
        <ProjectCard key={obj_projects.name} />
      ))}
    </Flex>
  );
};

export default ProjectCardContainer;
