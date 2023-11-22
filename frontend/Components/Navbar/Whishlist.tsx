import React from "react";
import Link from "next/link";
import StarRating from "../Shared/StarRating";
import { FaTrash } from "react-icons/fa";
import { removeWishlist } from "@/redux/slice/wishlistSlice";
import { useDispatch } from "react-redux";
interface GigCardProps {
  id: number;
  img: string;
  pp: string;
  title: string;
  price: number;
  star: number;
  username: string;
  ordersCompleted: number;
  category: string;
  subcategory: string;
}
function Whishlist({
  id,
  img,
  pp,
  title,
  price,
  star,
  username,
  ordersCompleted,
  category,
  subcategory,
}: GigCardProps) {
  const dispatch=useDispatch()
  return (
    <>
      <Link
        href="/"
        className=" cursor-pointer h-fit text-[#404145]  p-2 border-b-[1px] border-solid  border-gray-300 flex   items-center flex-row "
      >
        <img
          src={pp}
          alt="error"
          className="h-[40px] w-[40px] object-cover rounded-full"
        />

        <div className="flex flex-col gap-2 h-full w-full  text-justify text-[#62646A] text-sm p-2">
          <div>
            Congrats, You Have WishList
            <span className="p-1 font-bold hover:underline">{username} </span> from{" "}
            <span className="p-1 font-bold">{category}</span> Category
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-sm text-[#B5b6ba]">1d</p>
            <div className="flex justify-between items-center">
              <StarRating rating={star} color={"text-yellow-500"} />
            </div>
            <span onClick={()=>dispatch(removeWishlist(id))}>
              <FaTrash  className="text-blue-600"/>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Whishlist;
