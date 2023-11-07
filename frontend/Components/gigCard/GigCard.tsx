import Link from 'next/link';
import React from 'react'
import starimg from "../../public/star.png";
import Image from "next/image";
import heart from "../../public/heart.png"
interface GigCardProps {
    id: number;
    img: string;
    pp: string;
    desc: string;
    price: number;
    star: number;
    username: string;
}




function GigCard ({
  id,
  img,
  pp,
  desc,
  price,
  star,
  username
}: GigCardProps) {
  return (
    <Link href="/gig123">
        <div className= "w-[324px] h-[400px] border border-gray-300 mb-[40px]">
          <img className= "w-full h-1/2 object-cover" src={img} alt="" />
          <div className= "p-[10px] px-[20px] flex flex-col gap-[20px]">
            <div className= "flex items-center gap-[10px]">
              {/* <img className= "w-26 h-26 rounded-full object-cover" src= {item.pp} alt="" /> */}
              <img className= "w-[26px] h-[26px] rounded-full object-cover" src={pp} alt="" />

              {/* <span>{item.username}</span> */}
              <span>{username}</span>

            </div>
            {/* <p className= "text-black dark:text-white">{item.desc}</p> */}
            <p className= "text-black dark:text-white">{desc}</p>

            <div className= "flex items-center gap-[5px]">
              <Image className= "h-[14px] w-[14px]"  src={starimg}  alt='star'/>
              {/* <span className= "text-yellow-400 text-lg font-bold">{item.star}</span> */}
              <span className= "text-yellow-400 text-lg font-bold">{star}</span>

            </div>
          </div>
          <hr className= "border-t border-gray-300"/>
          <div className= "p-[10px] px-[20px] flex items-center justify-between">
            <Image className= "w-[16px] h-[16px] cursor-pointer object-cover"  src={heart}  alt='Heart'/>
            <span className= "text-gray-500 text-xs">STARTING AT</span>
            {/* <h2 className= "text-gray-500 text-18 font-normal text-right">${item.price}</h2> */}
            <h2 className= "text-gray-500 text-18 font-normal text-right">{price}</h2>

          </div>
        </div>
    </Link>

  )
}

export default GigCard