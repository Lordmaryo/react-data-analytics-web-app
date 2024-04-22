import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="max-w-[1200px] m-auto px-[20px] pt-[100px] text-center h-screen flex flex-col gap-[20px]">
      <p className="text-[#00df9a] font-bold capitalize md:text-2xl sm:text-1xl text-md">
        growing with data analytics
      </p>
      <h1 className="font-bold md:text-7xl sm:text-5xl text-4xl capitalize">grow with data</h1>
      <div className="flex flex-row gap-2 justify-center items-center flex-wrap md:text-2xl sm:text-1xl text-lg font-bold">
        <h2>Fast, flexible fiancing for</h2>
        <div className="text-gray-600">
          <ReactTyped
            strings={["BTC", "BTB", "SASS"]}
            typeSpeed={120}
            backSpeed={110}
            loop
          />
        </div>
      </div>
      <p className="text-gray-600 md:text-2xl sm:text-1xl text-md">
        Monitor your data analytics to increase revenue BTB, BTC AND SASS
        platforms
      </p>
      <button className="bg-[#00df9a] text-[#000] w-[140px] mx-auto py-[10px] rounded-lg font-bold capitalize md:text-lg sm:text-md text-sm">
        get started
      </button>
    </div>
  );
}

export default Hero;
