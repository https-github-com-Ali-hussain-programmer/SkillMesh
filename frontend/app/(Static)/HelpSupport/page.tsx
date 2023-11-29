"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import FlutterDashOutlinedIcon from "@mui/icons-material/FlutterDashOutlined";
import SafetyCheckOutlinedIcon from "@mui/icons-material/SafetyCheckOutlined";
import MenuItem from "@/Components/helpSupport/MenuItem";
import CategoryItem from "@/Components/helpSupport/CategoryItem";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import contactus from "../../../public/contactus.png";
import Image from "next/image";
import CommunityItem from "@/Components/helpSupport/CommunityItem";
import Link from "next/link";
function HelpSupport() {
  return (
    <div className=" min-h-screen bg-white ">
      <h1 className="text-5xl font-bold py-6 px-14 ">
        <Link href={"/"}>SkillMesh.</Link>
      </h1>
      <div className="flex flex-col items-center w-full  ">
        <h1 className=" text-5xl text-center font-bold py-10 ">
          How can we help you?
        </h1>
        <div className="flex items-center justify-center w-full ">
          <input
            type="text"
            placeholder="Search"
            className="w-[70%] border-sky-400 border-solid border-[2px]  py-[25px] px-[20px] relative rounded-2xl shadow-2xl"
          />
          <SearchIcon className="border-0 text-[50px] text-gray-600 mx-5" />
        </div>

        <div className=" flex items-center gap-4 sm:gap-6 mt-[32px] mb-[150px] px-[10px]">
          <h2 className="text-[15px] sm:text-[20px] md:text-[30px] font-bold">
            Popular searches
          </h2>
          <span className="border-2 sm:py-[10px] sm:px-[14px] md:py-[13px] md:px-[19px] py-[5px] px-[12px] rounded-full text-[12px] font-bold text-white bg-dark-black hover:bg-slate-600 hover:cursor-pointer">
            Order
          </span>
          <span className="border-2 sm:py-[10px] sm:px-[14px] md:py-[13px] md:px-[19px] py-[5px] px-[12px] rounded-full text-[12px] font-bold text-white bg-dark-black hover:bg-slate-600 hover:cursor-pointer">
            Freelancer
          </span>
          <span className="border-2 sm:py-[10px] sm:px-[14px] md:py-[13px] md:px-[19px] py-[5px] px-[12px] rounded-full text-[12px] font-bold text-white bg-dark-black hover:bg-slate-600 hover:cursor-pointer">
            Account
          </span>
        </div>
      </div>

      {/* categorys */}

      <div className="w-full h-fit  md:bg-[#eceff1] p-7 mb-[120px]">
        <h1 className="font-bold text-[20px] md:text-[35px] text-center">
          Search by category
        </h1>
        <div className="flex flex-wrap justify-center flex-row ">
          <CategoryItem
            icon={
              <AccountCircleOutlinedIcon className="text-[70px] m-6 font-[0]" />
            }
            title="Your SkillMesh account"
          />
          <CategoryItem
            icon={
              <LocalMallOutlinedIcon className="text-[70px] m-6 font-[0]" />
            }
            title="Buying on SkillMesh"
          />
          <CategoryItem
            icon={<PaymentOutlinedIcon className="text-[70px] m-6 font-[0]" />}
            title="Payments & withdrawals"
          />
          <CategoryItem
            icon={<ReceiptOutlinedIcon className="text-[70px] m-6 font-[0]" />}
            title="Order management"
          />
          <CategoryItem
            icon={<LocalAtmOutlinedIcon className="text-[70px] m-6 font-[0]" />}
            title="Selling on SkillMesh"
          />
          <CategoryItem
            icon={
              <EventNoteOutlinedIcon className="text-[70px] m-6 font-[0]" />
            }
            title="Gigs"
          />
          <CategoryItem
            icon={
              <FlutterDashOutlinedIcon className="text-[70px] m-6 font-[0]" />
            }
            title="Logo Maker"
          />
          <CategoryItem
            icon={
              <SafetyCheckOutlinedIcon className="text-[70px] m-6 font-[0]" />
            }
            title="Trust & Safety"
          />
        </div>
      </div>

      {/* popular articles */}

      <div className=" w-full  bg-dark-black py-[80px] px-[70px] rounded">
        <h1 className="font-bold text-[35px] text-white pb-4 pl-[14px] mb-[0px]">
          Popular Articles
        </h1>
        <div className="flex justify-between flex-wrap gap-[40px] text-sm">
          <div className="left flex-[1] flex flex-col justify-between gap-[25px]">
            <MenuItem title="How SkillMesh works" />
            <MenuItem title="Buyer FAQs" />
            <MenuItem title="Invoices" />
            <MenuItem title="Find a service and get a quote" />
            <MenuItem title="How to start selling on SkillMesh" />
            <MenuItem title="Showcase your Gig on both Marketplace" />
            <MenuItem title="How to make your SkillMesh Profile stand out" />
            <MenuItem title="Gig Images: General Gig image guidlines" />
          </div>
          <div className="right  flex-[1] flex flex-col justify-between gap-[10px]">
            <MenuItem title="Account and profile settings" />
            <MenuItem title="Payment: Save and remove your payment method" />
            <MenuItem title="Payout methods" />
            <MenuItem title="Cancel an order with the Resolution Centre for customers" />
            <MenuItem title="Taking a Skill Test" />
            <MenuItem title="FAQs for sellers" />
            <MenuItem title="Best practices for new SkillMesh sellers" />
            <MenuItem title="Gig Image: spark up your inspiration" />
          </div>
        </div>
      </div>

      {/* community */}
      <div className="w-full  md:bg-[#eceff1] py-[70px] px-[70px]">
        <h1 className="font-bold text-[30px] md:text-[35px] px-[16px] pb-8">
          Community
        </h1>
        <div className="flex flex-wrap flex-row gap-[20px] text-sm">
          <CommunityItem
            icon={
              <GroupAddOutlinedIcon className="text-[50px] m-4 font-[500px]" />
            }
            title="Community Hub"
            description="Discover opportunities to create meaningful connections and develop your professional growth."
          />

          <CommunityItem
            icon={<ForumOutlinedIcon className="text-[50px] m-4 font-[0]" />}
            title="Forum"
            description="Join the global conversation for sharing tips, best practices, and peer support."
          />

          <CommunityItem
            icon={<BookOutlinedIcon className="text-[50px] m-4 font-[0]" />}
            title="Blog"
            description="Visit to learn about how to build your business or freelancing career."
          />

          <CommunityItem
            icon={<LinkedInIcon className="text-[50px] m-4 font-[0]" />}
            title="LinkedIn"
            description="Follow us for advice, inspiration, and fun!"
          />
        </div>
      </div>

      {/* contact us page */}

      <div className="flex justify-between flex-wrap px-[120px] py-[100px]">
        <div>
          <h1 className="text-[25px] md:text-[35px] font-bold mb-[10px]">
            Can't find what you're looking for?
          </h1>
          <h3 className="text-[25px] mb-[30px] text-gray-400">
            We're here to help.
          </h3>
          <button className="bg-black text-white text-[20px] font-bold px-4 py-2 mb-[30px] md:px-8 md:py-2 rounded-md hover:bg-gray-800 focus:outline-none  focus:border-blue-300">
            Contact us
          </button>
        </div>
        <div>
          <Image className="md:w-[200px]" src={contactus} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HelpSupport;
