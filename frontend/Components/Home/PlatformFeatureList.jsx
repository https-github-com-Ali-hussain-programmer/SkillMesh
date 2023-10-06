import React from "react";
import { BsCheckCircle } from "react-icons/bs";

function FeatureList({ title, desc }) {
  return (
    <>
      <div className="flex flex-col  lg:gap-3">
        <div className="flex items-center gap-2.5  text-lg font-bold text-black-900 ">
          <BsCheckCircle />
          {title}
        </div>
        <p className=" lg:max-w-sm text-lightGrey ">{desc}</p>
      </div>
    </>
  );
}

export default FeatureList;
