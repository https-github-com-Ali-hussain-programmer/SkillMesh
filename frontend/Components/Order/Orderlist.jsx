"use client";
import React from "react";
import Link from "next/link";

function Orderlist({ userinfo }) {
  return (
    <>
      <Link
        href={`/profilePage?id=${userinfo?.userInformation?.userid}`}
        className="h-fit text-[#404145] p-2 border-b-[1px] border-solid  border-gray-300 flex   items-center flex-row "
      >
        <img
          src={userinfo?.userInformation?.profileImg}
          alt="error"
          className="h-[40px] w-[40px] object-cover rounded-full"
        />

        <div className="flex flex-col gap-2 h-full w-full p-2 text-[#62646A] text-sm">
          <p>
            <strong className="tracking-wider">
              Congrats, You Have  Placed Order to{" "}
            </strong>
            <span className="tracking-wider">
              {" "}
              {userinfo?.userInformation?.username} in {userinfo?.category}{" "}
              Category
            </span>
          </p>
          <p className="font-semibold text-sm text-blue-400">More Details </p>
        </div>
      </Link>
    </>
  );
}

export default Orderlist;
