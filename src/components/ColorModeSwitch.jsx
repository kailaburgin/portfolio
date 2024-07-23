import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        mr="8px"
        colorScheme="purple"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text mt="16px" whiteSpace="nowrap" fontSize="lg">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
