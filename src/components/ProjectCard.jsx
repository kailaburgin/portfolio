import { Card, CardBody, CardHeader, VStack } from "@chakra-ui/react";
import React from "react";
import obj_projects from "./projectData";

const ProjectCard = ({ obj_projects }) => {
  return (
    <Card>
      <Image src={obj_projects.map((proj) => proj.picture)} />
      <VStack>
        <CardHeader>{obj_projects.map((proj) => proj.name)}</CardHeader>
        <CardBody>{obj_projects.map((proj) => proj.description)}</CardBody>
      </VStack>
    </Card>
  );
};

export default ProjectCard;
