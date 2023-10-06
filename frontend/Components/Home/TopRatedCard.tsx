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
  coverImg:string;
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
  coverImg
}: TopRatedCardProps) {
  return (
    <div className=" flex flex-col gap-5 cursor-pointer p-2  text-white  bg-white bg-opacity-10 w-[300px] rounded-lg h-[70vh]   ">
      <div className="w-full h-[30vh] ">
        <img src={coverImg} alt="error" className="h-full w-full  rounded-lg" />
      </div>

      <div className="flex items-center justify-between py-3 ">
        <div className="flex items-center gap-2">
          <img src={img} alt="error" className="h-8 w-8 object-cover" />
          <h3 className="font-bold text-sm ">{name}</h3>
        </div>
        <h2 className="p-2 rounded-lg border-secondary-white border-1 border-solid bg-white bg-opacity-10">
          {status}
        </h2>
      </div>

      <p className="text-sm font-light italic py-2">{desc}</p>
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
