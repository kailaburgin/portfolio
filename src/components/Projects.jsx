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
      <Heading as="h2" mt="100px" mb="100px" textAlign="center">
        projects
      </Heading>
      <Flex justifyContent="space-evenly" h="300px">
        <Card borderRadius="12px" w="350px">
          <CardBody>
            <Button variant="ghost" fontSize="2xl">
              Game Finder
            </Button>
          </CardBody>
          <Divider />
          <CardFooter textAlign="justify">
            A video game search app that displays a game's artwork, name,
            platforms, and ratings. Rawg.io database API is used. This project
            implements a search bar, sorting filters, and a dark mode switch.{" "}
          </CardFooter>
        </Card>
        <Card borderRadius="12px" w="350px">
          <CardBody>
            <Button variant="ghost" fontSize="2xl">
              Appointment Planner
            </Button>
          </CardBody>
          <Divider />
          <CardFooter textAlign="justify">
            An appointment tracking app in which you can create a list of
            appointments with existing contacts. This project implements forms.
          </CardFooter>
        </Card>
        <Card bg="brand.200" borderRadius="12px" w="350px">
          <CardBody>
            <Button variant="ghost" fontSize="2xl">
              Playlist Creator
            </Button>
          </CardBody>
          <Divider />
          <CardFooter textAlign="justify">
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
