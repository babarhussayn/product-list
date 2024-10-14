import React from "react";

const Header = () => {
  return (
    <>
      <div className=" relative w-full bg-headerImg bg-cover backdrop:grayscale bg-no-repeat h-[30vh] mt-20">
        <div className="absolute inset-0 bg-white bg-opacity-35">
          <div className="flex justify-center items-center h-[10rem]">
            <div className="flex justify-start mt-16 items-center">
              {" "}
              <h4 className="md:text-8xl text-5xl text-[#fefefe] font-playfair font-bold">
                Food You Love IT
              </h4>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
