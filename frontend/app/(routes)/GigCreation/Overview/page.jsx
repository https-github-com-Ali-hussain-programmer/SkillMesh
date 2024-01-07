"use client";
import React from "react";
import Categories from "../../../../Components/GigCreation/Overview/Category";
import GigTitle from "../../../../Components/GigCreation/Overview/GigTitle"
import SearchTag from "../../../../Components/GigCreation/Overview/SearchTags"

const Overview = () => {
  
  return (
    <div className="w-full h-[1000px]">
      <div className="max-w-[1100px] border-[1px] rounded mx-[230px] mt-[100px] pb-28">
        <GigTitle />
        <Categories />
        <SearchTag />
      </div>
      <button className="bg-dark-blue text-white py-4 px-8 ml-[1150px] mt-6 rounded-xl hover:bg-blue-950">Save & Continue</button>
    </div>
  );
};

export default Overview;
