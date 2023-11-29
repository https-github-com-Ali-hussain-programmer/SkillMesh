"use client";
import React from "react";
import { StepperForm } from "../../../Components";

function layout({ children }) {

 
  return (
    <>
      <StepperForm  />
      {children}
      <p className=" w-full  p-5 hidden sm:inline-block tracking-wider border-t-[1px] border-b-[1px] border-gray-300 border-solid text-sm  text-[#62646A] ">
        Payments are processed by Blockchain Ethreum Ltd., SkillMesh Limited
      </p>
    </>
  );
}

export default layout;
