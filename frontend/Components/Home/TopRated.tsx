import React from "react";
import { topRated } from "../../utils/data";
import {TopRatedCard} from "../../Components";

function TopRated() {
  return (
    <div className=" TopRated-bg  py-20     ">
      <div className=" px-7  container 2xl:w-[1400px]  flex flex-col gap-10    rounded-lg shadow-lg">
        <h1 className="font-bold  text-5xl text-center  text-white">Top Sellers</h1>
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
