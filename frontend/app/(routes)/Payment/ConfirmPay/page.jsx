"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spinner,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { SiHiveBlockchain } from "react-icons/si";
import { FaMoneyCheck } from "react-icons/fa6";
import { packagedata } from "../../../../redux/slice/TotalpackageSlice";
import { FormContext } from "../../../../context/Form";
import { useContext } from "react";
import { useRouter } from "next/navigation";
function ConfirmPay({}) {
  const [loading, setLoading] = useState(true);
  const total_package = useSelector(packagedata);
  const [data, setData] = useState(total_package);
  const { activeStep, setActiveStep } = useContext(FormContext);
  useEffect(() => {
    setLoading(false);
    setData(JSON.parse(localStorage.getItem("TotalPackage")));
  }, []);
console.log(packagedata)
  return (
    <>
      <div className="min-h-screen">
        <div className="flex justify-between  px-8 flex-col gap-2 sm:flex-row">
          <div className=" shadow-md flex flex-col  border border-gray-300  w-full sm:w-[40%]  rounded-md h-fit shrink-0 ">
            <h1 className="bg-gray-100 text-lg px-5 py-3 font-semibold flex justify-between items-center ">
              {" "}
              Billing Information{" "}
              <FaMoneyCheck className="text-lg text-gray-500" />
            </h1>
            <div className=" px-5 py-3 flex flex-col gap-3 text-sm">
              <p>
                Your Transaction will be issued according to the details listed
                here.
              </p>
              <p className="font-bold">sufyan Ahmed</p>
              <p>Pakistan</p>
            </div>
          </div>
          {!loading ? (
            <div className="rounded shahdow-md bg-[#fafafa]  border  border-gray-300  max-w-[450px] flex flex-col justify-center gap-4  px-3">
              <h1 className="font-bold text-[#404145] mt-3 text-2xl">
                {data?.packageName}
              </h1>
              <div className="flex items-center flex-col sm:flex-row gap-3 p-3">
                <img
                  src={data?.userinfo?.img}
                  alt="error"
                  className="h-[110px] w-[100px] object-cover rounded shrink-0 sm:shrink"
                />

                <h1 className="text-[#404145] font-bold text-lg break-words">
                  {data?.Title}
                </h1>
              </div>
              <div className="border-gray-300 border-solid border-b-[1px]"></div>
              <Accordion allowToggle={true}>
                <AccordionItem className="border-none">
                  {({ isDisabled }) => (
                    <>
                      <h2 className="text-sm font-bold">
                        <AccordionButton>
                          <span>Features</span>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <div className=" flex gap-5 flex-col">
                          {data.userinfo?.Features?.map((c, index) => {
                            return <span key={index}>{c}</span>;
                          })}
                        </div>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>

              <div className="border-gray-300 border-solid border-b-[1px]"></div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">Service Fee's</span>{" "}
                <span className="text-sm">5%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">Total Delivery Time</span>
                <span>{data.TotaldeliveryTime}-days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">Total Price</span>
                <span className="text-sm">PKR {data?.Totalprice}</span>
              </div>
              <div className="border-gray-300 border-solid border-b-[1px]"></div>
              <button
                onClick={() => {}}
                className="hover:bg-black transition-all duration-300 ease-in hover:scale-105 px-[20px] py-[10px] w-full bg-green-600 text-white text-lg font-bold rounded"
              >
                Confirm Pay
              </button>
              <p className="text-[#62646A]   text-sm pb-2 flex items-center justify-center gap-2">
                <SiHiveBlockchain className="text-blue-700" /> Secured by
                Blockchain
              </p>
            </div>
          ) : (
            <div className="flex-1 h-[400px] flex items-center justify-end pe-40 ">
              <Spinner size="xl" color="blackAlpha.900" />{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ConfirmPay;
