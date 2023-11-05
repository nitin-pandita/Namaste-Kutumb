import React, { useEffect, useState } from "react";
import { Box, Text, Grid, Flex, Link } from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

// Dummy blog data for testing
const dummyBlogData = [
  {
    id: 1,
    title: "Explore the Serene Beaches of Goa",
    author: "John Doe",
    date: "October 15, 2023",
    content:
      "Goa is a paradise for beach lovers with its beautiful sandy shores...",
  },
  {
    id: 2,
    title: "Hiking in the Himalayas: A Thrilling Adventure",
    author: "Jane Smith",
    date: "September 25, 2023",
    content:
      "Discover the breathtaking landscapes of the Himalayas through an exciting hiking journey...",
  },
  {
    id: 3,
    title: "Trip to Ladakh: A Journey to the Top of the World",
    author: "Raino Devish",
    date: "January 25, 2023",
    content:
      "Discover the breathtaking landscapes of the Himalayas through an exciting hiking journey...",
  },
  {
    id: 4,
    title: "Kashmir : A Thrilling Adventure",
    author: "Jane Smith",
    date: "September 25, 2023",
    content:
      "Discover the breathtaking landscapes of the Himalayas through an exciting hiking journey...",
  },
  // Add more blog posts here
];

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  // You can fetch real blog data from an API here using useEffect

  useEffect(() => {
    // For testing, use dummy data
    setBlogData(dummyBlogData);
  }, []);

  return (
    <>
      <Navbar />
      <Box bg="#F9B378" minH="100vh" p="8">
        <Text
          fontSize="4xl"
          fontWeight="semibold"
          textAlign="center"
          color="#440020"
          mb="6"
        >
          Namaste Kutumb Blogs
        </Text>
        <Grid templateColumns="1fr" gap={4}>
          {blogData.map((blog) => (
            <Box key={blog.id} bg="white" p={4} rounded="lg" boxShadow="md">
              <Text fontSize="2xl" fontWeight="semibold" color="textColor">
                {blog.title}
              </Text>
              <Flex justifyContent="space-between" color="gray.500" mt={2}>
                <Text>By {blog.author}</Text>
                <Text>{blog.date}</Text>
              </Flex>
              <Text fontSize="sm" color="gray.700" mt={4}>
                {blog.content}
              </Text>
              <Link color="teal.500" mt={4}>
                Read More
              </Link>
            </Box>
          ))}
        </Grid>
        <Grid templateColumns="1fr" gap={4}>
          {blogData.map((blog) => (
            <Box key={blog.id} bg="white" p={4} rounded="lg" boxShadow="md">
              <Text fontSize="2xl" fontWeight="semibold" color="textColor">
                {blog.title}
              </Text>
              <Flex justifyContent="space-between" color="gray.500" mt={2}>
                <Text>By {blog.author}</Text>
                <Text>{blog.date}</Text>
              </Flex>
              <Text fontSize="sm" color="gray.700" mt={4}>
                {blog.content}
              </Text>
              <Link color="teal.500" mt={4}>
                Read More
              </Link>
            </Box>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Blogs;
