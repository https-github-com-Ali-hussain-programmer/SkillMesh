import React from "react";
import { MdOutlineStar } from "react-icons/md";
interface TopRatedCardProps {
  name: string;
  rating: number;
  desc: string;
  numOrders: number;
  category: string;
  status: string;
  img: string;
  coverImg: string;
  pricing: string;
}
function TopRatedCard({
  rating,
  desc,
  numOrders,
  category,
  status,
  img,
  name,
  pricing,
  coverImg,
}: TopRatedCardProps) {
  return (
    <div className=" flex flex-col  cursor-pointer p-2  shadow-lg text-dark-black  bg-[#fcfcfc]   rounded-lg    ">
      <div className="w-full h-[200px] ">
        <img
          src={coverImg}
          alt="error"
          className="h-full w-full  rounded-lg object-cover"
        />
      </div>

      <div className="flex items-center justify-between py-3 ">
        <div className="flex items-center gap-2 ">
          <img src={img} alt="error" className="h-10 w-10 object-cover" />
          <h3 className="font-bold text-sm ">{name}</h3>
        </div>
        <h2 className="p-3 border-solid bg-purple-800 rounded-md text-white ">
          {status}
        </h2>
      </div>
      <h1 className="text-md font-bold">{category}</h1>
      <p className="text-md py-2">{desc}</p>
      <div className="flex items-center justify-between md:flex-col lg:flex-row py-2">
        <div className="flex items-center gap-1 ">
          <span className=" text-yellow-300">
            {" "}
            <MdOutlineStar />
          </span>{" "}
          {rating} <span>({numOrders})</span>
        </div>

        <p className="text-sm font-bold">{pricing}</p>
      </div>
    </div>
  );
}

export default TopRatedCard;
