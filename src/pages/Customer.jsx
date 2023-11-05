import React from "react";

const Customer = () => {
  return (
    <div className="text-black mt-[70px] flex w-[90%] m-auto h-screen relative">
      <div className="w-[50%]">
        <h5 className="text-textColor text-[20px]">Our Experience</h5>
        <h1 className="text-[50px] font-bold text-[#AF250A]">
          What Our Customer <br /> Say About Us
        </h1>
        <p>
          The best way to explore INDIA is with Namaste Kutumb, we have served
          more than 200+ Foreign Tourists and 400+ Indian Tourist
        </p>
      </div>
      <div>
        <img src="./src/images/review.png" alt="image review png" />
      </div>
      <img
        src="./src/images/review2.png"
        className="absolute bottom-0 left-[250px] mt-10"
        width={"680px"}
        alt=""
      />
    </div>
  );
};

export default Customer;
