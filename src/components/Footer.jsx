import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#AF250A] text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-lg font-semibold mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Namaste Kutumb
        </p>
        <div className="mt-3 md:mt-0">
          <img
            src="./src/images/footer1.png"
            width={"120px"}
            className="object-cover mr-4"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
