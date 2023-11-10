"use client";
import React, { useState } from "react";
import GigCard from "../../../../Components/gigCard/GigCard";
import { gigs, Category } from "../../../../utils/data";
import { useSearchParams } from "next/navigation";

const Gigs = ({ params }) => {
  const [budget, setBudget] = useState({ min: 0, max: 5000 });
  const search = useSearchParams().get("subcategory");
  const [subfieldselect, setSubfieldSelect] = useState(search || "All");
  const [sort, setSort] = useState("No Sort");
  const [subcategory, setSubcategory] = useState(
    Category?.filter((c) => c.category === params.categoryname)
  );
  const [filteredGigs, setfilteredGigs] = useState(
    gigs?.filter((c) => c.category === params.categoryname)
  );

  const handleSort = (e) => {
    const { value } = e.target;
    let sortedArray = [...filteredGigs];
    if (value === "Top Rated") {
      sortedArray.sort((a, b) => b.star - a.star);
    } else if (value === "No of Orders") {
      sortedArray?.sort((a, b) => b.OrdersCompleted - a.OrdersCompleted);
    } else {
      sortedArray = gigs?.filter((c) => c.category === params.categoryname);
    }
    setfilteredGigs(sortedArray);
    setSort(value);
  };

  const handlePrice = (e) => {
    const { name, value } = e.target;
    setBudget((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const applyBudget = () => {
    let sortedArray = [...filteredGigs];
    sortedArray = sortedArray?.filter((s) => {
      if (s.price >= budget.min && s.price <= budget.max) {
        return true;
      }
      return false;
    });
    setfilteredGigs(sortedArray);
  };

  const subfieldSort = (e) => {
    const { value } = e.target;
    let sortedArray =  gigs?.filter((c) => c.category === params.categoryname)
    if (value === "All") {
      setfilteredGigs(sortedArray);
      setSubfieldSelect(value);
    } else {
      sortedArray = sortedArray?.filter((s) => {
        if (value === s.subcategory) {
          return true;
        }
        return false;
      });

      setfilteredGigs(sortedArray);
      setSubfieldSelect(value);
    }
  };

  return (
    <div className="  bg-[#fcfcfc] my-10">
      <div className="container mx-auto flex flex-col gap-2">
        <span className="font-light uppercase text-xs text-gray-500">
          FIVERR {params.categoryname}
        </span>
        <div className="flex items-center justify-between">
          <h1 className="text-[32px] font-bold">{params.categoryname}</h1>
          <select
            className="border-[1px] border-solid border-[#ccc] px-6 py-3  outline-none"
            value={subfieldselect}
            onChange={subfieldSort}
          >
            <option value="All">All</option>
            {subcategory?.map((f, index) =>
              f.subfields.map((subfield, subIndex) => (
                <option key={`${index}-${subIndex}`} value={subfield}>
                  {subfield}
                </option>
              ))
            )}
          </select>
        </div>

        <p className="font-light uppercase text-xs text-gray-500 pb-3">
          Explore the boundaries of art and technology with Fiverr's{" "}
          {params.categoryname} artists
        </p>
        <div className="flex items-center justify-between mb-[20px]">
          <div className="flex items-center gap-5 text-gray-500 font-light">
            <span>Budget</span>
            <input
              type="number"
              placeholder="min"
              value={budget.min}
              onChange={handlePrice}
              name="min"
              className="p-[3px] border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-600 focus:ring-2 ring-sky-400"
            />
            <input
              type="number "
              placeholder="max"
              name="max"
              onChange={handlePrice}
              value={budget.max}
              className="p-[3px] border border-gray-300 rounded-md focus:outline-none  focus:ring-2 ring-sky-400"
            />
            <button
              className="px-2 py-1 bg-green-600 text-white font-semibold rounded-md cursor-pointer"
              onClick={applyBudget}
            >
              Apply
            </button>
          </div>
          <div className=" flex items-center gap-[10px]">
            <span className="text-gray-500 font-light">SortBy</span>
            <select
              className="border-[1px] border-solid border-[#ccc] p-3 outline-none"
              value={sort}
              onChange={handleSort}
            >
              <option value="No Sort">No Sort</option>
              <option value="Top Rated">Top Rated</option>
              <option value="No of Orders">No of Orders</option>
            </select>
          </div>
        </div>
        <div
          className={`flex ${
            filteredGigs.length > 3 ? "justify-between" : "gap-12"
          } flex-wrap `}
        >
          {filteredGigs?.map((obj) => {
            return <GigCard key={obj.id} {...obj} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
