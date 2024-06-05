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
import { useDispatch, useSelector } from "react-redux";
import { SiHiveBlockchain } from "react-icons/si";
import { FaMoneyCheck } from "react-icons/fa6";
import { packagedata } from "../../../../redux/slice/TotalpackageSlice";
import { FormContext } from "../../../../context/Form";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { addOrderlist } from "@/redux/slice/orderlistSlice";
import useSmartContract from "../../../../utils/useSmartContract";
import swal from "sweetalert";
function ConfirmPay({}) {
  const [loading, setLoading] = useState(true);
  const total_package = useSelector(packagedata);
  const rate = useSelector((state) => state.exchange.ETH_TO_USD);
  const [data, setData] = useState(total_package);
  const { activeStep, setActiveStep } = useContext(FormContext);
  const dispatch = useDispatch();
  const router = useRouter();
  const { orderPlaced } = useSmartContract();
  useEffect(() => {
    setLoading(false);
    setData(JSON.parse(localStorage.getItem("TotalPackage")));
  }, []);

  const handleConfirm = async () => {
    const price = data?.Totalprice / rate;
    const gigId = data?.gigId;
    const address = data?.address;
    console.log(address, price, gigId)
  const result = await orderPlaced(address, price, gigId);
     swal("Congratulation!", "Successfully placed Order!", "success");
     dispatch(addOrderlist({ total_package }));
  };

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
            <div className="rounded shahdow-md bg-[#fafafa]  border  border-gray-300  w-[500px] flex flex-col justify-center gap-4  px-3">
              <h1 className="font-bold text-[#404145] mt-3 text-2xl">
                {data?.packageName}
              </h1>
              <div className="flex items-center flex-col sm:flex-row gap-3 p-3">
                <img
                  src={data?.img}
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
                <span className="text-sm">{data?.Totalprice / rate} ETH</span>
              </div>
              <div className="border-gray-300 border-solid border-b-[1px]"></div>
              <button
                onClick={() => {
                  handleConfirm();
                }}
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
