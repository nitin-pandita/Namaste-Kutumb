import {
  Box,
  Grid,
  Image,
  Text,
  Badge,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const Destination = () => {
  return (
    <>
      <Navbar />
      <Box bg="#F9B378" minH="100vh" p="8">
        <Text
          fontSize="4xl"
          fontWeight="semibold"
          textAlign="center"
          color="#440020"
          mb="9"
        >
          Welcome to Our HomeStay
        </Text>
        <Grid
          templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          gap={4}
          justifyContent="center"
        >
          {/* Top 10 Places */}

          <Box bg="white" p={4} rounded="lg" boxShadow="md">
            <Image
              src="./src/images/HomeStay1.jpg"
              alt="HomeStay 1"
              h="48"
              objectFit="cover"
              roundedTop="lg"
            />
            <Text fontSize="lg" fontWeight="semibold" mt={2} color="textColor">
              Top 10 Places
            </Text>
            <Text fontSize="sm" color="gray.500" mt={1}>
              Our home offers cozy and comfortable rooms with all the amenities
              you need.
            </Text>
            <HStack justifyContent="space-between" mt={4}>
              <Badge colorScheme="green" variant="solid" color="white">
                $99/night
              </Badge>
              <Badge colorScheme="purple" variant="solid" color="white">
                4.5 ★
              </Badge>
            </HStack>
            <Button colorScheme="teal" variant="solid" mt={4} w="100%">
              Buy Now
            </Button>
          </Box>
          <Box bg="white" p={4} rounded="lg" boxShadow="md">
            <Image
              src="./src/images/HomeStay1.jpg"
              alt="HomeStay 1"
              h="48"
              objectFit="cover"
              roundedTop="lg"
            />
            <Text fontSize="lg" fontWeight="semibold" mt={2} color="textColor">
              Top 10 Places
            </Text>
            <Text fontSize="sm" color="gray.500" mt={1}>
              Our home offers cozy and comfortable rooms with all the amenities
              you need.
            </Text>
            <HStack justifyContent="space-between" mt={4}>
              <Badge colorScheme="green" variant="solid" color="white">
                $99/night
              </Badge>
              <Badge colorScheme="purple" variant="solid" color="white">
                4.5 ★
              </Badge>
            </HStack>
            <Button colorScheme="teal" variant="solid" mt={4} w="100%">
              Buy Now
            </Button>
          </Box>

          {/* Most Frequent Places */}
          <Box bg="white" p={4} rounded="lg" boxShadow="md">
            <Image
              src="./src/images/HomeStay2.jpg"
              alt="HomeStay 2"
              h="48"
              objectFit="cover"
              roundedTop="lg"
            />
            <Text fontSize="lg" fontWeight="semibold" mt={2} color="textColor">
              Most Frequent Places
            </Text>
            <Text fontSize="sm" color="gray.500" mt={1}>
              Enjoy picturesque views from our home, surrounded by nature's
              beauty.
            </Text>
            <HStack justifyContent="space-between" mt={4}>
              <Badge colorScheme="green" variant="solid" color="white">
                $129/night
              </Badge>
              <Badge colorScheme="purple" variant="solid" color="white">
                4.7 ★
              </Badge>
            </HStack>
            <Button colorScheme="teal" variant="solid" mt={4} w="100%">
              Buy Now
            </Button>
          </Box>

          {/* Best in Town Place */}
          <Box bg="white" p={4} rounded="lg" boxShadow="md">
            <Image
              src="./src/images/HomeStay3.jpg"
              alt="HomeStay 3"
              h="48"
              objectFit="cover"
              roundedTop="lg"
            />
            <Text fontSize="lg" fontWeight="semibold" mt={2} color="textColor">
              Best in Town Place
            </Text>
            <Text fontSize="sm" color="gray.500" mt={1}>
              Savor delicious meals prepared with love and care by our chefs.
            </Text>
            <HStack justifyContent="space-between" mt={4}>
              <Badge colorScheme="green" variant="solid" color="white">
                $149/night
              </Badge>
              <Badge colorScheme="purple" variant="solid" color="white">
                4.8 ★
              </Badge>
            </HStack>
            <Button colorScheme="teal" variant="solid" mt={4} w="100%">
              Buy Now
            </Button>
          </Box>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Destination;
