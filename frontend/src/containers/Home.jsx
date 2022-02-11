import {
  Box,
  Container,
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
import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import axios from "axios";

const Home = () => {
  const BASE_URL = "http://localhost:8000";

  const [blogs, setBlogs] = useState([]);

  const isoToDate = (iso) => {
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let date = new Date(iso);
    let str = `${
      month[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
    return str;
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      let res = await axios.get(`${BASE_URL}/api/v1/posts/`);
      let data = res.data;
      // console.log(data);
      setBlogs(data);
    };
    fetchBlogs();
  }, [BASE_URL]);

  let headerGrid = useBreakpointValue({
    base: "repeat(1, 1fr",
    md: "repeat(3, 1fr)",
  });
  let headingSize = useBreakpointValue({ base: "xl", md: "4xl" });
  let colSpan = useBreakpointValue({ base: 1, md: 2 });

  return (
    <VStack pt={8} w="full">
      {blogs.length > 0 ? (
        <Container maxW="container.xl">
          <Grid
            gap={8}
            templateColumns={headerGrid}
            as="a"
            href={`/blog/${blogs[0]["slug"]}`}
          >
            <GridItem colSpan={colSpan}>
              <Image
                src={`${BASE_URL}${blogs[0]["feature_image"]}`}
                alt="header"
                rounded={8}
                objectFit="cover"
              />
            </GridItem>
            <GridItem>
              <Text size="xs" color="gray.400">
                {isoToDate(blogs[0]["published_at"])}
              </Text>
              <Heading size={headingSize}>{blogs[0]["title"]}</Heading>
              <Text pt={[null, 8]}>
                {blogs[0]["body"].substring(0, 500)}...
              </Text>
            </GridItem>
          </Grid>
          <Grid templateColumns={headerGrid} gap={6} mt={10}>
            {blogs.slice(1).map((blog) => (
              <Post
                key={blog["id"]}
                blog={blog}
                BASE_URL={BASE_URL}
                isoToDate={isoToDate}
              />
            ))}
          </Grid>
        </Container>
      ) : (
        <div>Loading...</div>
      )}
    </VStack>
  );
};

export default Home;
