import React from "react";
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import India from "../images/India.png";
// import Search from "../components/Search";

const Home = () => {
  return (
    <div className="min-h-[100vh] w-full bg-bgColor">
      <Navbar />
      <div className="h-[70vh] w-full m-auto bg-bgColor">
        <div className="max-w-[90%] pt-5 m-auto">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <h3 className="text-[44px] text-textColor w-full semiHalfContent:flex semiHalfContent:items-center semiHalfContent:flex-col">
                Discover <b>INDIA</b>Where every <br /> corner tells a <br />{" "}
                <b>STORY</b>
              </h3>
              <p className="w-full text-xl text-textColor">
                " Discover India culture tradition and diversity of food that
                will enhance your feeling for Indian culture and tradition. "
              </p>
              <Link>
                <button className="border-2 border-red-600 py-3 px-5 mt-3 bg-btnColor text-white text-[18px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:rotate-3 hover:-translate-y-1">
                  Explore Now
                </button>
              </Link>
            </div>
            <div className="w-[60vh] border-2 border-red-500 semiHalfContent:hidden">
              <img
                src={India}
                alt="India image"
                className=" semiHalfContent:hidden"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Search /> */}
    </div>
  );
};

export default Home;
