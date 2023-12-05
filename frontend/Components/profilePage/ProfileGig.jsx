import React from "react";
import Image from "next/image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
function ProfileGig({ img, title, price }) {
  return (
    <>
      <div className=" w-[300px] h-[384px] flex flex-col gap-3 pb-4 bg-white  hover:cursor-pointer hover:shadow-xl">
        <Image src={img} alt="error" className="" />
        <h3 className="p-2 text-[#404145] font-bold text-[16px]">{title}</h3>
        <h3 className=" p-2  flex items-center justify-between">
          <div>
            {" "}
            <span className="text-gray-400 text-sm"> STARTING AT</span>
            <span className="font-bold text-sm px-2">${price}</span>
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
