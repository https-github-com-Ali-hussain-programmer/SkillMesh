"use client";
import { motion } from "framer-motion";
import * as React from "react";
import { navVariants } from "../../utils/motion";
import { useCallback, useState } from "react";
import NavbarDrawer from "./NavbarDrawer";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { LiaAngleDownSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";
import ActiveLinks from "../Shared/ActiveLinks";
import CategoryModal from "./CategoryModal";
import Ordersmodal from "./Ordersmodal";

const Navbar = () => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [OrderShow, setOrderShow] = useState(false);
  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen]);
  return (
    <nav
      className={`p-4 relative  ${
        pathname === "/" ? "bg-dark-black text-white" : "text-black shadow-md"
      }`}
    >
      <div className="absolute w-[50%] inset-0  gradient-01" />
      <div
        className={`container mx-auto flex justify-between items-center gap-8`}
      >
        <div
          className={`z-50 text-4xl  sm:hidden ${
            pathname === "/" ? " text-white" : "text-black"
          }`}
          onClick={() => {
            toggleDrawer();
          }}
        >
          <HiOutlineBars3CenterLeft />
        </div>

        <div className="font-bold text-[34px] z-10 ">
          <ActiveLinks url={"/"} pathname={""}>
            SkillMesh.
          </ActiveLinks>
        </div>

        {pathname !== "/" ? (
          <div className="lg:w-[25%] z-10">
            <input
              type="text"
              placeholder="Search for services..."
              className="text-black w-full px-4 py-1 outline-none border-none focus:ring ring-sky-400 border-2 rounded-md"
            />
          </div>
        ) : null}

        <div className="flex sm:gap-10 items-center font-medium  ">
          <span className="hidden md:inline-block category-link">
            <ActiveLinks url={"/category"} pathname={pathname}>
              Category
            </ActiveLinks>{" "}
          </span>
          <div className="font-normal absolute md:left-[50px] mx-auto top-[64px] z-50 CategoryModal">
            <CategoryModal />
          </div>
          <span className="hidden lg:inline-block ">
            <ActiveLinks url={"/About"} pathname={pathname}>
              About
            </ActiveLinks>
          </span>
          <button className="z-50"
            onClick={() => {
        
              setOrderShow(!OrderShow);
            }}
          >
            Orders
          </button>
          {OrderShow && (
            <div className="absolute top-16  right-10 md:right-20 z-10 h-[50%]">
          
              <Ordersmodal />
            </div>
          )}
          <button className="hidden sm:inline-block  py-3">Messages</button>
          <button className="hidden sm:inline-block  py-3">Connect</button>
        </div>
        <NavbarDrawer onClose={toggleDrawer} isOpen={isDrawerOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
