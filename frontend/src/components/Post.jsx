import {
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Post = ({ blog, BASE_URL, isoToDate }) => {
  return (
    <GridItem w="100%" py={5} as="a" href={`/blog/${blog["slug"]}`}>
      <HStack>
        <Image
          src={`${BASE_URL}${blog["feature_image"]}`}
          alt="feature"
          rounded={8}
          objectFit="cover"
          height="300px"
        />
      </HStack>
      <VStack align="start" mt={3}>
        <Text color="gray.500">{isoToDate(blog["published_at"])}</Text>
        <Heading size="lg">{blog["title"]}</Heading>
        <Text color="gray.500" textAlign="justify">
          {blog["body"].substring(0, 200)}...
        </Text>
      </VStack>
    </GridItem>
  );
};

export default Post;
