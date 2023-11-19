import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
function StarRating({ rating, color }) {
  //5
  const starRating = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;

    return (
      <span key={index} className={`${color} `}>
        {rating >= index + 1 ? (
          <IoIosStar />
        ) : rating >= number ? (
          <IoIosStarHalf />
        ) : (
          <IoIosStarOutline />
        )}
      </span>
    );
  });
  return <>{starRating}</>;
}

export default StarRating;
