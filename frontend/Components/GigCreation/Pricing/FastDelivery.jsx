import React from "react";

const FastDelivery = ({title}) => {
    const noOfDays =[
        "1 Day",
        "2 Days",
        "4 Days",
        "6 Days",
        "8 Days",
        "14 Days",
        "18 Days",
        "25 Days",
    ];
  return (
    <div className="flex flex-row justify-between px-10 py-8">
      <h3 className="text-[18px] font-semibold">{title}</h3>
      <div className="flex gap-5">
        <label htmlFor="" className="text-[18px] py-2 px-3">
          I'll deliver in only
        </label>
        <select className="border-[1px] border-black border-solid py-2 px-3 rounded-2xl  outline-none w-[100px] text-gray-400">
          <option value="Select">Select</option>

          {noOfDays.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <label htmlFor="" className="text-[18px] py-2 px-3">
          for an extra
        </label>
        <input
          type="text"
          className="w-[100px] border-[1px] border-black py-2 px-3 rounded-2xl"
          placeholder="$"
        />
      </div>
    </div>
  );
};

export default FastDelivery;
