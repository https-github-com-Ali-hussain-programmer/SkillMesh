"use client";
import React from "react";
import { SliderData } from "@/utils/data";
import FeatureCard from "./FeatureCard";
import { useSelector } from "react-redux";

function Features() {
  const currentUser = useSelector((state) => state.user.userData);
  return (
    <section
      className={`  my-40 
        " text-secondary-white"
      `}
    >
      <div className={` px-7 container 2xl:w-[1400px] flex flex-col  gap-4  `}>
        <h1 className="text-5xl font-bold md:text-left  text-center mb-8 italic">
          Features
        </h1>
        <div className="flex  items-center  justify-center mx-auto flex-wrap gap-10    ">
          {SliderData.map((slider) => {
            return <FeatureCard key={slider.id} sliderObject={slider} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
