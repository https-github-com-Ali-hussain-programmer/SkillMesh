import React from "react";
import Image from "next/image";
import person from "../../../public/people-01.png";
import StepperOrder from "../../../Components/Stepper/StepperOrder";
const OrderPlace = () => {
  const dummyData = [
    {
      item: "Design favicon for your logo",
      qty: 1,
      duration: "1 Day",
      price: "$8.23",
    },
    {
      item: "Lorem ipsum dolor sit amet",
      qty: 2,
      duration: "2 Days",
      price: "$16.46",
    },
    {
      item: "Consectetur adipiscing elit",
      qty: 3,
      duration: "3 Days",
      price: "$24.69",
    },
  ];
  return (
    <div className="flex gap-10 h-[1000px] w-[100%] bg-[#e3e4e6] p-[100px] px-[150px]">
      <div className="left flex-[3] bg-white shadow-2xl rounded-lg">
        <div className="py-[40px] px-[40px]">
          <h1 className="flex gap-2 items-center justify-center text-[27px] font-semibold">
            Order <span className="text-[#8a8b8c]"> Place</span>
          </h1>
          <table className="mt-4 w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#e3e4e6]">
                <th className="py-2 px-4 border border-gray-300">ITEM</th>
                <th className="py-2 px-4 border border-gray-300">QTY.</th>
                <th className="py-2 px-4 border border-gray-300">DURATION</th>
                <th className="py-2 px-4 border border-gray-300">PRICE</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((data, index) => (
                <tr className="bg-gray-100" key={index}>
                  <td className="py-2 px-4 border border-gray-300 whitespace-normal">
                    {data.item}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {data.qty}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {data.duration}
                  </td>
                  <td className="py-2 px-1 border border-gray-300">
                    <button className="bg-dark-blue text-white px-3 py-2 rounded-xl">
                      {data.price}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="right flex-[1.2] bg-white shadow-2xl rounded-lg">
        <div className="flex pt-[39px] px-[25px] gap-4">
          <Image src={person} className="w-[65px]" />
          <h3 className="font-[600] text-[17px]">
            I will Design Modern Minimalist Logo
          </h3>
        </div>

        <div className="flex flex-col mt-6 px-[25px]">
          <div className="flex  justify-between py-2">
            <p className="text-[17px] text-[#757575]">Status</p>
            <h5 className="px-2 bg-blue-600 rounded-2xl text-white">
              In Progress
            </h5>
          </div>
          <div className="flex justify-between pb-2">
            <p className="text-[17px] text-[#757575]">Delivery due date</p>
            <h5 className="text-[18px] text-[#535353]">Nov 19, 04:48 PM</h5>
          </div>
          <div className="flex justify-between pb-2">
            <p className="text-[17px] text-[#757575]">Total Price</p>
            <h5 className="text-[18px] text-[#535353]">$5.78</h5>
          </div>
          <div className="flex justify-between">
            <p className="text-[17px] text-[#757575]">Order number</p>
            <h5 className="text-[18px] text-[#535353]">#678643467885422</h5>
          </div>
        </div>
        <hr className="mt-[35px] border-[1px]" />
        <div className="px-[25px] mt-6">
          <StepperOrder />
        </div>
      </div>
    </div>
  );
};

export default OrderPlace;
