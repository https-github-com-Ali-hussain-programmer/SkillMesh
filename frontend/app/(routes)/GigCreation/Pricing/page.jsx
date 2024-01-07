"use client";
import React, { useState } from "react";
import Package from "../../../../Components/GigCreation/Pricing/package";
import Extra from "../../../../Components/GigCreation/Pricing/ExtraService";
import FastDelivery from "../../../../Components/GigCreation/Pricing/FastDelivery";
import Head from "next/head";
const Pricing = () => {
  const [ToggleMode, setToggleMode] = useState(false);

  const Toggle = () => {
    setToggleMode(!ToggleMode);
  };
  return (
    <div className="w-full">
      <div className="flex justify-between mx-[230px] pt-[100px] text-[20px] font-semibold mb-6">
        <div>
          <h1>Packages</h1>
        </div>
        <div className="flex gap-5">
          <h2>Add Extra Services</h2>
          <input
            onClick={Toggle}
            type="checkbox"
            className="mr-8 cursor-pointer h-7 w-7 rounded"
          />
        </div>
      </div>
      <div className="max-w-[1100px] border-[1px] rounded mx-[230px] mt-[10px]">
        <Package title="Basic" />
        {ToggleMode && (
        <>
          <Package title="Standard" />
          <Package title="Premimum" />
        </>
          )}
      </div>
      <h1 className=" mx-[230px] pt-[70px] text-[20px] font-semibold">
        Add extra services
      </h1>
      <div className="max-w-[1100px] border-[1px] rounded mx-[230px] mt-[10px] bg-slate-50">
        <h2 className="w-full py-6 px-6 bg-white text-[18px] font-semibold">
          Additional pages
        </h2>
        <Extra title="Basic" />
        {ToggleMode && (
          <>
            <Extra title="Standard" />
            <Extra title="Premium" />
          </>
        )}
      </div>
      <div className="max-w-[1100px] border-[1px] rounded mx-[230px] mt-[40px] bg-slate-50">
        <h2 className="w-full py-6 px-6 bg-white text-[18px] font-semibold">
          Extra fast delivery
        </h2>
        <FastDelivery title="Basic" />
        {ToggleMode && (
        <>
          <FastDelivery title="Standard" />
        <FastDelivery title="Premium" />
        </>
        )}
      </div>
      <button className="bg-dark-blue mb-16 text-white py-4 px-8 ml-[1150px] mt-6 rounded-xl hover:bg-blue-950">
        Save & Continue
      </button>
    </div>
  );
};

export default Pricing;
