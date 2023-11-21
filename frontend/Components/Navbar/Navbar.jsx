"use client";
import { motion } from "framer-motion";
import * as React from "react";
import { navVariants } from "../../utils/motion";
import { useCallback, useState, useRef, useEffect } from "react";
import NavbarDrawer from "./NavbarDrawer";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { LiaAngleDownSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";
import ActiveLinks from "../Shared/ActiveLinks";
import CategoryModal from "./CategoryModal";
import Ordersmodal from "./Ordersmodal";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Badge from "../Shared/Badge";
import Whishlistmodal from "./Whishlistmodal";
const Navbar = () => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [OrderShow, setOrderShow] = useState(false);
  const [Whishlist, setWhishlist] = useState(false);
  const orderRef = useRef(null);
  const WhishlistRef = useRef(null);
  const WhishlistButtonRef = useRef(null);
  const buttonRef = useRef(null);
  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen]);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        orderRef?.current?.contains(e.target) ||
        WhishlistRef?.current?.contains(e.target) ||
        buttonRef?.current?.contains(e.target) ||
        WhishlistButtonRef?.current?.contains(e.target)
      ) {
        return;
      }

      setOrderShow(false);
      setWhishlist(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sm:p-4  relative  ${
        pathname === "/"
          ? "bg-dark-black text-white  "
          : "text-black shadow-md z-50"
      }`}
    >
      <div className="absolute w-[40%] inset-0  gradient-01  z-10" />
      <div
        className={`flex  container 2xl:w-[1400px] justify-between items-center  gap-3  `}
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

        <div className="font-bold text-[34px] z-50 hidden sm:inline-block  ">
          <ActiveLinks url={"/"} pathname={""}>
            SkillMesh.
          </ActiveLinks>
        </div>

        {pathname !== "/" ? (
          <div className="lg:w-[25%] z-10">
            <input
              type="text"
              placeholder="Search for services..."
              className="text-black w-full px-4 py-3  outline-none border border-solid border-black focus:ring ring-sky-400   focus:border-none rounded-md"
            />
          </div>
        ) : null}

        <div className="flex items-center font-medium  justify-between  sm:w-[35%] w-[20%]  ">
          <span className="hidden md:inline-block category-link">
            <ActiveLinks url={"/Categories"} pathname={pathname}>
              Category
            </ActiveLinks>{" "}
          </span>
          <div className="font-normal absolute md:left-[50px] mx-auto top-[64px] z-50 CategoryModal">
            <CategoryModal />
          </div>

          <button
            className="z-50"
            ref={buttonRef}
            onClick={() => {
              setOrderShow(!OrderShow);
            }}
          >
            <Badge
              Icon={FaShoppingCart}
              count={2}
              color={`${pathname === "/" ? "text-white" : "text-blue-600"}`}
              size={"text-xl"}
            />
          </button>
          {OrderShow && (
            <div
              ref={orderRef}
              className="absolute top-16  right-10 md:right-20 z-10 h-[50%]"
            >
              <Ordersmodal />
            </div>
          )}
          <span
            className="cursor-pointer"
            onClick={() => setWhishlist(!Whishlist)}
            ref={WhishlistButtonRef}
          >
            <Badge
              Icon={BsFillSuitHeartFill}
              count={2}
              color={`${pathname === "/" ? "text-white" : "text-blue-600"}`}
              size={" text-xl"}
            />
          </span>
          {Whishlist && (
            <div
              ref={WhishlistRef}
              className="absolute top-16  right-10 md:right-20 z-10 h-[50%]"
            >
              <Whishlistmodal />
            </div>
          )}

          <span className="hidden lg:inline-block ">
            <ActiveLinks url={"/About"} pathname={pathname}>
              About
            </ActiveLinks>
          </span>
          <button
            className={` hidden sm:inline-block  py-2 px-2 border border-white rounded-md  ${
              pathname !== "/" ? "bg-blue-600 text-white" : null
            }  transition-all   duration-200 `}
          >
            Connect
          </button>
        </div>
        <NavbarDrawer onClose={toggleDrawer} isOpen={isDrawerOpen} />
      </div>
    </nav>
  );
};

export default Navbar;