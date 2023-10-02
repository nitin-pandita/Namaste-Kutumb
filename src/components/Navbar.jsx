import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import India from "../images/India.png";
const Navbar = () => {
  return (
    <div className="bg-bgColor">
      <div className="w-full h-20vh ">
        <nav className="  flex justify-between items-center w-[90%] m-auto">
          <Link to="/">
            <div className="flex flex-col items-center justify-center">
              <img src={Logo} alt="logo" className="w-[60%]" />
              <h3 className="text-logoColor font-bold text-[20px] ">
                Namaste Kutumb
              </h3>
            </div>
          </Link>
          <div className="nav-links space-x-7 max-w-[100%]">
            <ul>
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
                to="/logs"
                className="mx-7 text-lg font-semibold transition-transform duration-300 transform hover:scale-110 hover:text-red-600 hover:transform-origin-top text-black"
              >
                Blogs
              </Link>
              <Link to="/signup" className="ml-5 text-lg font-semibold">
                <button className="px-6 py-3 text-white bg-red-600 rounded-full text-lg transform transition-transform duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-lg">
                  Sign Up
                </button>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
