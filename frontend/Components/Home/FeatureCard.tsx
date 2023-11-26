"use client";
import React from "react";
import Link from "next/link";


interface SliderObject {
  title: string;
  desc: string;
  img: string;
}

interface FeatureCardProps {
  sliderObject: SliderObject;
}
function FeatureCard({ sliderObject }: FeatureCardProps) {
  const { title, desc, img } = sliderObject;
  return (
    <>
      <Link href={""}>
        <div className="overlay lg:w-[190px]  xl:w-[220px] rounded-md  md:w-[200px]  w-[300px] mx-auto  h-[380px]    cursor-pointer text-white relative ">
          <img
            src={img}
            className="h-full w-full  object-cover  rounded-lg shadow-sm"
            alt="error"
            
          />
          <span className="font-medium text-[24px] absolute top-[40px] left-[15px]">
            {title}
          </span>
          <span className=" font-light  absolute top-[15px] left-[15px]">
            {desc}
          </span>
  
        </div>
      </Link>
    </>
  );
}

export default FeatureCard;
