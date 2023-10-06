"use client";
import { motion } from "framer-motion";
import * as React from "react";
import { navVariants } from "../../utils/motion";
import { useCallback, useState } from "react";
import NavbarDrawer from "./NavbarDrawer";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { LiaAngleDownSolid } from "react-icons/lia";
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen]);
  return (
    <nav className={` py-6 relative bg-dark-black text-white`}>
      <div className="absolute w-[50%] inset-0  gradient-01" />
      <div
        className={`container mx-auto flex justify-between items-center gap-8`}
      >
        <div
          className={`z-50 text-4xl text-white sm:hidden`}
          onClick={() => {
            toggleDrawer();
          }}
        >
          <HiOutlineBars3CenterLeft />
        </div>

        <div className="font-bold text-[34px] z-10 ">
          <span>SkillMesh</span>
          <span className="text-onlineGreen ">.</span>
        </div>

        <div className="hidden lg:hidden  sm:inline-block ">
          <input
            type="text"
            placeholder="Search for services..."
            className="text-lightGrey w-full px-4 py-1 outline-none border-2 border-solid border-borderGrey rounded-md "
          />
        </div>

        <div className="flex lg:gap-8 items-center font-medium  ">
          <span className="hidden  underlined lg:flex items-center gap-2 ">
            Category <LiaAngleDownSolid/>{" "}
          </span>
          <span className="hidden lg:inline-block   underlined">About</span>
          <span className="hidden  lg:flex items-center gap-2  underlined">
            Orders
            <LiaAngleDownSolid/>
          
          </span>
          <span className="hidden lg:inline-block  underlined">
            Connect Wallet
          </span>
          <span className="hidden lg:inline-block  underlined">
            Become a Seller
          </span>
        </div>
        <NavbarDrawer onClose={toggleDrawer} isOpen={isDrawerOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
