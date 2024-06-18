import React from "react";
import {
  Heading,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
  Flex,
} from "@chakra-ui/react";

const Projects = () => {
  return (
    <>
      <Heading as="h2" mt="100px" mb="100px" textAlign="center">
        projects
      </Heading>
      <Flex justifyContent="space-evenly" h="300px">
        <Card bg="brand.200" borderRadius="12px" w="350px">
          <CardBody>GameGrid</CardBody>
          <Divider />
          <CardFooter>A video game search app that displays </CardFooter>
        </Card>
        <Card bg="brand.200" borderRadius="12px" w="350px">
          <CardBody>ProjectName</CardBody>
          <Divider />
          <CardFooter>Description</CardFooter>
        </Card>
        <Card bg="brand.200" borderRadius="12px" w="350px">
          <CardBody>ProjectName</CardBody>
          <Divider />
          <CardFooter>Description</CardFooter>
        </Card>
      </Flex>
    </>
  );
};

export default Projects;
