import React from "react";
import {
  Heading,
  Card,
  CardBody,
  Button,
  CardFooter,
  Divider,
  Flex,
} from "@chakra-ui/react";

const Projects = () => {
  return (
    <>
      <Heading
        as="h2"
        mt="100px"
        mb="100px"
        textAlign="center"
        color="brand.500"
      >
        projects
      </Heading>
      <Flex justifyContent="space-evenly" h="300px">
        <Card bg="brand.200" borderRadius="12px" w="350px">
            <CardBody>
              <Button
                color="brand.300"
                variant="ghost"
                fontSize="2xl"
                fontFamily="serif"
              >
                Game Finder
              </Button>
            </CardBody>
            <Divider color="brand.300" />
            <CardFooter textAlign="justify" color="brand.500">
              A video game search app that displays a game's artwork, name,
              platforms, and ratings. Rawg.io database API is used. This project
              implements a search bar, sorting filters, and a dark mode switch.{" "}
            </CardFooter>
        </Card>
        <Card bg="brand.200" borderRadius="12px" w="350px">
          <CardBody>
            <Button
              color="brand.300"
              variant="ghost"
              fontSize="2xl"
              fontFamily="serif"
            >
              Appointment Planner
            </Button>
          </CardBody>
          <Divider color="brand.300" />
          <CardFooter textAlign="justify" color="brand.500">
            An appointment tracking app in which you can create a list of
            appointments with existing contacts. This project implements forms.
          </CardFooter>
        </Card>
        <Card bg="brand.200" borderRadius="12px" w="350px">
          <CardBody>
            <Button
              color="brand.300"
              variant="ghost"
              fontSize="2xl"
              fontFamily="serif"
            >
              Playlist Creator
            </Button>
          </CardBody>
          <Divider color="brand.300" />
          <CardFooter textAlign="justify" color="brand.500">
            An app to make music playlists and save them to spotify. Spotify API
            is used. This project implements a search function with a section to
            display results and another section that shows the playlist.
          </CardFooter>
        </Card>
      </Flex>
    </>
  );
};

export default Projects;
