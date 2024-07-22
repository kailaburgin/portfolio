import React from "react";
import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Link,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import EmailIcon from "../assets/EmailIcon";
import LinkedInIcon from "../assets/LinkedInIcon";
import InstagramIcon from "../assets/InstagramIcon";

const Footer = () => {
  return (
    <Box textAlign="center" mb={10}>
      <Box mb={5} mt={5}>
        <Text as="b" fontSize="24px">
          let's connect
        </Text>
      </Box>
      <ButtonGroup spacing={20} mt={5}>
        {/* <Link href="mailto:kailaburgin@gmail.com"> */}
          <Tooltip label="Copy Email" fontSize="md">
            <IconButton
              aria-label="Search database"
              icon={<EmailIcon boxSize="64px" />}
              variant="ghost"
            />
          </Tooltip>
        {/* </Link> */}
        <Tooltip label="LinkedIn Profile" fontSize="md">
          <IconButton
            aria-label="Search database"
            icon={<LinkedInIcon boxSize="52px" />}
            variant="ghost"
          />
        </Tooltip>
        <Tooltip label="@kailacreating" fontSize="md">
          <IconButton
            aria-label="Search database"
            icon={<InstagramIcon boxSize="52px" />}
            variant="ghost"
          />
        </Tooltip>
      </ButtonGroup>
    </Box>
  );
};

export default Footer;
