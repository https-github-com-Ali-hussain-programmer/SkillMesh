"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import person from "../../../public/people-01.png";
import StepperOrder from "../../../Components/Stepper/StepperOrder";
import { AllordersSeller, uploadProjectFile } from "../../../Api/orderAPi";
import { useRouter } from "next/navigation";

const OrderPlace = () => {
  const [orderPlaced, setOrderPlaced] = useState([]);
  const router = useRouter();
  const [file, setFile] = useState("");
  const fileRef = useRef(null);
  const fetchSellerOrder = async () => {
    const response = await AllordersSeller();
    setOrderPlaced(response.orders);
  };

  useEffect(() => {
    fetchSellerOrder();
  }, []);
  const Upload = async (orderId) => {
    await uploadProjectFile(file, orderId);
    router.replace("/");
  };
  return (
    <div className="flex  min-h-screen flex-col items-center h-full w-full bg-[#e3e4e6] p-10">
      <div className="left  min-h-full w-full max-w-5xl bg-white shadow-2xl rounded-lg">
        <div className="py-8 px-10">
          {orderPlaced?.length < 0 ? (
            <h1 className="flex gap-2 items-center justify-center text-[27px] font-semibold">
              Order <span className="text-[#8a8b8c]"> No Order Placed</span>
            </h1>
          ) : (
            <h1 className="flex gap-2 items-center justify-center text-[27px] font-semibold">
              Order <span className="text-[#8a8b8c]">Placed</span>
            </h1>
          )}
          <table className="mt-8 w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#e3e4e6]">
                <th className="py-2 px-4 border border-gray-300">ITEM</th>
                <th className="py-2 px-4 border border-gray-300">QTY.</th>
                <th className="py-2 px-4 border border-gray-300">DURATION</th>
                <th className="py-2 px-4 border border-gray-300">PRICE</th>
                <th className="py-2 px-4 border border-gray-300">STATUS</th>
                <th className="py-2 px-4 border border-gray-300">DOCUMENT</th>
                <th className="py-2 px-4 border border-gray-300">
                  UPLOAD PROJECT
                </th>
              </tr>
            </thead>
            <tbody>
              {orderPlaced?.map((data, index) => (
                <tr className="bg-gray-100" key={index}>
                  <td className="py-2 px-4 border border-gray-300 whitespace-normal">
                    {data.gig.title}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {data.gig.Package[0].qty}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {data.gig.Package[0].delivery} days
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    <button className="bg-dark-blue text-white px-3 py-2 rounded-xl">
                      ${data.gig.Package[0].price}
                    </button>
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {data.status}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    <a
                      href={data?.sellerDocumentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Document
                    </a>
                  </td>
                  {data.status === "Completed" ? (
                    <td className="py-2 px-4 border border-gray-300">
                      Project Uploaded
                    </td>
                  ) : (
                    <td className="py-2 px-4 border border-gray-300">
                      <button
                        className="bg-dark-blue text-white px-3 py-2 rounded-xl"
                        onClick={() => {
                          if (file) {
                            Upload(data._id);
                          }
                        }}
                      >
                        Upload Project
                      </button>
                      <input
                        type="file"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                        }}
                      />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderPlace;
