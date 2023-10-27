"use client";
import React from "react";
import { SliderData } from "@/utils/data";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";
import { staggerContainer, slideIn, textVariant2 } from "@/utils/motion";
import planet from '../../public/planet-09.png'


function Features() {

  return (
   
  
    <section className={`  my-40  text-secondary-white`}>
      <div className="gradient-02 z-0" />
      <div className={`container mx-auto flex flex-col  gap-4 px-2 `}>
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
