import React from "react";

const Footer = () => {
  return (
    <Box fontFamily="serif">
      <Flex
        justifyContent="space-between"
        alignContent="center"
        ml="24px"
        mr="24px"
      >
        <Text as="b" fontSize="5xl">
          kb
        </Text>
        <HStack>
          <Link mr="24px" ml="24px" fontSize="lg">
            Projects!
          </Link>
          <Link mr="24px" ml="24px" fontSize="lg">
            About
          </Link>
          <Link ml="24px" fontSize="lg">
            Contact
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
