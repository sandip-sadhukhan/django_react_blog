import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box px={[4, 8]} py={4} bgColor={useColorModeValue("gray.100", "gray.900")}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size={["sm", "md", "md", "lg", "lg"]} as={Link} to="/">
          Mi-Blog
        </Heading>
        <Flex>
          <Button as={Link} to="/" mx={[null, 1]} variant="ghost">
            Home
          </Button>
          <Button as={Link} to="/about" mx={[null, 1]} variant="ghost">
            About
          </Button>
          <Button onClick={toggleColorMode} mx={[null, 1]}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
