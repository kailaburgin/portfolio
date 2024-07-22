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
  const email = "kailaburgin@gmail.com";
  const successMessage = "Email copied!";
  const instagramLink = "https://www.instagram.com/kailacreating/";

  return (
    <Box textAlign="center" mb={10}>
      <Box mb={5} mt={5}>
        <Text as="b" fontSize="24px">
          let's connect
        </Text>
      </Box>
      <ButtonGroup spacing={20} mt={5}>
        <Link
          onClick={(e) => {
            navigator.clipboard.writeText(email);
          }}
        >
          <Tooltip label="Click to Copy Email" fontSize="md">
            <IconButton
              aria-label="Search database"
              icon={<EmailIcon boxSize="64px" />}
              variant="ghost"
            />
          </Tooltip>
        </Link>
        {/* <Link>
          <Tooltip label="LinkedIn Profile" fontSize="md">
            <IconButton
              aria-label="Search database"
              icon={<LinkedInIcon boxSize="52px" />}
              variant="ghost"
            />
          </Tooltip>
        </Link> */}
        <Link
          onClick={(e) => {
            window.open(instagramLink, "_blank").focus();
          }}
        >
          <Tooltip label="@kailacreating" fontSize="md">
            <IconButton
              aria-label="Search database"
              icon={<InstagramIcon boxSize="52px" />}
              variant="ghost"
            />
          </Tooltip>
        </Link>
      </ButtonGroup>
    </Box>
  );
};

export default Footer;
