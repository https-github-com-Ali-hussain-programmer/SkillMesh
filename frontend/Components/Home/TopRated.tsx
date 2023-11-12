import React, { useRef } from "react";
import { topRated } from "../../utils/data";
import TopRatedCard from "./TopRatedCard";
import { motion as m } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
function TopRated() {
  return (
    <div className=" persecptive-container   my-80  relative  min-h-screen   ">
      <div className=" TopRated-bg   container 2xl:w-[1400px]   gap-6 p-6   rounded-lg shadow-lg">
        <h1 className="font-bold  text-[30px] text-center my-5 text-white">Top Sellers</h1>
        <div className=" gap-10 flex items-center sm:justify-between  justify-center   flex-col md:flex-row">
          {topRated.map((obj) => {
            return <TopRatedCard key={obj.id} {...obj} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TopRated;
