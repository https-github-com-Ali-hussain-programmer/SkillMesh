import Link from "next/link";
import React from "react";
import starimg from "../../public/star.png";
import Image from "next/image";
import heart from "../../public/heart.png";
interface GigCardProps {
  id: number;
  img: string;
  pp: string;
  title: string;
  price: number;
  star: number;
  username: string;
  ordersCompleted: number;
}

function GigCard({
  id,
  img,
  pp,
  title,
  price,
  star,
  username,
  ordersCompleted,
}: GigCardProps) {
  return (
    <Link href={`/gig?id=${id} `}>
      <div className="w-[300px]  h-[400px] border border-gray-300 mb-[40px]  hover:border-2">
        <img className="w-full h-1/2 object-cover" src={img} alt="" />
        <div className="p-[10px] px-[20px] flex flex-col gap-[20px]">
          <div className="flex items-center gap-[10px]">
            {/* <img className= "w-26 h-26 rounded-full object-cover" src= {item.pp} alt="" /> */}
            <img
              className="w-[26px] h-[26px] rounded-full object-cover"
              src={pp}
              alt=""
            />

            {/* <span>{item.username}</span> */}
            <span>{username}</span>
          </div>
          {/* <p className= "text-black dark:text-white">{item.desc}</p> */}
          <p className="text-black dark:text-white">{title}</p>

          <div className="flex  justify-between ">
            <div className="flex items-center gap-[5px]">
              {" "}
              <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
              <span className="text-yellow-400 text-lg font-bold">{star}</span>
            </div>

            <h1 className="text-gray-600 text-right">
              Order's ({ordersCompleted})
            </h1>
          </div>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="p-[10px] px-[20px] flex items-center justify-between">
          <Image
            className="w-[16px] h-[16px] cursor-pointer object-cover"
            src={heart}
            alt="Heart"
          />
          <span className="text-gray-500 text-xs">STARTING AT</span>
          {/* <h2 className= "text-gray-500 text-18 font-normal text-right">${item.price}</h2> */}
          <h2 className="text-gray-500 text-18 font-bold text-right">
            {price}$
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default GigCard;
