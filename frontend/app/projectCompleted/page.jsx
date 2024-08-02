"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  getAllOrdersCompleted,
  markCompletedProject,
} from "../../Api/orderAPi";
import useSmartContract from "../../utils/useSmartContract";
import { useRouter } from "next/navigation";

const projectCompleted = () => {
  const [ordercompleted, setOrdercompleted] = useState([]);
  const { completeOrderTx } = useSmartContract();
  const router = useRouter();
  const fetchCompletedOrder = async () => {
    const response = await getAllOrdersCompleted();
    setOrdercompleted(response.orders);
  };
  const markCompleted = async (id,oid) => {
    const res = await completeOrderTx(id);
    if (res) {
      const response = await markCompletedProject(oid);
    }
  };
  useEffect(() => {
    fetchCompletedOrder();
  }, []);

  return (
    <div className="flex  min-h-screen flex-col items-center h-full w-full bg-[#e3e4e6] p-10">
      <div className="left  min-h-full w-full max-w-5xl bg-white shadow-2xl rounded-lg">
        <div className="py-8 px-10">
          {ordercompleted?.length < 0 ? (
            <h1 className="flex gap-2 items-center justify-center text-[27px] font-semibold">
              Project <span className="text-[#8a8b8c]"> No Order Yet</span>
            </h1>
          ) : (
            <h1 className="flex gap-2 items-center justify-center text-[27px] font-semibold">
              Project <span className="text-[#8a8b8c]">Completed</span>
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
            <tbody className="w-full">
              {ordercompleted?.map((data, index) => (
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
                      href={data.sellerDocumentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Document
                    </a>
                  </td>
                  {data?.orderCompleted ? (
                    <td className="py-2 px-4 border border-gray-300">
                      Project Completed
                    </td>
                  ) : (
                    <td className="py-2 px-4 border border-gray-300">
                      <button
                        className="bg-pink-500 text-white px-3 py-2 rounded-xl"
                        onClick={() => {
                          markCompleted(
                            data.orderId,
                            data._id
                          
                          );
                        }}
                      >
                        Mark as Completed
                      </button>
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

export default projectCompleted;
