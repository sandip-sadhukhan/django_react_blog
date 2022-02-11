import {
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Post = () => {
  return (
    <GridItem w="100%" py={5} as="a" href="https://google.com">
      <HStack>
        <Image
          src="https://picsum.photos/1000/300"
          alt="feature"
          rounded={8}
          objectFit="cover"
          height="300px"
        />
      </HStack>
      <VStack align="start" mt={3}>
        <Text color="gray.500">March 01, 2021</Text>
        <Heading size="lg">
          Memilih foto yoang cock untuk desain website
        </Heading>
        <Text color="gray.500" textAlign="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui
          nemo quam aspernatur voluptatem ducimus, laboriosam ea sapiente at
          aliquid.
        </Text>
      </VStack>
    </GridItem>
  );
};

export default Post;
