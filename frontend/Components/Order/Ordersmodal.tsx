import React from "react";
import Orderlist from "./Orderlist";
import emptybox from "../../public/emptybox.png";
import shoppingbag from "../../public/shopping-bag.png";
const orders = [{}];
function Ordersmodal() {
  return (
    <>
      <div className=" shadow-lg border-solid bg-white md:w-[350px] h-[470px] w-[300px] overflow-auto rounded-md border  border-gray-300">
        <h1 className=" flex justify-between items-center  text-gray-500  text-sm px-[12px] h-[10%] font-bold  border-b  border-gray-300">
          Orders ({orders?.length})
          <span>
            <img
              src={shoppingbag.src}
              className="h-8 w-8 object-cover"
              alt="error"
            />
          </span>
        </h1>
        {orders?.length > 0 ? (
          <Orderlist />
        ) : (
          <div className=" pt-14 flex items-center flex-col h-[90%] overflow-scroll">
            <img
              src={emptybox.src}
              alt="error"
              className="h-[150px] w-[150px] object-cover"
            />
            <h1 className="text-[#404145] text-lg ">No Order Yet</h1>
            <p className="text-[#62646A] text-sm text-center p-2 px-5">
              Use the search box to find the digital services you need.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Ordersmodal;
