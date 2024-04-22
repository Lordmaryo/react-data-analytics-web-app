import React from "react";
import Laptop from "../assets/laptop.jpg";

function NewsLetter() {
  return (
    <div className="bg-[#ffffff] w-full text-[#000] py-[20px]">
      <div className="flex flex-row justify-around flex-wrap gap-[20px] items-center max-w-[1200px]">
        <div>
          <img
            src={Laptop}
            className="md:w-[500px] sm:w-[300px] w-[300px] object-cover"
            alt="Laptop logo"
          />
        </div>
        <div className="max-w-[600px] px-[20px] flex flex-col gap-[10px]">
          <p className="text-[#00df9a] md:text-2xl sm:text-1xl text-lg font-bold">
            data analytics dashboard
          </p>
          <h2 className="md:text-4xl sm:text-2xl text-2xl font-bold capitalize">
            Manage data analytics centrally
          </h2>
          <p className="md:text-1xl sm:text-lg text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            est, earum tempora iusto quidem sapiente culpa quam corrupti
            incidunt optio molestiae dignissimos laboriosam id nam perspiciatis
            perferendis dicta magnam reiciendis!
          </p>
          <button className="bg-[#00df9a] text-[#000] w-[140px] py-[10px] rounded-lg mt-[20px] font-bold capitalize md:text-lg sm:text-md text-sm">Get started!</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
