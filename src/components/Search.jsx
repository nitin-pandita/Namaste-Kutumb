import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { SearchIcon } from "@chakra-ui/icons";
import { BsCalendarDate, BsPersonAdd } from "react-icons/bs";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
/** Import the css function from @emotion/react */
import { css } from "@emotion/react";

import { ChevronDownIcon } from "@chakra-ui/icons"; // Import ChevronDownIcon

const Search = () => {
  return (
    <div className="h-[15vh] flex justify-center items-center">
      <div>
        <form className="flex justify-center items-center bg-inputColor bg-opacity-[27%] py-6 px-8 rounded-full pb-4  ">
          <div className="flex flex-col items-center justify-center">
            <h5 className="text-lg font-bold text-black mb-2">Destination</h5>
            <div className="flex items-center ">
              <Stack spacing="4">
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <HiLocationMarker size="30px" color="#AF250A" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    fontWeight={600}
                    placeholder="Enter location"
                    bgColor="transparent"
                    color="#000"
                    border="2px solid #AF250A"
                    _placeholder={{ color: "#000" }}
                    focusBorderColor="#AF250A"
                    focusRingColor="transparent"
                    _groupHover={{ borderColor: "#440020" }}
                  />
                </InputGroup>
              </Stack>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-x-5">
            <h5 className="text-lg font-bold text-black mb-2">Check In</h5>
            <div className="flex items-center ">
              <Stack spacing="4">
                <InputGroup>
                  <Input
                    type="date"
                    placeholder="Enter location"
                    fontWeight={600}
                    bgColor="transparent"
                    color="#000"
                    border="2px solid #AF250A"
                    _placeholder={{ color: "#000" }}
                    focusBorderColor="#AF250A"
                    focusRingColor="transparent"
                    _groupHover={{ borderColor: "#440020" }}
                    css={css`
                      &::-webkit-calendar-picker-indicator {
                        background: url(${BsCalendarDate}) center/80% no-repeat;
                        color: blue;
                        text-align: center;
                        font-size: 2rem;
                      }
                    `}
                  />
                </InputGroup>
              </Stack>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-x-5">
            <h5 className="text-lg font-bold text-black mb-2">Check Out</h5>
            <div className="flex items-center ">
              <Stack spacing="4">
                <InputGroup>
                  <Input
                    type="date"
                    fontWeight={600}
                    placeholder="Enter location"
                    bgColor="transparent"
                    color="#000"
                    border="2px solid #AF250A"
                    _placeholder={{ color: "#000" }}
                    focusBorderColor="#AF250A"
                    focusRingColor="transparent"
                    _groupHover={{ borderColor: "#440020" }}
                    css={css`
                      &::-webkit-calendar-picker-indicator {
                        background: url(${BsCalendarDate}) center/80% no-repeat;
                        color: blue;
                        text-align: center;
                        font-size: 2rem;
                      }
                    `}
                  />
                </InputGroup>
              </Stack>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-x-5">
            <h5 className="text-lg font-bold text-black mb-2">
              Room and Person
            </h5>
            <div className="flex items-center ">
              <Stack spacing="4">
                <InputGroup>
                  <Menu className="bg-bgColor">
                    <MenuButton
                      color="#000"
                      border={"2px solid #AF250A"}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      rounded="full" // Add rounded prop to round the corners
                    >
                      1 Room, 4 Person
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        minH="20px"
                        _hover={{ bg: "hoverColor" }} // Change hoverColor to your desired color
                      >
                        <span>2 Room 4 Person</span>
                      </MenuItem>
                      <MenuItem minH="20px">
                        <span>3 Room 3 Person</span>
                      </MenuItem>
                      <MenuItem minH="20px">
                        <span>1 Room 2 Person</span>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </InputGroup>
              </Stack>
            </div>
          </div>
          <Button
            colorScheme="#AF250A"
            leftIcon={<SearchIcon color="white" fontSize={"25px"} />}
            borderRadius="full" // Use borderRadius to round the corners
            height={"78px"}
            width={"78px"}
            bg="#AF250A"
            color="white"
            fontSize="10px"
            transform="translateX(1px)"
            className="flex items-center justify-center text-center ml-5"
          ></Button>
        </form>
      </div>
    </div>
  );
};

export default Search;
