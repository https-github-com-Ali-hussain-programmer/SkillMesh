"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Package from "../../../../Components/GigCreation/Package";
const Pricing = () => {
  const router = useRouter();
  const handleChange = (e, pkgType) => {
    const { name, value } = e.target;
    setPackage((prevPackage) => ({
      ...prevPackage,
      [pkgType]: {
        ...prevPackage[pkgType],
        [name]: value,
      },
    }));
  };

  const [packageState, setPackage] = useState({
    basic: {
      name: "basic",
      packageDesc: "",
      offeringDetails: "",
      noOfPages: "",
      deliveryTime: "",
      price: "",
    },
    standard: {
      name: "standard",
      packageDesc: "",
      offeringDetails: "",
      noOfPages: "",
      deliveryTime: "",
      price: "",
    },
    premium: {
      name: "premium",
      packageDesc: "",
      offeringDetails: "",
      noOfPages: "",
      deliveryTime: "",
      price: "",
    },
  });

  const saveDataToLocal = () => {
    localStorage.setItem("basicPkg", JSON.stringify(packageState.basic));
    localStorage.setItem("standardPkg", JSON.stringify(packageState.standard));
    localStorage.setItem("premiumPkg", JSON.stringify(packageState.premium));
    router.push("./Desc");
  };

  return (
    <div className="w-full  min-h-screen">
      <div className="max-w-[1100px] rounded mx-[230px] mt-[100px]">
        <h1 className="text-[25px] font-bold pb-5">Scope & Pricing</h1>
        <Package
          packageDetails={packageState.basic}
          handleChange={(e) => handleChange(e, "basic")}
        />
        <Package
          packageDetails={packageState.standard}
          handleChange={(e) => handleChange(e, "standard")}
        />
        <Package
          packageDetails={packageState.premium}
          handleChange={(e) => handleChange(e, "premium")}
        />
        <button
          onClick={saveDataToLocal}
          className="bg-dark-blue text-white py-4 px-8 ml-[1150px] mt-6 rounded-xl hover:bg-blue-950"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default Pricing;
