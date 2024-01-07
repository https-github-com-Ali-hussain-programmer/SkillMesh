"use client";
import React, { useState } from "react";

const Desc = () => {
  const [title, setTitle] = useState("");
  const handleTitleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 1200) {
      setTitle(inputValue);
    }
  };
  return (
    <div className="w-full h-[1000px]">
      <div className="ml-[230px] mr-[365px] pt-[100px] text-[35px] mb-11 border-b-2 ">
        <div>
          <h1 className="mb-[30px]">Description</h1>
        </div>
      </div>
      <div className="max-w-[1000px] bg-slate-50 h-[300px] border-[1px] rounded mx-[230px] mt-[10px]">
        <h3 className="text-[20px] text-gray-400 py-6 px-8">
          Briefly Describe Your Gig
        </h3>
        <textarea
          value={title}
          onChange={handleTitleChange}
          name=""
          id=""
          cols="30"
          rows="5"
          className="mx-8 w-[900px] py-4 px-7 border-[1px] text-[18px]"
          placeholder="About Gig"
        ></textarea>
        <p className="flex justify-end mr-[70px] text-red-600">
          {title.length} / 1200 characters
        </p>
      </div>
      <button className="bg-dark-blue mb-16 text-white py-4 px-8 ml-[1050px] mt-6 rounded-xl hover:bg-blue-950">
        Save & Continue
      </button>
    </div>
  );
};

export default Desc;
