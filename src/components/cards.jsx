import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Cards() {
  return (
    <div className="mx-auto py-14 px-4 bg-white text-black max-w-[1240px] flex flex-row flex-wrap gap-[20px] items-center justify-center">
      <div className="ease-in-out duration-500 hover:scale-105 md:w-[250px] sm:w-[300px] w-[400px] shadow-lg flex divide-y-2 divide-gray-400 flex-col gap-4 justify-center items-center border-md py-[20px]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <img src={Single} className="w-[40%]" alt="single user" />
          <h3 className="md:text-2xl sm:text-1xl text-lg font-bold capitalize">
            single user
          </h3>
          <h2 className="md:text-3xl text-2xl font-bold">$149</h2>
        </div>
        <p>500 GB Storage</p>
        <p>1 user allowed</p>
        <p>send up to 2GB</p>
        <button className="bg-[#00df9a] text-[#000] w-[140px] py-[5px] rounded-lg font-bold capitalize md:text-lg sm:text-md text-sm">
          start trial
        </button>
      </div>
      <div className="ease-in-out duration-500 hover:scale-105 bg-gray-200 md:w-[300px] sm:w-[300px] w-[400px] shadow-lg flex divide-y-2 divide-gray-400 flex-col gap-4 justify-center items-center border-md py-[20px]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <img src={Triple} className="w-[40%]" alt="three or more user" />
          <h3 className="md:text-2xl sm:text-1xl text-lg font-bold capitalize">
            Group account
          </h3>
          <h2 className="md:text-3xl text-2xl font-bold">$299</h2>
        </div>
        <p>5 TB Storage</p>
        <p>10 user allowed</p>
        <p>send up to 20 GB</p>
        <button className="bg-[#000] text-[#00df9a] w-[140px] py-[5px] rounded-lg font-bold capitalize md:text-lg sm:text-md text-sm">
          start trial
        </button>
      </div>
      <div className="ease-in-out duration-500 hover:scale-105 md:w-[250px] sm:w-[300px] w-[400px] shadow-lg flex divide-y-2 divide-gray-400 flex-col gap-4 justify-center items-center border-md py-[20px]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <img src={Double} className="w-[40%]" alt="more users than one" />
          <h3 className="md:text-2xl sm:text-1xl text-lg font-bold capitalize">
            Patnership
          </h3>
          <h2 className="md:text-3xl text-2xl font-bold">$199</h2>
        </div>
        <p>1 TB Storage</p>
        <p>3 user allowed</p>
        <p>send up to 10 GB</p>
        <button className="bg-[#00df9a] text-[#000] w-[140px] py-[5px] rounded-lg font-bold capitalize md:text-lg sm:text-md text-sm">
          start trial
        </button>
      </div>
    </div>
  );
}

export default Cards;
