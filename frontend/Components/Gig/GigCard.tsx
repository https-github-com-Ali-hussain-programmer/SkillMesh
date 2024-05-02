"use client";
import React, { useState } from "react";
import starimg from "../../public/star.png";
import Image from "next/image";
import heart from "../../public/heart.png";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  addWishlist,
  removeWishlist,
  favouritesList,
} from "@/redux/slice/wishlistSlice";
import { toast } from "react-toastify";
// interface GigCardProps {
//   id: number;
//   img: string;
//   title: string;
//   price: number;
//   star: number;
//   userInformation: {
//     username: string;
//     userid: string;
//     profileImg: any;
//   };
//   ordersCompleted: number;
//   category: string;
//   subcategory: string;
// }

function GigCard(props) {
  const rate = useSelector((state) => state.exchange.ETH_TO_USD);
  const Favourites = useSelector(favouritesList);
  const router = useRouter();
  const favouritesSet = new Set(Favourites?.map((item: any) => item.id));
  const [isFavourite, setIsFavourite] = useState(favouritesSet.has(props?.id));
  const dispatch = useDispatch();
  const handleHeartClick = (e: any) => {
    if (e.target?.classList?.contains("heart")) {
      setIsFavourite(!isFavourite);
      e.stopPropagation();
      if (!isFavourite) {
        const data = {
          id: props._id,
          profileImg: props.user.avatar,
          star: props.rating,
          username: props.username,
          userid: props.user.id,
          ordersCompleted: 0,
          price: props.Package[0].price,
          category: props.category.categoryName,
          subcategory: props.subField.name,
        };

        dispatch(addWishlist({ data }));
        toast.success("Successfully Added To Whishlist", { autoClose: 3000 });
      } else {
        dispatch(removeWishlist(props.id));
      }
    }
  };

  return (
    <div
      onClick={() => {
        router.push(`/gig?id=${props._id} `);
      }}
    >
      <div className="w-[290px]  h-[400px] border border-gray-300 mb-[40px] shadow-lg relative gigs cursor-pointer ">
        <img
          className="w-full h-1/2 object-cover"
          src={props.gigimages[0]}
          alt="error"
        />
        <div className="p-[10px] px-[20px] flex flex-col gap-[20px]">
          <div className="flex items-center gap-[10px]">
            <img
              className="w-[26px] h-[26px] rounded-full object-fill"
              src={props.user.avatar}
              alt="error"
            />
            <span>{props.user.name}</span>
          </div>

          <p className="text-black dark:text-white">{props.title}</p>

          <div className="flex  justify-between ">
            <div className="flex items-center gap-[5px]">
              {" "}
              <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
              <span className="text-yellow-400 text-lg font-bold">
                {props.rating}
              </span>
            </div>

            <h1 className="text-gray-600 text-right">Order's 0</h1>
          </div>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="p-[10px] px-[20px] flex items-center justify-between">
          {isFavourite ? (
            <div className="center-div heart" onClick={handleHeartClick}></div>
          ) : (
            <Image
              className="w-[16px] h-[16px] object-cover heart"
              src={heart}
              alt="Heart"
              onClick={handleHeartClick}
            />
          )}
          <span className="text-gray-500 text-xs">STARTING AT</span>

          <h2 className="text-gray-500 text-18 font-bold text-right">
            {props.Package[0].price}$ (
            {(props.Package[0].price / rate).toFixed(3)}) ETH
          </h2>
        </div>
        <div className="pink-hover">
          <div className=" text-secondary-white p-[10px] px-[20px] flex flex-col gap-[20px]">
            <div className="flex items-center gap-[10px]">
              <img
                className="w-[26px] h-[26px] rounded-full object-cover"
                src={props.user.avatar}
                alt=""
              />
              <span>{props.user.name}</span>
            </div>
            <p className=" text-secondary-white">{props.title}</p>

            <div className="flex  justify-between ">
              <div className="flex items-center gap-[5px]">
                {" "}
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <span className="text-yellow-400 text-lg font-bold">
                  {props.rating}
                </span>
              </div>

              <h1 className="text-secondary-white  text-right">Order's 0</h1>
            </div>
          </div>
          <hr className="border-t border-gray-300" />
          <div className="p-[10px] px-[20px] flex items-center justify-between">
            {isFavourite ? (
              <div
                className="center-div heart"
                onClick={handleHeartClick}
              ></div>
            ) : (
              <Image
                className="w-[16px] h-[16px] object-cover heart"
                src={heart}
                alt="Heart"
                onClick={handleHeartClick}
              />
            )}

            <span className=" text-secondary-white text-xs">STARTING AT</span>
            <h2 className="text-gray-500 text-18 font-bold text-right">
              {props.Package[0].price}$ (
              {(props.Package[0].price / rate).toFixed(5)}) ETH
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GigCard;
