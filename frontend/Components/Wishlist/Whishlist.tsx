import React from "react";
import Link from "next/link";
import StarRating from "../Shared/StarRating";
import { FaTrash } from "react-icons/fa";
import { removeWishlist } from "@/redux/slice/wishlistSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
interface GigCardProps {
  id: number;
  price: number;
  star: number;
  ordersCompleted: number;
  category: string;
  subcategory: string;
  username: string;
  userid: string;
  profileImg: any;
}
function Whishlist({
  id,
  profileImg,
  star,
  username,
  userid,
  ordersCompleted,
  price,
  category,
  subcategory,
}: GigCardProps) {
  const dispatch = useDispatch();
  return (
    <>
      <div className=" cursor-pointer h-fit text-[#404145]  p-2 border-b-[1px] border-solid  border-gray-300 flex   items-center flex-row ">
        <img
          src={profileImg}
          alt="error"
          className="h-[40px] w-[40px] object-cover rounded-full"
        />

        <div className="flex flex-col gap-2 h-full w-full  text-justify text-[#62646A] text-sm p-2">
          <div>
            Congrats, You Have WishList
            <span className="p-1 font-bold hover:underline tracking-wide">
              {username}{" "}
            </span>{" "}
            from <span className="p-1 font-bold ">{category}</span> Category
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-sm text-[#B5b6ba]">1d</p>
            <div className="flex justify-between items-center">
              <StarRating rating={star} color={"text-yellow-500"} />
            </div>
            <span
              onClick={(e) => {
                setTimeout(() => {
                  e.stopPropagation();
                  dispatch(removeWishlist(id));
                  toast.error("Removed from Wishlist", { autoClose: 3000 });
                }, 0);
              }}
            >
              <FaTrash className="text-blue-600" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whishlist;
