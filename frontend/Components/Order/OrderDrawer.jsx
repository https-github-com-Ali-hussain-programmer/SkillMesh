"use client";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import clock from "../../public/clock.png";
import recycle from "../../public/recycle.png";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Currency from "../../utils/Currency";
import { useRouter } from "next/navigation";

function OrderDrawer({ isOpen, onClose, packagesData }) {
  const [isListOpen, setIsListOpen] = useState(false);
  const [GigQuantity, setGigQuanity] = useState(1);
  const router = useRouter();
  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleGigQuantity = (increment) => {
    if (increment == -1 && GigQuantity == 1) {
      return;
    } else if (increment == 1 && GigQuantity == 5) {
      return;
    }
    const newQuantity = Math.max(1, GigQuantity + increment);
    setGigQuanity(newQuantity);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsListOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            borderBottomWidth={"1px"}
            borderColor={"blackAlpha.500"}
            fontStyle={"semibold"}
            fontSize={"lg"}
          >
            <span>Order's Options</span>
          </DrawerHeader>
          <DrawerBody>
            <div className="h-full w-full py-3 flex flex-col gap-5 items-center ">
              <div className="border-2 border-solid border-[#222325] rounded-md px-[16px] py-[20px] w-full ">
                <div className="flex justify-between items-center ">
                  <h1 className="font-semibold text-[18px]">
                    {packagesData.name}
                  </h1>{" "}
                  <span>PKR {Currency(packagesData.price, GigQuantity)}</span>
                </div>
                <p className="pb-[30px] pt-[3px] text-[ text-[#404145]  border-b-[1px] border-gray-300 border-solid">
                  {packagesData.desc}
                </p>
                <div className="flex justify-between items-center text-[#404145]">
                  <span className="py-4">Gig Quantity</span>
                  <div className="  flex items-center gap-2 text-[18px]">
                    <span
                      onClick={() => handleGigQuantity(1)}
                      className="cursor-pointer h-[30px] w-[30px] rounded-[50%] border border-solid border-[#dadbdd] flex items-center justify-center"
                    >
                      <FaPlus />
                    </span>
                    <span> {GigQuantity} </span>
                    <span
                      onClick={() => handleGigQuantity(-1)}
                      className=" cursor-pointer h-[30px] w-[30px] rounded-[50%] border border-solid border-[#dadbdd] flex items-center justify-center"
                    >
                      <FaMinus />
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-[#404145] text-sm  bg-[#f5f5f5] rounded-[8px] w-full flex flex-col gap-4 px-[16px] py-[20px] ">
                <div>
                  <h1 className="text-[#404145] text-2xl font-bold">
                    PKR {Currency(packagesData.price, GigQuantity)}
                  </h1>
                  <p className="pb-3  border-b-[1px] border-gray-300 border-solid text-gray-500">
                    Single Order
                  </p>
                </div>

                <div className="flex flex-col gap-4 font-bold">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-[16px] gap-2">
                        <FiPackage /> {packagesData?.name} Package
                      </span>{" "}
                      <span
                        className={`text-lg  transition-all duration-[0.4s] ease-out ${
                          isListOpen && "rotate-180"
                        } `}
                        onClick={toggleList}
                      >
                        <FaAngleDown />
                      </span>
                    </div>
                    <div
                      className={`orderactive ${
                        isListOpen && "activelist"
                      } ps-16`}
                    >
                      <ul
                        className={`text-[16px]  font-medium text-[#95979D] flex flex-col gap-4 py-2`}
                      >
                        {packagesData?.functionalities?.map((f, index) => {
                          return (
                            <li className="capitalize" key={index}>
                              {f}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[16px]">
                    <img src={clock.src} alt="no error" className="h-4 w-4" />
                    {packagesData.delivery}-day delivery
                  </div>
                  <div className="flex items-center gap-2 text-[16px]">
                    <img src={recycle.src} alt="no error" className="h-4 w-4" />
                    {packagesData.Revision} Revisions
                  </div>
                </div>
              </div>
              <div className="w-full border-gray-300 border-solid border-t-[1px] flex flex-col items-center py-8 gap-2">
                <button
                  onClick={() => router.push("/Payment")}
                  className="w-full text-center font-bold py-[12px] px-[20px] bg-black text-white outline-none rounded-md text-lg"
                >
                  Continue (PKR {Currency(packagesData.price, GigQuantity)})
                </button>
                <p>You won't be charged yet</p>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default OrderDrawer;