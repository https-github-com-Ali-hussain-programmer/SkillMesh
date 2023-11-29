import React from "react";
import Image from "next/image";
import gigs1 from "../../public/gig1.jpg";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
function ProfileGig() {
  return (
    <>
      <div className=" w-[300px] h-[384px] flex flex-col gap-3 pb-4 bg-white  hover:cursor-pointer hover:shadow-xl">
        <Image src={gigs1} alt="" className="" />
        <h3 className="p-2 text-[#404145] font-bold text-[16px]">
          Today i made this project based on web 3.0. Uisng React, NextJs,
          Tailwind, NodeJs
        </h3>
        <h3 className=" p-2  flex items-center justify-between">
          <div >
            {" "}
        <span className="text-gray-400 text-sm"> STARTING AT</span><span className="font-bold text-sm px-2">$78</span>
          </div>
          <span className="text-lg">
            <HiOutlineDotsHorizontal />
          </span>
        </h3>
      </div>
    </>
  );
}

export default ProfileGig;
