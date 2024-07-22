import {
  Box,
  Button,
  Flex,
  Hide,
  HStack,
  Link,
  Show,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const githubLink = "https://github.com/kailaburgin";
  return (
    <Flex justifyContent="space-around" mt="32px">
      <Text as="b" fontSize={32}>
        kaila burgin
      </Text>
      <Hide breakpoint="(max-width: 550px)">
        <HStack spacing={5}>
          <Link
            onClick={(e) => {
              window.open(githubLink, "_blank").focus();
            }}
          >
            <Button bg="purple.300" color="white" size="lg" fontSize={20}>
              github
            </Button>
          </Link>
          <ColorModeSwitch />
        </HStack>
      </Hide>
    </Flex>
  );
};

export default NavBar;
