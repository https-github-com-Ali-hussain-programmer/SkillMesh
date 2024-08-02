"use client";
import React from "react";
import Link from "next/link";

function Orderlist({ buyer, seller, gig }) {
  console.log(buyer,seller)
  return (
    <>
      <Link
        href={`/profilePage?id=${buyer?._id}`}
        className="h-fit text-[#404145] p-2 border-b-[1px] border-solid  border-gray-300 flex   items-center flex-row "
      >
        <img
          src={buyer?.avatar}
          alt="error"
          className="h-[40px] w-[40px] object-cover rounded-full"
        />

        <div className="flex flex-col gap-2 h-full w-full p-2 text-[#62646A] text-sm">
          <p>
            <strong className="tracking-wider">
              Congrats, You Have Placed Order to{" "}
            </strong>
            <span className="tracking-wider">
              {" "}
              {seller?.name} in {gig?.category?.categoryName} Category
            </span>
          </p>
          <p className="font-semibold text-sm text-blue-400">More Details </p>
        </div>
      </Link>
    </>
  );
}

export default Orderlist;
