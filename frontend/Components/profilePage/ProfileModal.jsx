import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaMask from "../../public/MetaMask.png";
import { Logout } from "../../Api/userApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { clearUserData } from "../../redux/slice/userSlice";
function ProfileModal() {
  const currentUser = useSelector((state) => state.user?.userData);
  const dispatch = useDispatch();
  const router = useRouter();
  const shortAddress = (fullAddress) => {
    const shortenedAddress = `${fullAddress?.substring(
      0,
      10
    )}...${fullAddress?.slice(-10)}`;
    return shortenedAddress;
  };
  const handleLogout = async () => {
    await Logout();
    window.location.replace("/");
    dispatch(clearUserData());
  };

  return (
    <>
      <div className="rounded-[16px] absolute top-20 right-3  bg-white  w-[300px] shadow-lg p-4 px-6  flex flex-col gap-2 border-[1px] border-solid border-[#e2e8f0] ">
        <div className="flex items-center gap-2 ">
          <span className="bg-[#FED7D7] h-[35px] w-[35px] rounded-full flex items-center justify-center">
            <img src={MetaMask.src} alt="MetaMask" className="h-[25px] " />
          </span>
          <div className="flex items-center gap-2 p-1">
            <div className="w-[6px] h-[6px] rounded-full bg-[#46CE7E]"></div>
            <span className="text-[#2f3037] text-sm font-[500] ">Polygon </span>
          </div>
        </div>

        <div className="border-b-[0.5px] border-solid border-[#e2e8f0] flex items-center gap-3 hover:text-[#46CE7E] cursor-pointer py-2 text-[#36383F] text-sm">
          <span>Account :</span>{" "}
          <h1 className="font-[700] text-sm text-[#6c6f7f] break-words">
            {currentUser && shortAddress(currentUser?.address)}
          </h1>
        </div>
        <div className=" hover:text-[#46CE7E] cursor-pointer py-2 text-[#36383F] text-sm border-b-[0.5px] border-solid border-[#e2e8f0]">
          <Link href="/profile"> My Profile</Link>
        </div>
        <div className=" hover:text-[#46CE7E] cursor-pointer py-2 text-[#36383F] text-sm border-b-[0.5px] border-solid border-[#e2e8f0]">
          <Link href="./GigCreation/Overview">
            {currentUser?.isSeller ? "My Gigs" : "Become a Seller"}
          </Link>
        </div>
        {currentUser?.isSeller ? (
          <div className=" hover:text-[#46CE7E] cursor-pointer py-2 text-[#36383F] text-sm border-b-[0.5px] border-solid border-[#e2e8f0]">
            <Link href="/OrderPlaced">Orders</Link>
          </div>
        ) : null}
         <div className=" hover:text-[#46CE7E] cursor-pointer py-2 text-[#36383F] text-sm border-b-[0.5px] border-solid border-[#e2e8f0]">
          <Link href="/projectCompleted">
          Project Completed
          </Link>
        </div>
   

        <div
          onClick={handleLogout}
          className="flex items-center gap-4 hover:text-[#46CE7E] cursor-pointer py-2  text-sm border-b-[0.5px] border-solid border-[#e2e8f0]"
        >
          <span className="text-[#36383F]">Signout </span>{" "}
        </div>
      </div>
    </>
  );
}

export default ProfileModal;
