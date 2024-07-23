import { Box, HStack, Image, Show, Text } from "@chakra-ui/react";
import React from "react";
import Coding from "../assets/coding.jpg";

const About = () => {
  return (
    <Box textAlign="center">
      <Box mt={5} mb={5}>
        <Text as="b" fontSize="24px">
          about me
        </Text>
      </Box>
      <Box bg="purple.300" p={20}>
        <HStack
          mr={{ sm: 20, md: 20, lg: 20, xl: 40 }}
          ml={{ sm: 20, md: 20, lg: 20, xl: 40 }}
          spacing={40}
        >
          <Text fontSize="xl">
            Over the past five years, I dedicated myself to a career as a
            physician assistant, but recently, I made a decision to pivot into
            front-end web development. This transition has been both exciting
            and challenging as I immerse myself in a new field that blends
            technical skill with creative expression. I took a pivotal step by
            completing a comprehensive certificate course on Codecademy, where I
            honed my skills in HTML, CSS, and JavaScript. Beyond structured
            learning, I've dedicated time to personal projects, each one a
            canvas for me to explore and implement different facets of web
            development, from responsive design to user interface enhancements.
            What drives me most is the opportunity to fuse creativity with
            functionality, crafting intuitive and visually compelling
            experiences for users. Beyond coding, I find joy in sewing, baking,
            and staying active through workouts. I also thrive on connecting
            with loved ones, whether through gatherings or coaching as a fitness
            instructor at Solidcore. My goal is to continue growing in web
            development, leveraging my diverse background to create meaningful
            digital solutions that resonate with users and make a positive
            impact.
          </Text>
          <Show breakpoint="(min-width: 2000px)">
            <Image src={Coding} borderRadius="8px" />
          </Show>
        </HStack>
      </Box>
    </Box>
  );
};

export default About;
