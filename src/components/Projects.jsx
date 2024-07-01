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
} from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box textAlign="center">
      <Box mb={5}>
        <Text as="b" fontSize="24px">
          projects
        </Text>
      </Box>
      <Flex justifyContent="center">
        <Hide breakpoint="(max-width: 763px)">
          <VStack mr={4}>
            <Box
              border="solid 2px #B794F4"
              borderRadius="8px"
              h="150px"
              w="150px"
            >
              test
            </Box>
            <Box
              border="solid 2px #B794F4"
              borderRadius="8px"
              h="150px"
              w="150px"
            >
              test
            </Box>
          </VStack>
        </Hide>
        <Box border="solid 2px #B794F4" borderRadius="8px" h="308px" w="150px">
          test
        </Box>
      </Flex>
    </Box>
  );
};

export default Projects;
