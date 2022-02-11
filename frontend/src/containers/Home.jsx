import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import Post from "../components/Post";

const Home = () => {
  return (
    <VStack pt={8} w="full">
      <Container maxW="container.xl">
        <Grid
          gap={8}
          templateColumns={useBreakpointValue({
            base: "repeat(1, 1fr",
            md: "repeat(3, 1fr)",
          })}
        >
          <GridItem colSpan={useBreakpointValue({ base: 1, md: 2 })}>
            <Image
              src="https://images.pexels.com/photos/15286/pexels-photo.jpg?cs=srgb&dl=pexels-luis-del-r%C3%ADo-15286.jpg&fm=jpg"
              alt="header"
              rounded={8}
              objectFit="cover"
            />
          </GridItem>
          <GridItem>
            <Text size="xs" color="gray.400">
              March 05, 2021
            </Text>
            <Heading size={useBreakpointValue({ base: "xl", md: "4xl" })}>
              Tentang Creativity Blog pada UI Designer
            </Heading>
            <Text pt={[null, 8]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              eligendi ratione repellat, ipsam quisquam iusto rem quod
              reprehenderit asperiores aliquam!
            </Text>
          </GridItem>
        </Grid>
        <Grid
          templateColumns={useBreakpointValue({
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          })}
          gap={6}
          mt={10}
        >
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Grid>
      </Container>
      <HStack pt={8} w="full">
        <Box py={6} bg={useColorModeValue("gray.100", "gray.900")} w="full">
          <Text textAlign="center" alignSelf="center">
            Developed by Sandip Sadhukhan
          </Text>
        </Box>
      </HStack>
    </VStack>
  );
};

export default Home;
