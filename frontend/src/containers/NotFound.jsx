import { Button, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Center py={6} flexDir="column">
      <Heading mb={3}>404</Heading>
      <Text mb={4}>Not Found</Text>
      <Button as={Link} to="/">
        Back to Home
      </Button>
    </Center>
  );
};

export default NotFound;
