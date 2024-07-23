import React from "react";
import {
  Text,
  Hide,
  Button,
  Flex,
  Box,
  VStack,
  Image,
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import obj_projects from "./projectData";

const Projects = () => {
  return (
    <Box textAlign="center">
      <Box mb={5}>
        <Text as="b" fontSize="24px">
          projects
        </Text>
      </Box>
      {/* <Flex justifyContent="center" alignItems="center" wrap="wrap"> */}
      {/* <Button bg="purple.300" color="white" mr="32px">
          {"<"}
        </Button> */}
      {/* <Flex justifyContent="center">
        <Hide breakpoint="(max-width: 763px)">
            <VStack mr={4}>
              <Flex
                border="solid 2px #B794F4"
                borderRadius="8px"
                h="150px"
                w="150px"
                justifyContent="center"
                alignItems="center"
              >
                <Text as="b">{obj_projects.spotify.name}</Text>
              </Flex>
              <Flex
                border="solid 2px #B794F4"
                borderRadius="8px"
                h="150px"
                w="150px"
                justifyContent="center"
                alignItems="center"
              >
                <Text noOfLines={5} m="4px">
                  {obj_projects.spotify.description}
                </Text>
              </Flex>
            </VStack>
          </Hide> */}
      <SimpleGrid
        minChildWidth="380px"
        spacing={6}
        mr={{ sm: 20, md: 20, lg: 20, xl: 40 }}
        ml={{ sm: 20, md: 20, lg: 20, xl: 40 }}
      >
        {obj_projects.map((proj) => (
          <Card m={4} key={proj.name}>
            <CardBody>
              <Image
                src={proj.picture}
                overflow="hidden"
                minW="100%"
                w="180px"
                borderRadius="4px"
                border="solid 1px RGBA(0, 0, 0, 0.08)"
              />
              <VStack mt="4px">
                <CardHeader fontSize="18px" as="b">
                  <Link href={proj.link} isExternal>
                    {proj.name} <ExternalLinkIcon mx="2px" />
                  </Link>
                </CardHeader>
                <Text>{proj.description}</Text>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
      {/* <Box
          // border="solid 2px #B794F4"
          borderRadius="8px"
          h="308px"
          w="650px"
        >
          <Image
            src={obj_projects.spotify.picture}
            overflow="hidden"
            minH="100%"
            borderRadius="8px"
          />
          <Text mt="-40px">
            {obj_projects.spotify.name}
          </Text>
        </Box> */}
      {/* </Flex> */}
      {/* <Button bg="purple.300" color="white" ml="32px">
          {">"}
        </Button> */}
      {/* </Flex> */}
    </Box>
  );
};

export default Projects;
