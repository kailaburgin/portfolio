import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Image,
  Link,
  LinkOverlay,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import obj_projects from "./projectData";

const Projects = () => {
  return (
    <Box textAlign="center">
      <Box mb={5}>
        <Text as="b" fontSize="24px">
          projects
        </Text>
      </Box>
      <SimpleGrid
        minChildWidth="380px"
        spacing={6}
        mr={{ sm: 20, md: 20, lg: 20, xl: 40 }}
        ml={{ sm: 20, md: 20, lg: 20, xl: 40 }}
      >
        {obj_projects.map((proj) => (
          <Card m={4} key={proj.name}>
            <CardBody>
              <LinkOverlay href={proj.link}>
                <Image
                  src={proj.picture}
                  overflow="hidden"
                  minW="100%"
                  w="180px"
                  borderRadius="4px"
                  border="solid 1px RGBA(0, 0, 0, 0.08)"
                />
              </LinkOverlay>
              <VStack mt="4px">
                <CardHeader fontSize="18px" as="b">
                  {proj.name}
                </CardHeader>
                <Text>{proj.description}</Text>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
