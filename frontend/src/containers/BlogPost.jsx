import React, { useState, useEffect } from "react";
import { VStack, Container, Image, Text, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useParams, Navigate } from "react-router-dom";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const [blog, setBlog] = useState(null);
  const [notFound, setNotFound] = useState(false);
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

  const BASE_URL = "http://localhost:8000";
  const { slug } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        let res = await axios.get(`${BASE_URL}/api/v1/post/${slug}/`);
        let data = res.data;
        setBlog(data);
      } catch (err) {
        setNotFound(true);
      }
    };
    fetchBlog();
  }, [BASE_URL, slug]);

  if (notFound) return <Navigate to="/notfound" />;

  return (
    <VStack>
      <Container maxW="container.xl" my={8}>
        {blog ? (
          <VStack align="start">
            <Image
              src={`${BASE_URL}${blog.feature_image}`}
              alt="feature"
              maxHeight="60vh"
              alignSelf="center"
              rounded={10}
              shadow="lg"
              objectFit="contain"
            />
            <Text>{isoToDate(blog.published_at)}</Text>
            <Heading pb={8}>{blog.title}</Heading>
            <ReactMarkdown
              components={ChakraUIRenderer()}
              skipHtml
              children={blog.body}
            />
          </VStack>
        ) : (
          <div>Loading...</div>
        )}
      </Container>
    </VStack>
  );
};

export default BlogPost;
