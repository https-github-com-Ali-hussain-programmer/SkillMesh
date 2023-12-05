"use client";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import logo from "../../public/side.png";
import Search from "../Shared/Search";
import { useState, useEffect } from "react";

const Hero = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const handleInput = (e) => {
    const { value } = e.target;
    if (value !== "") {
      var h = Search(value);
      setSearch(h);
    }
  };

  return (
    <>
      <div className={`h-[600px]   justify-center flex  `}>
        <div className="   2xl:w-[1400px] container    flex items-center  justify-between text-secondary-white px-7 ">
          <div className="flex flex-col  gap-[30px] max-w-[700px]  relative">
            <h1 className="text-4xl tracking-wide font-bold title-animation">
              Find the perfect
              <span className="font-light italic ps-2">freelance</span> services
              for your business
            </h1>
            <div className="  flex  flex-col  lg:flex-row gap-4 lg:gap-0 ">
              <input
                type="text"
                placeholder="Block Chain Web 3.0"
                className=" text-gray-600 border-none outline-none w-[90%] py-5 px-5 rounded-sm"
                onChange={handleInput}
              />

              <button className=" bg-[#A835C4] w-[90%] lg:w-20 py-5  px-5  font-bold lg:flex   items-center justify-center  rounded-r-md bg-onlineGreen border-none cursor-pointer lg:text-xl text-3xl ">
                <FiSearch />
              </button>
            </div>
            <div className="bg-white h-[350px] w-full absolute top-[185px] shadow-xl rounded-lg">

            </div>
            <div className="  gap-4 items-center max-w-xl text-sm hidden lg:flex">
              <span className="font-bold text-md">Popular:</span>
              <Link
                href="/"
                className="border-[1px] border-solid border-white rounded-2xl bg-transparent py-1 px-2 "
              >
                Web Design
              </Link>
              <Link
                href="/"
                className="border-[1px] border-solid border-white rounded-2xl bg-transparent py-1 px-2 "
              >
                WordPress
              </Link>
              <Link
                href="/"
                className="border-[1px] border-solid border-white rounded-2xl bg-transparent py-1 px-2 "
              >
                Logo Design
              </Link>
              <Link
                href="/"
                className="border-[1px] border-solid border-white rounded-2xl bg-transparent py-1 px-2 "
              >
                AI Services
              </Link>
            </div>
          </div>
          <div className="w-[500px]  hidden lg:inline-block  ">
            <Image
              src={logo}
              alt="error"
              className="h-full w-full    object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
