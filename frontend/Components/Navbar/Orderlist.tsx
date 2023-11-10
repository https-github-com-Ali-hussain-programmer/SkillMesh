import React from "react";
import Link from "next/link";
import p1 from "../../public/people-01.png";
function Orderlist() {
  return (
    <>
      <Link  href="/" className="border-b-[1px]  pb-3 border-solid font-normal border-[#56687a] flex text-[12px]  items-center flex-col lg:flex-row ">
        <div className="w-[20%]  ">
          <img
            src={p1.src}
            alt="error"
            className="h-full w-full object-contain"
          />
        </div>
        <div className=" flex flex-col  w-full p-1 gap-1 ">
          <div className="flex lg:items-center  justify-between flex-col lg:flex-row">
            <h3 className="font-bold text-lg">name</h3>
            <h3>sub-category</h3>
            <h3>category</h3>
          </div>
          <div className="flex lg:items-center justify-between flex-col lg:flex-row">
            <h3>Rating</h3>
            <h3>No of Orders</h3>
            <h3>Order Completed</h3>
          </div>
          <button className="bg-blue-900 p-2 rounded-lg text-white">Message</button>
        </div>
        
      </Link>
    </>
  );
}

export default Orderlist;
