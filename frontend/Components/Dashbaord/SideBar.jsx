import React from "react";
import { BiHome, BiMessage, BiStats, BiTask } from "react-icons/bi";
import { MdOutlineCallSplit } from "react-icons/md";


const SideBar = () => {
  return (
    <div className="menu flex flex-col gap-[1.3rem] h-[94vh]">
      <div className="logo text-center p-[20px] text-[#27374d] items-center flex">
        
        <a href="/"><h2 className="text-[25px] font-bold text-dark-black">DashBoard</h2></a>
      </div>
      <div className="menu--list flex flex-col gap-[20px]">
        <a
          href="#"
          className="item flex  gap-[20px] items-center text-[1.1rem] decoration-black font-[600] p-[10px] rounded-lg text-dark-black  transition ease-in-out hover:bg-[#27374d] hover:text-[#dde6ed] "
        >
          <MdOutlineCallSplit className="text-[1.4rem]" />
          <p className="">Dispute Calls</p>
        </a>
        <a
          href="#"
          className="item flex  gap-[20px] items-center text-[1.1rem] decoration-black font-[600] p-[10px] rounded-lg text-dark-black transition ease-in-out hover:bg-[#27374d] hover:text-[#dde6ed]"
        >
          <BiMessage className="text-[1.4rem]" />
          <p className="">Message </p>
        </a>
        <a
          href="#"
          className="item flex gap-[20px] items-center text-[1.1rem] decoration-black font-[600] p-[10px] rounded-lg text-dark-black transition ease-in-out hover:bg-[#27374d] hover:text-[#dde6ed]"
        >
          <BiStats className="text-[1.4rem]" />
           <p className="">Stats</p>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
