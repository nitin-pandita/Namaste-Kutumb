import React from "react";

const Button = ({ input }) => {
  return (
    <button className="border-2 border-red-600 py-3 px-5 mt-3 bg-btnColor text-white text-[18px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:rotate-3 hover:-translate-y-1 semiHalfContent:flex semiHalfContent:justify-center semiHalfContent:items-center semiHalfContent:w-full">
      {input}
    </button>
  );
};

export default Button;
