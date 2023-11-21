import React from "react";
import Whishlist from "./Whishlist";
import { IoHeartDislikeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
const Favourite = [{}];
function Whishlistmodal() {
  return (
    <>
      <div className=" shadow-lg border-solid bg-white md:w-[350px] h-[470px] w-[300px] overflow-auto rounded-md border  border-gray-300">
        <h1 className=" flex justify-between items-center  text-gray-500  text-sm px-[12px] h-[10%] font-bold  border-b  border-gray-300">
          WishList ({Favourite?.length})
          <span>
            <FaHeart className="tetxt-5xl text-red-600" />
          </span>
        </h1>
        {Favourite.length > 0 ? (
          <Whishlist />
        ) : (
          <div className=" pt-14 flex items-center flex-col h-[90%] overflow-scroll">
            <IoHeartDislikeSharp className="h-[150px] w-[150px] text-red-600"/>
           
            <h1 className="text-[#404145] text-lg ">No Favourite Yet</h1>
            <p className="text-[#62646A] text-sm text-center p-2 px-5">
              Use the search box to find the digital services you need.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Whishlistmodal;
