import React from "react";
import Orderlist from "./Orderlist";
function Ordersmodal() {
  return (
    <>
      <div className=" ring ring-sky-400 overflow-y-auto  text-dark-black  p-3 rounded-lg shadow-lg  h-[70vh] w-[25vw]  bg-[#fcfcfc] flex flex-col  ">      
        <Orderlist/>
        <Orderlist/>
      </div>
    </>
  );
}

export default Ordersmodal;
