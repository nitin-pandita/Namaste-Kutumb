import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Select,
  Flex,
} from "@chakra-ui/react";

import Buttons from "./Button";

const Search = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numRooms, setNumRooms] = useState(1);
  const [numPeople, setNumPeople] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box p={4} className="">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] p-5 m-auto bg-inputColor bg-opacity-[27%] rounded-xl flex flex-col justify-center items-center"
      >
        <Flex
          flexDirection={["column", "column", "row", "row"]}
          alignItems={["center", "center", "center", "center"]}
          justifyContent={["", "", "space-between", "space-between"]}
        >
          <FormControl flex={["", "", "1", "1"]} mb={[4, 4, 0, 0]}>
            <FormLabel color={"#440020"}>Destination</FormLabel>
            <Input
              type="text"
              placeholder="Enter destination"
              value={destination}
              color={"#AF250A"}
              outlineOffset={"0px"}
              outlineColor={"red"}
              _placeholder={{ color: "#AF250A" }}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </FormControl>
          <FormControl
            flex={["", "", "1", "1"]}
            mb={[4, 4, 0, 0]}
            className="mx-6"
          >
            <FormLabel color={"#440020"}>Check-In Date</FormLabel>
            <Input
              type="date"
              value={checkIn}
              color={"#AF250A"}
              outlineOffset={"0px"}
              outlineColor={"red"}
              _placeholder={{ color: "#AF250A" }}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </FormControl>
          <FormControl
            flex={["", "", "1", "1"]}
            mb={[4, 4, 0, 0]}
            className="mx-6"
          >
            <FormLabel color={"#440020"}>Check-Out Date</FormLabel>
            <Input
              color={"#AF250A"}
              outlineOffset={"0px"}
              outlineColor={"red"}
              _placeholder={{ color: "#AF250A" }}
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </FormControl>
          <FormControl
            flex={["", "", "1", "1"]}
            mb={[4, 4, 0, 0]}
            className="mx-6"
          >
            <FormLabel color={"#440020"}>Number of Rooms</FormLabel>
            <Select
              outlineOffset={"0px"}
              outlineColor={"red"}
              _placeholder={{ color: "#AF250A" }}
              value={numRooms}
              onChange={(e) => setNumRooms(e.target.value)}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl flex={["", "", "1", "1"]}>
            <FormLabel color={"#440020"}>Number of People</FormLabel>
            <Select
              outlineOffset={"0px"}
              outlineColor={"red"}
              _placeholder={{ color: "#AF250A" }}
              value={numPeople}
              onChange={(e) => setNumPeople(e.target.value)}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </Select>
          </FormControl>
        </Flex>
        <Buttons input={"Search"} />
      </form>
    </Box>
  );
};

export default Search;
