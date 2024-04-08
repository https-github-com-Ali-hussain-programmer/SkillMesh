"use client";
import React, { useState } from "react";
import { Category } from "@/utils/data";

const Dispute = () => {
  //   const [selectedCategory, setSelectedCategory] = useState("");
  //   const [subfields, setSubfields] = useState([]);
  return (
    <div className="flex justify-center my-[70px]">
      <div className="w-1/2 border-[1px] rounded-2xl shadow-md">
        <h1 className="flex justify-center py-3  text-[30px] font-semibold text-slate-600">
          Dispute Form
        </h1>
        <div className="flex flex-row justify-between px-10 py-9">
          <span className="flex gap-2">
            <label className="flex justify-center items-center">
              Buyer Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="outline-none border-[1px] py-2 px-3 border-inherit rounded-md"
            />
          </span>
          <span className="flex gap-2">
            <label className="flex justify-center items-center">
              Seller Name
            </label>
            <input
              type="text"
              placeholder="Enter seller name"
              className="outline-none border-[1px] py-2 px-3 border-inherit rounded-md"
            />
          </span>
        </div>
        <div className="flex flex-row px-10 gap-5 pb-10">
          <label className="flex justify-center items-center">
            Seller Link
          </label>
          <input
            type="text"
            placeholder="Enter seller id link"
            className="w-[623px] outline-none border-[1px] py-2 px-3 border-inherit rounded-md"
          />
        </div>

        <div className="flex flex-row justify-between px-10 pb-10">
          <select
            name=""
            className="w-[250px] border-[1px] border-inherit py-2 outline-none"
          >
            <option value="">Problem Type</option>
            <option value="Quality of Work">Quality of Work</option>
            <option value="In Complete Requirments">
              In Complete Requirments
            </option>
            <option value="Delays">Delays</option>
          </select>

          <select
            name=""
            className="w-[250px]  border-[1px] border-inherit py-2 outline-none"
          >
            <option value="">Package Type</option>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </select>
        </div>

        <div className="flex flex-row justify-between px-10 pb-10">
          <select className="w-[250px]  border-[1px] border-inherit py-2 outline-none">
            <option value="">Select Category</option>
            <option value="AI Service">AI Service</option>
            <option value="Web Development">Web Development</option>
          </select>

          <select className="w-[250px]  border-[1px] border-inherit py-2 outline-none">
            <option value="">Select Subfield</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </div>

        <div className="flex flex-col px-10 gap-2 pb-8">
          <span>Problem Explanation</span>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            className="resize-none outline-none border-[1px] py-2 px-3 border-inherit rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-center pb-10">
        <button className="bg-dark-black text-white px-4 py-2 rounded-lg ">Dispute</button>
        </div>
      </div>
    </div>
  );
};

export default Dispute;
