"use client";
import React from "react";
import Image from "next/image";
import seller from "../../../public/seller.jpg";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import Desc from "@/Components/profilePage/Desc";
import Language from "@/Components/profilePage/Language";
import Skills from "@/Components/profilePage/Skills";
import Education from "@/Components/profilePage/Education";
import Certification from "@/Components/profilePage/Certification";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ProfileGig from "../../../Components/profilePage/ProfileGig";
import { useSearchParams } from "next/navigation";
import { CurrentUser, Users } from "../../../utils/data";

const ProfilePage = () => {
  const id = useSearchParams().get("id");
  const LoggedUserId = CurrentUser?.userid;
  var profileData=CurrentUser;


    if (id !== LoggedUserId) {
      profileData= Users.find((d) => d.userid == id);
     
    }


  return (
    <div className=" min-h-screen bg-gray-200 pt-[30px] pb-[200px] px-5">
      <div className="  flex flex-col md:flex-row gap-10  ">
        <div className="flex-1  flex flex-col gap-14 items-center ">
          <div className="w-full bg-white border-[1px] border-gray-300 flex flex-col items-center  p-8">
            <img
              className="object-fill  h-[110px] w-[110px] rounded-full border-4 border-green-500 border-solid "
              src={profileData?.profileImg}
              alt="Error"
            />
            <div className="flex flex-row gap-2 items-center">
              <h1 className="text-[20px] font-[600] hover:cursor-pointer hover:underline">
                {profileData?.username}
              </h1>
              <CreateOutlinedIcon className="text-[16px] mt-2 text-gray-400 hover:cursor-pointer" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-gray-400 py-1 text-[20px]">
                @{profileData?.username}
              </h1>
              <CreateOutlinedIcon className="text-[20px] mt-1 text-gray-400 hover:cursor-pointer" />
            </div>

            <button className=" w-full text-[14px] font-semibold border-[1px] py-2 mt-4 rounded-md border-current mb-8 hover:bg-gray-400 hover:border-gray-400 hover:text-white duration-500">
              Preview SkillMesh Profile
            </button>
            <div className=" border-t border-gray-300 flex flex-row justify-between  w-full py-4 pt-5">
              <LocationOnIcon />
              <h3 className="">From</h3>
              <h3> {profileData?.country}</h3>
            </div>
            <div className="flex flex-row justify-between  w-full py-4 ">
              <PersonIcon />
              <h3>Member since</h3>
              <h2>{profileData?.memberSince}</h2>
            </div>
          </div>
          <div className="w-full bg-white py-5 border-[1px] border-gray-300 text-sm">
            <Desc desc={profileData?.desc} />
            <Language languages={profileData?.languages} />
            <Skills skills={profileData?.skills} />
            <Education education={profileData?.education} />
            <Certification certifications={profileData?.certifications} />
          </div>
        </div>
        {profileData?.gigs?.length !== 0 ? (
          <div className="md:w-[65%] w-full flex flex-col">
            <div className=" bg-white">
              <button className="py-5 ml-10 px-2 border-b-[3px] border-dark-blue text-[18px] font-semibold">
                ACTIVE GIGS
              </button>
            </div>
            <div className="flex-wrap mt-4 items-center flex  gap-5">
              {profileData?.gigs?.map((g, index) => {
                return <ProfileGig key={index} {...g} />;
              })}

              <div className=" w-[300px] h-[384px] bg-white  hover:cursor-pointer hover:shadow-xl flex flex-col justify-center items-center">
                <AddCircleIcon className="text-[70px]" />
                <h3 className="text-[18px] font-semibold py-4">
                  create a new Gig
                </h3>
              </div>
            </div>
          </div>
        ) : (
          <div className=" md:w-[65%] w-full h-full">
            <div className=" p-[77px] bg-white flex  flex-col justify-center items-center border-[1px] border-gray-300">
              <Image
                src={seller}
                alt=""
                className="h-[200px] w-[400px] shrink-0 sm:shrink  "
              />
              <h1 className="text-[26px] font-semibold">
                Ready to earn on your own terms?
              </h1>
              <button className="bg-dark-blue text-white py-3 px-7 mt-5 rounded-md font-semibold hover:shadow-2xl">
                Become a Seller
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
