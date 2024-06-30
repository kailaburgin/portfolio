import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
  Image,
  HStack,
  Img,
} from "@chakra-ui/react";
import React from "react";
import Kaila from "../../public/kaila.png";

const Intro = () => {
  return (
    <Flex justifyContent="center" alignItems="center" mt={4} wrap="wrap" mr={50} ml={50}>
      <Img src={Kaila} maxH="250px" mr={8} ml={8} mb='16px'></Img>
      <Text maxW="350px" textAlign="justify" fontSize={18}>
        I’m a front end web developer who strives to fuse creativity with
        functionality, crafting intuitive and visually compelling user
        interfaces.
      </Text>
    </Flex>
  );
};

export default Intro;
