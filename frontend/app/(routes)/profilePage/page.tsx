"use client";
import React from "react";
import Image from "next/image";
import people from "../../public/people-01.png";
import seller from '../../public/seller.jpg';
import gigs1 from '../../public/gig1.jpg'
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import Desc from "@/Components/profilePage/Desc";
import Language from "@/Components/profilePage/Language";
import Skills from "@/Components/profilePage/Skills";
import Education from "@/Components/profilePage/Education";
import Certification from "@/Components/profilePage/Certification";
import AddCircleIcon from '@mui/icons-material/AddCircle';
const ProfilePage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-row justify-between gap-[70px]">

      {/* profile page */}

      <div className="left flex-[1]">
        <div className=" bg-white mt-[60px] ml-[20px] border-[1px] border-gray-300 flex flex-col items-center py-6">
          <Image className="my-[35px]" src={people} alt="" />
          <div className="flex flex-row gap-2 items-center">
            <h1 className="text-[27px] font-[650] hover:cursor-pointer hover:underline">
              Your display name
            </h1>
            <CreateOutlinedIcon className="text-[20px] mt-2 text-gray-400 hover:cursor-pointer" />
          </div>
          <h1 className="text-gray-400 py-1 text-[23px]">@mateen_shahbaz</h1>
          <CreateOutlinedIcon className="text-[20px] mt-1 text-gray-400 hover:cursor-pointer" />
          <button className="max-w-[450px] w-full text-[18px] font-semibold border-[1px] py-2 mt-4 rounded-md border-current mb-8 hover:bg-gray-400 hover:border-gray-400 hover:text-white duration-500">
            Preview SkillMesh Profile
          </button>
          <div className="flex flex-row justify-between gap-[165px] py-4 border-t-2 pt-6">
            <LocationOnIcon />
            <h3 className="">From</h3>
            <h3>Pakistan</h3>
          </div>
          <div className="flex flex-row justify-between gap-[130px] py-4 ">
            <PersonIcon />
            <h3>Member since</h3>
            <h2>Nov 2023</h2>
          </div>
        </div>



        {/* add bio data */}

        <div className=" bg-white mt-[35px] ml-[20px]  py-6 border-[1px] border-gray-300">
          <Desc />
          <Language />  
          <Skills />
          <Education />
          <Certification />
        </div>
      </div>

      {/* GIG Part */}

      <div className="right flex-[2]">

        {/* become a seller */}

        <div className="hidden bg-white mt-[60px] h-[560px] mr-6  flex-col justify-center items-center border-[1px] border-gray-300">
            <Image src={seller} alt="" className="h-[200px] w-[400px] "/>
            <h1 className="text-[26px] font-semibold">Ready to earn on your own terms?</h1>
            <button className="bg-dark-blue text-white py-3 px-7 mt-5 rounded-md font-semibold hover:shadow-2xl">Become a Seller</button>
        </div>


        {/* gig category */}

        <div className="mr-6 mt-[60px] ">
          <div className="w-full bg-white">
            <button className="py-5 ml-10 px-2 border-b-[3px] border-dark-blue text-[18px] font-semibold">ACTIVE GIGS</button>
          </div>
          <div className="gigs mt-4 flex flex-row flex-wrap gap-9">
            <div className=" w-[300px] h-[350px] bg-white  hover:cursor-pointer hover:shadow-xl">
              <Image src={gigs1} alt="" />
              <h3 className="pt-4 py-1 px-3 font-semibold">Today i made this project based on web 3.0. Uisng React, NextJs, Tailwind, NodeJs</h3>
              <h3 className="px-3 py-3 ml-[145px]">STARTING AT<span className="font-bold text-[18px]">$78</span></h3>
            </div>
            <div className=" w-[300px] h-[350px] bg-white  hover:cursor-pointer hover:shadow-xl flex flex-col justify-center items-center">
              <AddCircleIcon className="text-[70px]"/>
              <h3 className="text-[18px] font-semibold py-4">create a new Gig</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
