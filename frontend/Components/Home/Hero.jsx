"use client";
// Import statements...
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/side.png";
import Search from "../Shared/Search";
import { useEffect, useState } from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const Hero = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState([]);
  const [valueradio, setValueradio] = useState("User");
  const handleInput = (e) => {
    const { value } = e.target;
    setInput(value);

    if (value.trim() === "") {
      setSearch([]);
      return;
    }

    const h = Search(value, valueradio);
    setSearch(h);
    console.log(h,valueradio)
  };
  const renderSearchResults = () => {
    if (valueradio === "User") {
      return (
        <div className="flex flex-col gap-4">
          {search.map((s, i) => (
            <div className="flex items-center justify-between" key={i}>
              <img
                src={s?.profileImg}
                alt="error"
                className="h-12 w-12 rounded-full object-cover"
              />
              <p>{s?.username}</p>
              <p>{s?.country}</p>
            </div>
          ))}
        </div>
      );
    } else if (valueradio === "Category") {
      return (
        <div className="flex flex-col gap-4">
          {search.map((s, i) => (
            <div className="flex items-center justify-between" key={i}>
              <img
                src={s?.imageUrl}
                alt="error"
                className="h-12 w-12 rounded-full object-cover"
              />
              <p>{s?.name}</p>
              <p>{s?.TotalNoofGigsAvailable}</p>
            </div>
          ))}
        </div>
      );
    } else if (valueradio === "Subcategory") {
      return (
        <div className="flex flex-col gap-4">
          {search.map((s, i) => (
            <div className="flex items-center justify-between" key={i}>
              <img
                src={s?.imageUrl}
                alt="error"
                className="h-12 w-12 rounded-full object-cover"
              />
              <p>{s?.name}</p>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };
  return (
    <>
      <div className={`h-[600px] justify-center flex`}>
        <div className="2xl:w-[1400px] container flex items-center justify-between text-secondary-white px-7">
          <div className="flex flex-col gap-[30px] max-w-[700px] relative">
            <h1 className="text-4xl tracking-wide font-bold title-animation">
              Find the perfect
              <span className="font-light italic ps-2">freelance</span> services
              for your business
            </h1>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
              <input
                type="text"
                placeholder="Block Chain Web 3.0"
                className="text-gray-600 border-none outline-none w-[90%] py-5 px-5 rounded-sm"
                onChange={handleInput}
              />

              <button className="bg-[#A835C4] w-[90%] lg:w-20 py-5 px-5 font-bold lg:flex items-center justify-center rounded-r-md bg-onlineGreen border-none cursor-pointer lg:text-xl text-3xl">
                <FiSearch />
              </button>
            </div>
            <div className="text-[rgb(64,65,69)] flex flex-col gap-3 bg-white h-[350px] rounded-sm w-[89%] absolute sm:top-[180px] top-[275px] shadow-xl overflow-auto  ">
              <div className="flex justify-end px-5 py-3 ">
                <RadioGroup onChange={setValueradio} value={valueradio}>
                  <Stack direction="row">
                    <Radio value="User">User</Radio>
                    <Radio value="Category">Category</Radio>
                    <Radio value="Subcategory">Subcategory</Radio>
                  </Stack>
                </RadioGroup>
              </div>

              {search?.length > 0 && valueradio === "User" ? (
                <div className="flex items-center justify-between  px-5 ">
                  <span className="font-bold">User</span>{" "}
                  <span className="font-bold">Name</span>
                  <span className="font-bold">Country</span>
                </div>
              ) : null}

              {search?.length > 0 && valueradio === "Category" ? (
                <div className="flex items-center justify-between px-5  ">
                  <span className="font-bold">Category</span>{" "}
                  <span className="font-bold">Name</span>
                  <span className="font-bold">
                    {" "}
                    <span className="text-green-500 text-lg">.</span>
                    Available
                  </span>
                </div>
              ) : null}

              {search?.length > 0 && valueradio === "Subcategory px-5" ? (
                <div className="flex items-center justify-between ">
                  <span className="font-bold">Fields</span>{" "}
                  <span className="font-bold">Name</span>
                </div>
              ) : null}

              <div className="px-5 py-1">{renderSearchResults()}</div>
            </div>
            <div className="gap-4 items-center max-w-xl text-sm hidden lg:flex">
              <span className="font-bold text-md">Popular:</span>
              <Link
                href="/"
                className="border-[1px] border-solid border-white rounded-2xl bg-transparent py-1 px-2"
              >
                Web Design
              </Link>
            </div>
          </div>
          <div className="w-[500px] hidden lg:inline-block">
            <Image
              src={logo}
              alt="error"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
