import React from "react";
import Orderlist from "./Orderlist";
function Ordersmodal() {
  return (
    <>
      <div className="overflow-y-auto  text-secondary-white  p-3 rounded-lg shadow-lg  h-[70vh] w-[33vw]  bg-primary-black flex flex-col  ">      
        <Orderlist/>
        <Orderlist/>
      </div>
    </>
  );
}

export default Ordersmodal;
