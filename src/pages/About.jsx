import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdTravelExplore } from "react-icons/md";
import Card from "../components/Card";
import { TbArrowGuide } from "react-icons/tb";
import { BsBookmarkCheckFill } from "react-icons/bs";
const About = () => {
  return (
    <div className="w-[90%] m-auto">
      <div className=" flex items-center  flex-col mt-10 ">
        <h5 className="text-black">What we serve</h5>
        <h1 className="underline text-textColor text-[35px] font-bold">
          Our Top Values
        </h1>
        <div className="flex justify-between">
          <Card
            icon={<AiFillHome size={"33px"} />}
            heading={"Home Stay"}
            paragraph={
              "Get the best Experience from  the Local people that will guide for every place and tradition"
            }
            // icon={<AiFillHome />}
          />
          <Card
            icon={<MdTravelExplore size={"33px"} />}
            heading={"Explore India"}
            paragraph={
              "Make your trip good with Namaste Kutumb and make it happen"
            }
            // icon={<AiFillHome />}
          />
          <Card
            icon={<TbArrowGuide size={"33px"} />}
            heading={"Local Guides"}
            paragraph={
              "Get the best Experience from  the Local people that will guide for every place and tradition"
            }
            // icon={<AiFillHome />}
          />
          <Card
            icon={<BsBookmarkCheckFill size={"33px"} />}
            heading={"Easy Booking"}
            paragraph={
              "Get the best Experience from the Local people that will guide for every place and tradition"
            }
            // icon={<AiFillHome />}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-[40px] underline p-10 mt-[40px] text-[#440020] font-bold">
          With Our Experience We Will <br />
          Serve You
        </h1>
        <div className="flex justify-around  items-center mt-[50px]">
          <p className="text-textColor font-bold">
            <span className="text-[#AA1059] text-[40px]">100+</span> <br />
            Holiday Package
          </p>
          <p className="text-textColor font-bold">
            <span className="text-[#AA1059] text-[40px]">200+</span> <br />
            Luxury Home Stay
          </p>
          <p className="text-textColor font-bold">
            <span className="text-[#AA1059] text-[40px]">15+</span> <br />
            Travel Places
          </p>
        </div>
        <div>
          <img src="./src/assets/dance.png" alt="" />
        </div>
      </div>
      div
    </div>
  );
};

export default About;
