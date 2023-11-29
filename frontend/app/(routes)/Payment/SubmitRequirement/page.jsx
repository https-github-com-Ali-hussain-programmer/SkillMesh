"use client";
import React from "react";

function SubmitRequirement() {
    const handleClick=()=>{
        
    }
  return (
    <>
      <div className="min-h-screen">
        <div className="p-10 flex flex-col gap-6">
          <h1 className="font-bold text-3xl text-black">
            Submit Project Proposal 
          </h1>
          <p className=" text-sm  font-semibold text-red-500">
            *Note that file should be in .pdf or .docx format and Explain Every
            detail of Your Project
          </p>
          <div className="flex justify-between items-center bg-[#fafafa] border border-solid border-gray-300 px-[15px] h-[60px] w-full ">
            <span className=" border-r border-solid border-gray-300 h-full px-5 flex items-center justify-center ">
              Upload
            </span>
            <input type="file" />
          </div>
          <div className="flex justify-end">
            {" "}
            <button  onClick={handleClick} className="px-[12px] py-[10px] w-1/5 bg-black text-white rounded border-none outline-none text-lg ">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubmitRequirement;
