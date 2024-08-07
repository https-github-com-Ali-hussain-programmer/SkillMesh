"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useSmartContract from "../../../utils/useSmartContract";
import Link from "next/link";
function Categories() {
  const [selectedOption, setSelectedOption] = useState("All Available");
  const Category = useSelector((state) => state?.category);
  const [filteredCategory, setFilteredCategory] = useState(Category?.data);
   useSmartContract();
  const OptionChange = (e) => {
    const { value } = e.target;
    setSelectedOption(value);
    if (value === "All Available") {
      setFilteredCategory(Category?.data);
    } else {
      const filteredData = Category?.data.filter(
        (c) => c.categoryName.toLowerCase() === value.toLowerCase()
      );
      setFilteredCategory(filteredData);
    }
  };
 
  return (
    <>
      <div className="z-50 mt-[100px] mb-[300px] min-h-screen ">
        <div className="  container 2xl:w-[1400px]     flex flex-col ">
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
              {Category?.data?.map((p, index) => {
                return (
                  <option key={index} value={p.categoryName}>
                    {p.categoryName}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center flex-wrap gap-10 ">
            {filteredCategory?.map((c, index) => {
              return (
                <Link
                  href={`/Categories/${c.categoryName}`}
                  prefetch
                  key={index}
                  className="blackhover h-[320px] p-3   shadow-lg hover:border-black hover:rounded-md  border-[1px] flex flex-col   border-solid border-[#ccc] "
                >
                  <img
                    src={c.imageUrl}
                    alt="no error"
                    className="  h-[200px] w-[240px]   object-cover"
                  />

                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-lg text-[#222325] text-center md:text-left hover:text-[#1dbf73]">
                      {c.categoryName}
                    </h1>
                    <h3 className=" text-left text-[15px]  text-[#74767E] font-medium hover:text-[#1dbf73]">
                      Gigs {c.gig?.length}
                    </h3>
                    <h6 className="text-left text-[15px]  text-[#74767E] font-medium hover:text-[#1dbf73] ">
                      Subfields {c.subField?.length}
                    </h6>
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
