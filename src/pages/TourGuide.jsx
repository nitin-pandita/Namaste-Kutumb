import React, { useEffect, useState } from "react";
import { Box, Text, Grid, Link } from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

// Dummy tour guide data for testing
const dummyTourGuideData = [
  {
    id: 1,
    name: "John Doe",
    languages: ["English", "Spanish"],
    specialties: ["Adventure Tours", "Cultural Tours"],
    about:
      "I'm an experienced tour guide passionate about exploring new places...",
  },
  {
    id: 2,
    name: "Jane Smith",
    languages: ["French", "German"],
    specialties: ["Historical Tours", "Food Tours"],
    about:
      "I have a deep love for history and food, and I'll show you the best of both...",
  },
  // Add more tour guides here
];

const TourGuide = () => {
  const [tourGuideData, setTourGuideData] = useState([]);

  // You can fetch real tour guide data from an API here using useEffect

  useEffect(() => {
    // For testing, use dummy data
    setTourGuideData(dummyTourGuideData);
  }, []);

  return (
    <>
      <Navbar />
      <Box bg="#F9B378" minH="100vh" p="8">
        <Text
          fontSize="4xl"
          fontWeight="semibold"
          textAlign="center"
          color="textColor"
          mb="6"
        >
          Tour Guides
        </Text>
        <Grid templateColumns="1fr" gap={4}>
          {tourGuideData.map((tourGuide) => (
            <Box
              key={tourGuide.id}
              bg="white"
              p={4}
              rounded="lg"
              boxShadow="md"
            >
              <Text fontSize="2xl" fontWeight="semibold" color="textColor">
                {tourGuide.name}
              </Text>
              <Text fontSize="sm" color="gray.500" mt={2}>
                Languages: {tourGuide.languages.join(", ")}
              </Text>
              <Text fontSize="sm" color="gray.500">
                Specialties: {tourGuide.specialties.join(", ")}
              </Text>
              <Text fontSize="sm" color="gray.700" mt={4}>
                {tourGuide.about}
              </Text>
              <Link color="teal.500" mt={4}>
                Contact {tourGuide.name}
              </Link>
            </Box>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default TourGuide;
