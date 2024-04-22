import React from "react";

function Email() {
  return (
    <div className="flex flex-row justify-around flex-wrap gap-[20px] max-w-[1200px] m-auto p-[30px]">
      <div className="w-[500px]">
        <h3 className="md:text-3xl sm:text-2xl text-2xl font-bold capitalize">Want tips & tricks to optimize your flow?</h3>
        <p className="md:text-1xl sm:text-lg text-md pt-[10px]">Sign up to our news letter and stay up to date</p>
      </div>
      <div className="w-[600px]">
        <div className="flex flex-row flex-wrap gap-[10px]">
          <input type="email"
          placeholder="Enter your email"
          className="w-[250px] rounded px-[10px] py-[5px] text-black outline-none border-gray-700"/>
          <button className="bg-[#00df9a] text-[#000] w-[140px] py-[8px] rounded font-bold capitalize md:text-lg sm:text-md text-sm">Notify me</button>
        </div>
        <p className="md:text-1xl sm:text-lg text-md pt-[10px]">
          We care about the protection of your data. Read our privacy Policy <br />
          <span className="text-[#00df9a] underline"> Privacy policy.</span>
        </p>
      </div>
    </div>
  );
}

export default Email;