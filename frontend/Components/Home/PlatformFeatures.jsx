"use client";
import React, { useState } from "react";
import { FeatureList, Modal } from "..";
import img1 from "../../public/selling.webp";
import Image from "next/image";
function PlatformFeatures() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="  my-60 ">
        <div className="  bg-white  text-black px-8 py-7 rounded-lg   container 2xl:w-[1400px]  shadow-lg items-center gap-10  flex-col flex lg:flex-row ">
          <div className="flex flex-col gap-[20px] flex-1  ">
            <h1 className="font-bold text-3xl">
              A Whole World of freelance at your fingertips
            </h1>
            <FeatureList
              title={" The best for every project"}
              desc={
                "Find the right service for every price point. No hourly rates, just project-based pricing."
              }
            />
            <FeatureList
              title={"Get quality work done quickly"}
              desc={
                " Hand your project over to a talented freelancer in minutes, get long-lasting results."
              }
            />
            <FeatureList
              title={"Pay when you're happy"}
              desc={
                "   Upfront quotes mean no surprises. Payments only get released when you approve."
              }
            />
            <FeatureList
              title={"Count on 24/7 support"}
              desc={
                " Our round-the-clock support team is available to help anytime,anywhere."
              }
            />
          </div>
          <div className="lg:w-[50%]  w-full md:w-[85%]   ">
            <Image
              onClick={openModal}
              src={img1}
              alt="Network problem"
              className="w-full h-full object-cover rounded-md"
            />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <video
                src="./video.mov"
                controls
                autoPlay
                loading={"lazy"}
                className="w-[720px]  rounded-md "
              ></video>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlatformFeatures;
