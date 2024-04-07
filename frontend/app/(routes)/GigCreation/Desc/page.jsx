"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Desc = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const handleTitleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 1200) {
      setTitle(inputValue);
    }
  };
  const handleButtonCLick = () => {
    localStorage.setItem("description", title);
    router.push("./img");
  };
  return (
    <div className="w-full h-[1000px]">
      <div className="ml-[230px] mr-[365px] pt-[100px] text-[35px] mb-11 border-b-2 ">
        <div>
          <h1 className="mb-[30px]">Description</h1>
        </div>
      </div>
      <div className="max-w-[1000px] basic-right h-[300px] border-[1px] rounded mx-[230px] mt-[10px]">
        <h3 className="text-[20px]  py-6 px-8">Briefly Describe Your Gig</h3>
        <textarea
          value={title}
          onChange={handleTitleChange}
          name=""
          id=""
          cols="20"
          rows="5"
          className="mx-8 w-[90%] py-4 px-7 border-[1px] text-[18px] resize-none"
          placeholder="About Gig"
        ></textarea>
        <p className="flex justify-end mr-[70px] text-red-600">
          {title.length} / 1200 characters
        </p>
      </div>
      <button
        onClick={handleButtonCLick}
        className="bg-dark-blue mb-16 text-white py-4 px-8 ml-[1050px] mt-6 rounded-xl hover:bg-blue-950"
      >
        Save & Continue
      </button>
    </div>
  );
};

export default Desc;
