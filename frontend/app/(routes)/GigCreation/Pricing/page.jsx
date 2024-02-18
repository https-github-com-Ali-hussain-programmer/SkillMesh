"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Pricing = () => {
  const devliveryTime = [
    "1 DAY DELIVERY",
    "2 DAY DELIVERY",
    "4 DAY DELIVERY",
    "6 DAY DELIVERY",
    "8 DAY DELIVERY",
    "11 DAY DELIVERY",
    "13 DAY DELIVERY",
    "15 DAY DELIVERY",
  ];
  const noOfPages = [
    "1",
    "2",
    "4",
    "6",
    "8",
    "10",
    "12",
    "15",
    "17",
    "19",
    "21",
    "23",
    "25",
  ];
  const [basicPkg, setBasicPkg] = useState({
    packageName: "",
    offeringDetails: "",
    noOfPages: "",
    deliveryTime: "",
    price: "",
  });
  const [standardPkg, setStandardPkg] = useState({
    packageName: "",
    offeringDetails: "",
    noOfPages: "",
    deliveryTime: "",
    price: "",
  });
  const [premiumPkg, setPremiumPkg] = useState({
    packageName: "",
    offeringDetails: "",
    noOfPages: "",
    deliveryTime: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBasicPkg({ ...basicPkg, [name]: value });
  };
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setStandardPkg({ ...standardPkg, [name]: value });
  };
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setPremiumPkg({ ...premiumPkg, [name]: value });
  };
  const saveDataToLocal = () => {
    localStorage.setItem("basicPkg", JSON.stringify(basicPkg));
    localStorage.setItem("standardPkg", JSON.stringify(standardPkg));
    localStorage.setItem("premiumPkg", JSON.stringify(premiumPkg));
    alert("Data saved to local storage!");
    router.push("./Desc");
  };

  return (
    <div className="w-full h-[1000px]">
      <div className="max-w-[1100px] rounded mx-[230px] mt-[100px]">
        <h1 className="text-[25px] font-bold pb-5">Scope & Pricing</h1>
      </div>
      <div className="flex max-w-[1100px] border-[1px] mx-[230px] main">
        <div className="flex-[0.50] border-r-[1px] p basic main">
          <h1 className="py-[75px] flex justify-center items-center text-[22px] font-semibold">
            Basic
          </h1>
        </div>
        <div className="flex-[2] basic-right">
          <div className="flex justify-start gap-7 flex-wrap py-8 px-5">
            <textarea
              name="packageName"
              value={basicPkg.packageName}
              onChange={handleChange}
              cols={20}
              rows={1}
              className="resize-none overflow-hidden border-[1px] rounded-xl border-black w-[250px] py-2 px-3 text-[black]"
              placeholder="Name Your Package"
            ></textarea>
            <textarea
              name="offeringDetails"
              value={basicPkg.offeringDetails}
              onChange={handleChange}
              cols={20}
              rows={1}
              className="resize-none overflow-hidden border-[1px] rounded-xl border-black w-[250px] py-2 px-3 text-[black]"
              placeholder="Details of you offering"
            ></textarea>
            <select
              name="noOfPages"
              value={basicPkg.noOfPages}
              onChange={handleChange}
              className="border-[1px] border-black border-solid py-2 px-3 rounded-xl outline-none w-[250px] text-gray-400"
            >
              <option value="No of pages or screens">
                No of pages or screens
              </option>

              {noOfPages.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
            <select
              name="deliveryTime"
              value={basicPkg.deliveryTime}
              onChange={handleChange}
              className="border-[1px]  border-black border-solid py-2 px-3 rounded-xl outline-none w-[250px] text-gray-400"
            >
              <option value="Delivery Time">Delivery Time</option>

              {devliveryTime.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
            <textarea
              name="price"
              value={basicPkg.price}
              onChange={handleChange}
              cols={20}
              rows={1}
              className="resize-none overflow-hidden border-[1px] rounded-xl border-black w-[250px] py-2 px-3 text-[black]"
              placeholder="Price"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex max-w-[1100px] border-[1px] mx-[230px] main">
        <div className="flex-[0.50] border-r-[1px] p basic main">
          <h1 className="py-[75px] flex justify-center items-center text-[22px] font-semibold">
            Standard
          </h1>
        </div>
        <div className="flex-[2] basic-right">
          <div className="flex justify-start gap-7 flex-wrap py-8 px-5">
            <textarea
              name="packageName"
              value={standardPkg.packageName}
              onChange={handleChange1}
              cols={20}
              rows={1}
              className="resize-none overflow-hidden border-[1px] rounded-xl border-black w-[250px] py-2 px-3 text-[black]"
              placeholder="Name Your Package"
            ></textarea>
            <textarea
              name="offeringDetails"
              value={standardPkg.offeringDetails}
              onChange={handleChange1}
              cols={20}
              rows={1}
              className="resize-none overflow-hidden border-[1px] rounded-xl border-black w-[250px] py-2 px-3 text-[black]"
              placeholder="Details of you offering"
            ></textarea>
            <select
              name="noOfPages"
              value={standardPkg.noOfPages}
              onChange={handleChange1}
              className="border-[1px] border-black border-solid py-2 px-3 rounded-xl outline-none w-[250px] text-gray-400"
            >
              <option value="No of pages or screens">
                No of pages or screens
              </option>

              {noOfPages.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
            <select
              name="deliveryTime"
              value={standardPkg.deliveryTime}
              onChange={handleChange1}
              className="border-[1px]  border-black border-solid py-2 px-3 rounded-xl outline-none w-[250px] text-gray-400"
            >
              <option value="Delivery Time">Delivery Time</option>

              {devliveryTime.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
            <textarea
              name="price"
              value={standardPkg.price}
              onChange={handleChange1}
              cols={20}
              rows={1}
              className="resize-none overflow-hidden border-[1px] rounded-xl border-black w-[250px] py-2 px-3 text-[black]"
              placeholder="Price"
            ></textarea>
          </div>
        </div>
      </div>





      <div className="flex max-w-[1100px] border-[1px] mx-[230px] main">
        <div className="flex-[0.50] border-r-[1px] p basic main">
          <h1 className="py-[75px] flex justify-center items-center text-[22px] font-semibold">
            Premium
          </h1>
        </div>
        <div className="flex-[2] basic-right">
          <div className="flex justify-start gap-7 flex-wrap py-8 px-5">
            <textarea
              name="packageName"
              value={premiumPkg.packageName}
              onChange={handleChange2}
              cols={20}
              rows={1}
              className="resize-none overflow-hidden border-[1px] rounded-xl border-black w-[250px] py-2 px-3 text-[black]"
              placeholder="Name Your Package"
            ></textarea>
            <textarea
              name="offeringDetails"
              value={premiumPkg.offeringDetails}
              onChange={handleChange2}
              cols={20}
              rows={1}
              className="resize-none overflow-hidden border-[1px] rounded-xl border-black w-[250px] py-2 px-3 text-[black]"
              placeholder="Details of you offering"
            ></textarea>
            <select
              name="noOfPages"
              value={premiumPkg.noOfPages}
              onChange={handleChange2}
              className="border-[1px] border-black border-solid py-2 px-3 rounded-xl outline-none w-[250px] text-gray-400"
            >
              <option value="No of pages or screens">
                No of pages or screens
              </option>

              {noOfPages.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
            <select
              name="deliveryTime"
              value={premiumPkg.deliveryTime}
              onChange={handleChange2}
              className="border-[1px]  border-black border-solid py-2 px-3 rounded-xl outline-none w-[250px] text-gray-400"
            >
              <option value="Delivery Time">Delivery Time</option>

              {devliveryTime.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
            <textarea
              name="price"
              value={premiumPkg.price}
              onChange={handleChange2}
              cols={20}
              rows={1}
              className="resize-none overflow-hidden border-[1px] rounded-xl border-black w-[250px] py-2 px-3 text-[black]"
              placeholder="Price"
            ></textarea>
          </div>
        </div>
      </div>

      <button
        onClick={saveDataToLocal}
        className="bg-dark-blue text-white py-4 px-8 ml-[1150px] mt-6 rounded-xl hover:bg-blue-950"
      >
        Save & Continue
      </button>
    </div>
  );
};

export default Pricing;
