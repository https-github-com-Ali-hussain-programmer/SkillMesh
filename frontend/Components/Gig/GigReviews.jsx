import React, { useState } from "react";
import Image from "next/image";
import like from "../../public/like.png";
import disLike from "../../public/dislike.png";
import StarRating from "../Shared/StarRating";
function GigReviews({ name, image, country, rating, review, helpful }) {
  const [ThumbValue, setThumbValue] = useState({...helpful});

  return (
    <>
      <div className="item flex flex-col gap-[20px] my-[0] mx-[20px]">
        <div className="flex items-center  gap-3 ">
          <img
            className="h-[48px] w-[48px] object-cover rounded-full"
            src={image}
            alt="error"
          />
          <div className="flex flex-col gap-1">
            <span className="text-lg font-semibold">{name}</span>
            <div className="country flex items-center gap-[10px] text-gray-500">
              <img className="w-[20px]" src={country.flag} alt="error" />
              <span className="text-sm">{country.name}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[5px]">
          <StarRating rating={rating} color={"text-yellow-400"} />
          <span className="text-[14px] font-bold text-yellow-400">
            {rating}
          </span>
        </div>
        <p className="text-[#404145] text-sm break-words text-justify">
          {review}
        </p>
        <div className="helpful flex items-center gap-[10px] text-sm">
          <span className="font-semibold">Helpful?</span>
          <Image className="w-[14px]" src={like} alt="" />
          <span onClick={()=>setThumbValue(ThumbValue+1)}> {helpful.yes}</span>
          <Image className="w-[14px]" src={disLike} alt="" />
          <span onClick={()=>setThumbValue(ThumbValue+1)}>{helpful.no}</span>
        </div>
      </div>
    </>
  );
}

export default GigReviews;
