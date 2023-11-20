import React, { useState } from "react";
import Image from "next/image";
import like from "../../public/like.png";
import disLike from "../../public/dislike.png";
import StarRating from "../Shared/StarRating";
import likeblue from "../../public/likeblue.jpg";
import dislikeblue from "../../public/dislikeblue.png";;

function GigReviews({ name, image, country, rating, review, helpful }) {
  const [ThumbValue, setThumbValue] = useState({
    like: {
      yes: helpful.yes,
      tap: false,
      increasedOne: false,
    },
    dislike: {
      no: helpful.no,
      tap: false,
      increasedOne: false,
    },
  });
  const handleReaction = (e) => {
    console.log(e.target);
    if (e.target.classList.contains("like")) {
      if (ThumbValue.like.increasedOne) {
        return;
      }
      setThumbValue((prev) => {
        if (prev.dislike.tap) {
          return {
            ...prev,
            like: { yes: prev.like.yes + 1, tap: true, increasedOne: true },
            dislike: {
              no: prev.dislike.no - 1,
              tap: false,
              increasedOne: false,
            },
          };
        } else {
          return {
            ...prev,
            like: { yes: prev.like.yes + 1, tap: true, increasedOne: true },
          };
        }
      });
    } else {
      if (ThumbValue.dislike.increasedOne) {
        return;
      }
      setThumbValue((prev) => {
        if (prev.like.tap) {
          return {
            ...prev,
            like: { yes: prev.like.yes - 1, tap: false, increasedOne: false },
            dislike: { no: prev.dislike.no + 1, tap: true, increasedOne: true },
          };
        } else {
          return {
            ...prev,
            dislike: {
              no: prev.dislike.no + 1,
              tap: true,
              increasedOne: true,
            },
          };
        }
      });
    }
  };

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
          <Image
            className={`like  ${
              ThumbValue.like.tap ? "w-[13px]" : "w-[12px]"
            }  object-cover`}
            src={ThumbValue.like.tap ? likeblue : like}
            alt="error"
            onClick={handleReaction}
          />
          <span> {ThumbValue.like.yes}</span>
          <Image
            className=" dislike w-[12px]"
            src={ThumbValue.dislike.tap ? dislikeblue : disLike}
            alt="error"
            onClick={handleReaction}
          />
          <span>{ThumbValue.dislike.no}</span>
       
        </div>
      </div>
    </>
  );
}

export default GigReviews;
