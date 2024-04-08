import React from "react";
import { TiDelete } from "react-icons/ti";


const Card = () => {
  return (
    <div className="w-11/12 relative  flex  mx-[55px] mt-12 rounded-2xl border-[1px] shadow-md hover:shadow-xl">
      <TiDelete className="absolute right-[15px] mt-1 text-[28px] text-red-800 hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
      <div className="px-[20px] py-[10px] flex-1 mt-4">
        <h3 className="text-[18px] font-semibold py-[8px]">
          Dispute information
        </h3>
        <div className="flex gap-[10px] px-5 py-1">
          <h2 className="font-semibold">Problem Type :</h2>
          <p className="text-slate-600">Incomplete requirments</p>
        </div>
        <div className="flex gap-[10px] px-5 py-1">
          <h2 className="font-semibold">Category :</h2>
          <p className="text-slate-600">Web Development</p>
        </div>
        <div className="flex gap-[10px] px-5 py-1">
          <h2 className="font-semibold">Sub Field :</h2>
          <p className="text-slate-600">Frontend Development</p>
        </div>
        <div className="px-5 py-1">
          <h2 className="font-semibold">Explanation : </h2>
          <p className="px-8 italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            repudiandae quod maiores consectetur quia quos eum quas assumenda
            iusto temporibus!
          </p>
        </div>
      </div>

      <div className="flex-1 mt-4">
        <h3 className="text-[18px] font-semibold py-[8px] mt-2">Gig information</h3>

        <div className="flex gap-[10px] px-5 py-1">
          <h2 className="font-semibold">Buyer Name :</h2>
          <p className="text-slate-600">Mateen Shahbaz</p>
        </div>
        <div className="flex gap-[10px] px-5 py-1">
          <h2 className="font-semibold">Seller Name :</h2>
          <p className="text-slate-600">Muhammad Mubeen</p>
        </div>
        <div className="flex gap-[10px] px-5 py-1">
          <h2 className="font-semibold">Seller Id Link :</h2>
          <a href="#" className="text-blue-950 font-semibold">http://skillmesh/webDevelopment/Mateen</a>
        </div>
        <div className="flex gap-[10px] px-5 py-1">
          <h2 className="font-semibold">Package :</h2>
          <p className="text-slate-600">Premium</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
