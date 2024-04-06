"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Uplaoder from "../../../../Components/GigCreation/img/Uplaoder";
import {createGig} from '../../../../Api/gigApi'  
const Img = () => {
  const router = useRouter();
  
  const handleSave = async() => {
    await createGig()
    router.push("./profile");
  };
  return (
    <div className="w-full min-h-screen">
      <div className="ml-[230px] mr-[365px] pt-[100px] text-[35px] mb-11 border-b-2 ">
        <div>
          <h1 className="mb-[30px] font-bold">Images(up to 3)</h1>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-[1200px] basic-right h-[500px] border-[1px] rounded mx-[230px] mt-[10px]">
        <Uplaoder onClick= {handleSave}/>
      </div>
      <div className="w-[70%] flex justify-end ">
        <button
          className="bg-dark-blue mb-16 text-white py-4 px-8 mt-6 rounded-xl hover:bg-blue-950 "
          onClick={handleSave}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default Img;
