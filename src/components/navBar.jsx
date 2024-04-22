import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-[#f2f0f0] px-14 py-6 fixed left-0 right-0 top-0 w-full bg-[#000000] z-20">
      <nav className="flex flex-row items-center justify-between w-full">
        <h1 className="text-3xl text-[#00df9a] uppercase">React.</h1>
        <div className="hidden md:flex">
          <ul className="flex gap-[20px]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <button className="md:hidden" onClick={handleNav}>
          {!nav ? <MdMenu size={30} /> : <IoClose size={30} />}
        </button>
        <div
          className={
            !nav
              ? "hidden"
              : "flex gap-[20px] fixed left-0 top-0 flex-col pl-10 pt-[30px] w-[60%] h-full border-r border-gray-600 ease-in-out duration-500 bg-black"
          }
        >
          <h1 className="text-3xl text-[#00df9a] uppercase px-2">React.</h1>
          <ul>
            <li className="uppercase border-b border-gray-600 p-2">
              <a className="" href="#">
                Home
              </a>
            </li>
            <li className="uppercase border-b border-gray-600 p-2">
              <a href="#">Company</a>
            </li>
            <li className="uppercase border-b border-gray-600 p-2">
              <a href="#">Resources</a>
            </li>
            <li className="uppercase border-b border-gray-600 p-2">
              <a href="#">About</a>
            </li>
            <li className="uppercase p-2">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
