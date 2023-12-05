"use client";
import * as React from "react";
import { useCallback, useState, useRef, useEffect } from "react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import {
  ActiveLinks,
  Whishlistmodal,
  Badge,
  Ordersmodal,
  CategoryModal,
  NavbarDrawer,
} from "../../Components";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { favouritesList } from "@/redux/slice/wishlistSlice";

const Navbar = () => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [OrderShow, setOrderShow] = useState(false);
  const [Whishlist, setWhishlist] = useState(false);
  const Favourites = useSelector(favouritesList);
  const orderRef = useRef(null);
  const WhishlistRef = useRef(null);
  const WhishlistButtonRef = useRef(null);
  const buttonRef = useRef(null);
  const order= useSelector((state) => state.orderlist.orderPlaced);
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
      className={`py-4 relative ${
        pathname === "/"
          ? "bg-dark-black text-white  "
          : "text-black shadow-md z-50"
      }`}
    >
      <div
        className={`  px-7 flex container 2xl:w-[1400px] justify-between items-center  gap-3  `}
      >
        <div
          className={` text-4xl  sm:hidden ${
            pathname === "/" ? " text-white" : "text-black"
          }`}
          onClick={() => {
            toggleDrawer();
          }}
        >
          <HiOutlineBars3CenterLeft />
        </div>

        <div className="font-bold text-[34px]  hidden sm:inline-block  ">
          <ActiveLinks url={"/"} pathname={""}>
            SkillMesh.
          </ActiveLinks>
        </div>

        {pathname !== "/" ? (
          <div className="lg:w-[25%] ">
            <input
              type="text"
              placeholder="Search for services..."
              className="text-black w-full px-4 py-3  outline-none border border-solid border-black focus:ring ring-sky-400   focus:border-none rounded-md"
            />
          </div>
        ) : null}

        <div className="flex items-center font-medium  justify-between  sm:w-[35%] w-[20%]  ">
          <span className="hidden md:inline-block category-link text-[17px]">
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
              setWhishlist(false);
            }}
          >
            <Badge
              Icon={FaShoppingCart}
              count={order?.length}
              color={`${pathname === "/" ? "text-white" : "text-blue-600"}`}
              size={"text-xl"}
            />
          </button>
          {OrderShow && (
            <div
              ref={orderRef}
              className="absolute top-16  right-10 md:right-20 z-10 h-[50%]  2xl:right-[120px] 3xl:right-[350px]"
            >
              <Ordersmodal />
            </div>
          )}
          <span
            className="cursor-pointer"
            onClick={() => {
              setWhishlist(!Whishlist);
              setOrderShow(false);
            }}
            ref={WhishlistButtonRef}
          >
            <Badge
              Icon={BsFillSuitHeartFill}
              count={Favourites?.length}
              color={`${pathname === "/" ? "text-white" : "text-blue-600"}`}
              size={" text-xl"}
            />
          </span>
          {Whishlist && (
            <div
              ref={WhishlistRef}
              className="absolute top-16  right-10 md:right-20 z-10 h-[50%] 2xl:right-[120px] 3xl:right-[350px]"
            >
              <Whishlistmodal />
            </div>
          )}

          <span className="hidden lg:inline-block text-[17px]">
            <ActiveLinks url={"/About"} pathname={pathname}>
              About
            </ActiveLinks>
          </span>
          <button
            className={`  hidden sm:inline-block  py-2 px-2  rounded-md  ${
              pathname !== "/" ? "bg-blue-600 text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:border-black hover:border-[1px]"  : "connect"
            }  `}
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
