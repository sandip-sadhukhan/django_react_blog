import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <HStack pt={8} w="full">
      <Box py={6} bg={useColorModeValue("gray.100", "gray.900")} w="full">
        <Text textAlign="center" alignSelf="center">
          Developed by Sandip Sadhukhan
        </Text>
      </Box>
    </HStack>
  );
};

export default Footer;
