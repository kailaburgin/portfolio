import React from "react";
import {
  Text,
  Hide,
  Heading,
  Card,
  CardBody,
  Button,
  CardFooter,
  Divider,
  Flex,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
// import projects from "projects_test";

const Projects = () => {
  return (
    <Box textAlign="center">
      <Box mb={5}>
        <Text as="b" fontSize="24px">
          projects
        </Text>
      </Box>
      <Flex justifyContent="center" alignItems="center">
        <Button border="solid 2px #B794F4" bg="white" mr="32px">
          {"<"}
        </Button>
        <Flex justifyContent="center">
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
                <Text as="b">Project Name</Text>
              </Flex>
              <Flex
                border="solid 2px #B794F4"
                borderRadius="8px"
                h="150px"
                w="150px"
                justifyContent="center"
                alignItems="center"
              >
                <Text>Project Description</Text>
              </Flex>
            </VStack>
          </Hide>
          <Box
            border="solid 2px #B794F4"
            borderRadius="8px"
            h="308px"
            w="250px"
          >
            project screenshot
          </Box>
        </Flex>
        <Button border="solid 2px #B794F4" bg="white" ml="32px">
          {">"}
        </Button>
      </Flex>
    </Box>
  );
};

export default Projects;
