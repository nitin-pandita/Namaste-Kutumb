import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { BsCalendarDate } from "react-icons/bs";
import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
/** Import the css function from @emotion/react */
import { css } from "@emotion/react";

const Search = () => {
  return (
    <div className="h-[15vh] flex justify-center items-center">
      <div>
        <form className="flex justify-center items-center bg-inputColor bg-opacity-[27%] p-6 rounded-full pb-4 ">
          <div className="flex flex-col items-center justify-center">
            <h5 className="text-lg font-bold text-black">Destination</h5>
            <div className="flex items-center ">
              <Stack spacing="4">
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <HiLocationMarker size="30px" color="#AF250A" />
                  </InputLeftElement>
                  <Input
                    type="text"
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
          <div className="flex flex-col items-center justify-center">
            <h5 className="text-lg font-bold text-black">Check In</h5>
            <div className="flex items-center ">
              <Stack spacing="4">
                <InputGroup>
                  <Input
                    type="date"
                    color="#000"
                    textColor="#000"
                    /** Use the css function for styling */
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
          <div className="flex flex-col items-center justify-center">
            <h5 className="text-lg font-bold text-black">Check Out</h5>
            <div className="flex items-center ">
              <Stack spacing="4">
                <InputGroup>
                  <Input
                    type="date"
                    color="#000"
                    textColor="#000"
                    /** Use the css function for styling */
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
          {/* ... (remaining code) */}
        </form>
      </div>
    </div>
  );
};

export default Search;
