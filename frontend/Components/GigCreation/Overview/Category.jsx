import React from 'react'
import { Category } from "@/utils/data";
import { useState } from "react";

const Categories = () => {

  return (
    <div className="flex gap-[60px] px-10 pb-11">
          <div className="flex-[1]">
            <h3 className="text-[22px] font-semibold">Category</h3>
            <p className="pt-[10px] text-[18px]">
              Choose the category and sub-category most suitable for your Gig.
            </p>
          </div>
          <div className="flex-[2]">
            <div className="flex justify-between">
              <select
                className=" border-[1.5px] border-solid  border-[#ccc] p-3  outline-none w-[50%] md:w-[45%] my-5"
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
              <select
                className=" border-[1.5px] border-solid  border-[#ccc] p-3  outline-none w-[50%] md:w-[45%] my-5"
              >
                <option value="All Available">All Available</option>
                {Category.map((p, index) => {
                  return (
                    <option key={index} value={p.category}>
                      {p.subfields}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>    
  )
}

export default Categories