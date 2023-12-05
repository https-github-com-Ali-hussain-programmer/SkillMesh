import React from "react";
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
interface GigCardProps {
  id: number;
  img: string;
  title: string;
  price: number;
  star: number;
  userInformation: {
    username: string;
    userid: string;
    profileImg: any;
  };
  ordersCompleted: number;
  category: string;
  subcategory: string;
}

function GigCard({
  id,
  img,
  title,
  price,
  star,
  userInformation,
  ordersCompleted,
  category,
  subcategory,
}: GigCardProps) {
  const Favourites = useSelector(favouritesList);
  const router = useRouter();
  const favouritesSet = new Set(Favourites?.map((item: any) => item.id));
  const isFavourite = favouritesSet.has(id);

  const dispatch = useDispatch();
  const handleHeartClick = (e: any) => {
    if (e.target?.classList?.contains("heart")) {
      e.stopPropagation();
      if (!isFavourite) {
        const data = {
          id,
          profileImg: userInformation.profileImg,
          star,
          username: userInformation.username,
          userid:userInformation.userid,
          ordersCompleted,
          price,
          category,
          subcategory,
        };
        dispatch(addWishlist({ data }));
        toast.success("Successfully Added To Whishlist", { autoClose: 3000 });
      } else {
        dispatch(removeWishlist(id));
      }
    }
  };

  return (
    <div
      onClick={() => {
        router.push(`/gig?id=${id} `);
      }}
    >
      <div className="w-[290px]  h-[400px] border border-gray-300 mb-[40px] shadow-lg relative gigs cursor-pointer ">
        <img className="w-full h-1/2 object-cover" src={img} alt="error" />
        <div className="p-[10px] px-[20px] flex flex-col gap-[20px]">
          <div className="flex items-center gap-[10px]">
            <img
              className="w-[26px] h-[26px] rounded-full object-fill"
              src={ userInformation.profileImg}
              alt="error"
            />
            <span>{userInformation.username}</span>
          </div>

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
          {isFavourite ? (
            <div className="center-div heart" onClick={handleHeartClick}></div>
          ) : (
            <Image
              className="w-[16px] h-[16px] =object-cover heart"
              src={heart}
              alt="Heart"
              onClick={handleHeartClick}
            />
          )}
          <span className="text-gray-500 text-xs">STARTING AT</span>

          <h2 className="text-gray-500 text-18 font-bold text-right">
            {price}$
          </h2>
        </div>
        <div className="pink-hover">
          <div className=" text-secondary-white p-[10px] px-[20px] flex flex-col gap-[20px]">
            <div className="flex items-center gap-[10px]">
              <img
                className="w-[26px] h-[26px] rounded-full object-cover"
                src={ userInformation.profileImg}
                alt=""
              />
              <span>{userInformation.username}</span>
            </div>
            <p className=" text-secondary-white">{title}</p>

            <div className="flex  justify-between ">
              <div className="flex items-center gap-[5px]">
                {" "}
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <span className="text-yellow-400 text-lg font-bold">
                  {star}
                </span>
              </div>

              <h1 className="text-secondary-white  text-right">
                Order's ({ordersCompleted})
              </h1>
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
            <h2 className="  text-secondary-white text-18 font-bold text-right">
              {price}$
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GigCard;
