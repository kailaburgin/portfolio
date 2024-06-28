import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <VStack
      alignContent="center"
      mt="100px"
      mb="100px"
      pl="450px"
      pr="450px"
      pt="100px"
      pb="100px"
      textAlign="justify"
    >
      <Heading as="h2">about</Heading>
      <Text fontSize="xl" mt="24px">
        Over the past five years, I dedicated myself to a career as a physician
        assistant, but recently, I made a decision to pivot into front-end web
        development. This transition has been both exciting and challenging as I
        immerse myself in a new field that blends technical skill with creative
        expression. I took a pivotal step by completing a comprehensive
        certificate course on Codecademy, where I honed my skills in HTML, CSS,
        and JavaScript. Beyond structured learning, I've dedicated time to
        personal projects, each one a canvas for me to explore and implement
        different facets of web development, from responsive design to user
        interface enhancements. What drives me most is the opportunity to fuse
        creativity with functionality, crafting intuitive and visually
        compelling experiences for users. Beyond coding, I find joy in sewing,
        baking, and staying active through workouts. I also thrive on connecting
        with loved ones, whether through gatherings or coaching as a fitness
        instructor at Solidcore. My goal is to continue growing in web
        development, leveraging my diverse background to create meaningful
        digital solutions that resonate with users and make a positive impact.
      </Text>
    </VStack>
  );
};

export default About;
