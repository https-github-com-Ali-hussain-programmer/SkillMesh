"use client";
import React from "react";
import { Category } from "@/utils/data";
import { useState } from "react";
import Link from "next/link";
function Categories() {
  const [selectedOption, setSelectedOption] = useState("All Available");
  const [filteredCategory, setFilteredCategory] = useState(Category);
  const OptionChange = (e) => {
    const { value } = e.target;
    setSelectedOption(value);
    if (value === "All Available") {
      setFilteredCategory(Category);
    } else {
      const filteredData = Category.filter(
        (c) => c.category.toLowerCase() === value.toLowerCase()
      );
      setFilteredCategory(filteredData);
    }
  };
  return (
    <>
      <div className="z-50 ">
        <div className="container max-w-[1400px] mx-auto     flex flex-col ">
          <h1 className="text-5xl font-bold text-black text-center p-3">
            {" "}
            Categories
          </h1>

          <div className="flex justify-center items-center md:inline-block my-30">
            <select
              value={selectedOption}
              className=" border-[1px] border-solid  border-[#ccc] p-3  outline-none w-[50%] md:w-[20%] my-5"
              onChange={OptionChange}
            >
              <option value="All Available">All Available</option>
              {Category.map((p, index) => {
                return (
                  <option key={index} value={p.category}>
                    {p.category}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mt-5 flex flex-col md:flex-row items-center flex-wrap gap-4  justify-between ">
            {filteredCategory?.map((c, index) => {
              return (
                <Link
                  href={`/Categories/${c.category}`}
                  key={index}
                  className=" min-h-[30vh] shadow-md hover:ring-2 ring-sky-400 hover:rounded-md  border-[1px] flex flex-col-reverse gap-3  items-center md:flex-row  justify-between border-solid border-[#ccc] px-2 py-6 md:w-[30%] w-[50%]"
                >
                  <div className="flex flex-col gap-2">
                    {" "}
                    <h1 className="font-bold text-lg text-center md:text-left">
                      {c.category}{" "}
                    </h1>
                    <h3 className="text-center md:text-left text-sm">
                      Total No of Gig Available:{c.TotalNoofGigsAvailable}
                    </h3>
                    <h6 className="text-center md:text-left text-sm">
                      No of Subcategories Available:{c.subfields.length}{" "}
                    </h6>
                  </div>
                  <div className=" lg:w-auto w-full flex justify-center items-center">
                    <img
                      src={c.imageUrl}
                      alt="no error"
                      className=" md:w-[80px] md:h-[80px] h-[100px] w-[100px]  rounded-full object-cover"
                    />{" "}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
