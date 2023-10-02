import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  RadioGroup,
  Stack,
  Radio,
  useDisclosure, // Import useDisclosure from Chakra UI
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "../images/logo.png";
import India from "../images/India.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  return (
    <div className="bg-bgColor">
      <div className="w-full h-20vh">
        <nav className="flex justify-between items-center w-[90%] m-auto  flex-wrap">
          <Link to="/">
            <div className="flex flex-col items-center justify-center">
              <img src={Logo} alt="logo" className="w-[60%]" />
              <h3 className="text-logoColor font-bold text-[20px] ">
                Namaste Kutumb
              </h3>
            </div>
          </Link>

          <div className="nav-links space-x-7 max-w-[100%] mobile:hidden">
            <ul className="min-w-[100%]">
              <Link
                to="/destination"
                className="text-lg font-semibold transition-transform duration-300 transform hover:scale-110 hover:text-red-600 hover:transform-origin-top text-black"
              >
                Destination
              </Link>
              <Link
                to="/guide"
                className="mx-7 text-lg font-semibold transition-transform duration-300 transform hover:scale-110 hover:text-red-600 hover:transform-origin-top text-black"
              >
                Tour Guide
              </Link>
              <Link
                to="/faq"
                className="text-lg font-semibold transition-transform duration-300 transform hover:scale-110 hover:text-red-600 hover:transform-origin-top text-black"
              >
                FAQ
              </Link>
              <Link
                to="/blogs"
                className="mx-7 text-lg font-semibold transition-transform duration-300 transform hover:scale-110 hover:text-red-600 hover:transform-origin-top text-black"
              >
                Blogs
              </Link>
              <Link to="/signup" className="ml-5 text-lg  font-semibold">
                <button className="px-6 py-3 text-white bg-red-600 rounded-full  text-lg transform transition-transform duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-lg ">
                  Sign Up
                </button>
              </Link>
            </ul>
          </div>
          <div className="visible mobileSemi:hidden">
            <Button
              colorScheme="btnColor"
              onClick={onOpen}
              bg={"#AF250A"}
              color={"#fff"}
            >
              <CiMenuBurger />
            </Button>
          </div>
          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px" bg={"#440020"}>
                Quick Links
              </DrawerHeader>
              <DrawerBody bg={"#F9B378"}>
                <ul className="flex flex-col justify-center items-center">
                  <Link to="/">
                    <div className="flex flex-col items-center justify-center">
                      <img src={Logo} alt="logo" className="w-[60%]" />
                      <h3 className="text-logoColor font-bold text-[20px] ">
                        Namaste Kutumb
                      </h3>
                    </div>
                  </Link>
                  <Link
                    to="/destination"
                    className=" font-semibold transition-transform duration-300 transform hover:scale-110 hover:text-red-600 hover:transform-origin-top mt-6 text-3xl text-[#440020]"
                  >
                    Destination
                  </Link>
                  <Link
                    to="/guide"
                    className="mx-7  font-semibold transition-transform duration-300 transform hover:scale-110 hover:text-red-600 hover:transform-origin-top mt-6 text-3xl text-[#440020]"
                  >
                    Tour Guide
                  </Link>
                  <Link
                    to="/faq"
                    className=" font-semibold transition-transform duration-300 transform hover:scale-110 hover:text-red-600 hover:transform-origin-top mt-6 text-3xl text-[#440020]"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/blogs"
                    className="mx-7  font-semibold transition-transform duration-300 transform hover:scale-110 hover:text-red-600 hover:transform-origin-top mt-6 text-3xl text-[#440020]"
                  >
                    Blogs
                  </Link>
                  <Link to="/signup" className="ml-5 text-lg  font-semibold">
                    <button className="px-6 py-3 text-white bg-red-600 rounded-full   text-lg transform transition-transform duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-lg mt-10">
                      Sign Up
                    </button>
                  </Link>
                </ul>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
