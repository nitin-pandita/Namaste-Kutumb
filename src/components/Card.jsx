import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdTravelExplore } from "react-icons/md";
const Card = ({ heading, paragraph, icon }) => {
  const Icon = icon;
  return (
    <div className="w-[300px] z-0 opacity-7 h-[200px] rounded-lg text-center bg-logoColor text-textColor p-4 flex flex-col justify-center mr-10 mt-10 items-center">
      <div>{icon}</div>
      {/* <Icon size={"24px"} /> Render the icon using the Icon variable */}
      <h3 className="py-3 font-bold">{heading}</h3>
      <p className="z-1">{paragraph}</p>
    </div>
  );
};

export default Card;
