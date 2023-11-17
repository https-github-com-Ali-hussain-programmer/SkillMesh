"use client";
import React, { use, useState } from "react";
import Image from "next/image";
import starimg from "../../../public/star.png";
import Slider from "infinite-react-carousel";
import like from "../../../public/like.png";
import disLike from "../../../public/dislike.png";
import clock from "../../../public/clock.png";
import recycle from "../../../public/recycle.png";
import { IoMdInformationCircleOutline } from "react-icons/io";
import greencheck from "../../../public/greencheck.png";
import { useSearchParams } from "next/navigation";
import { gigs } from "@/utils/data";
import { AiOutlineHome } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { packages } from "../../../utils/data";
const Gig = () => {
  const search = useSearchParams();
  const [showFunctionalities, setShowFunctionalities] = useState(false);
  const [packagesData, setpackagesData] = useState(packages.Basic);
  const id = search.get("id");
  const data = gigs.find((gig) => gig.id === id) || {};
  const handleShow = () => {
    setShowFunctionalities(!showFunctionalities);
  };
  const handlePackages = (packageName) => {
    if (packageName.toLowerCase() === "basic") {
      setpackagesData(packages.Basic);
    } else if (packageName.toLowerCase() === "standard") {
      setpackagesData(packages.Standard);
    } else if (packageName.toLowerCase() === "premium") {
      setpackagesData(packages.Premium);
    }
  };

  return (
    <div className="mb-[300px] mt-[70px] ">
      <div className="container  2xl:max-w-[1400px]   px-[30px] py-[0px] flex gap-[50px]">
        <div className="flex-[2] flex flex-col gap-6">
          <div className=" text-[#404145] text-sm flex items-center gap-2">
            <AiOutlineHome /> <span>/</span> <span>Gigs</span> <span>/</span>
            <span>{data?.category}</span>
            <span>/</span>
            {data?.subcategory}
          </div>

          <h1 className="text-3xl font-bold   text-[#404145] break-words  tracking-wide">
            {data?.title}
          </h1>

          <div className="flex items-center gap-[10px]">
            <img
              className="w-[32px] h-[32px] rounded-full object-cover"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span className="text-base font-medium">{data?.username}</span>
            <div className="flex items-center gap-[5px]">
              <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
              <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
              <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
              <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
              <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
              <span className="text-[14px] font-bold text-yellow-400">5</span>
            </div>
          </div>
          <div>
            {" "}
            <Slider
              slidesToShow={1}
              autoplaySpeed={2500}
              autoplay={true}
              autoplayScroll={1}
              arrows={false}
              arrowsScroll={1}
              className="bg-gray-200"
            >
              <img
                className="max-h-[450px] object-cover"
                src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Pic1"
              />
              <img
                className="max-h-[450px] object-cover"
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Pic2"
              />
              <img
                className="max-h-[450px] object-cover"
                src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Pic3"
              />
            </Slider>
          </div>

          <h2 className="font-semibold text-2xl text-[#404145]">
            About This Gig
          </h2>
          <p className="font-light leading-[25px] text-gray-500">
            {data?.about}
          </p>

          <div className="mt-[50px] flex flex-col gap-[20px]">
            <h2 className="text-gray-700 text-2xl">About The Seller</h2>
            <div className="flex items-center gap-[20px]">
              <img
                className="w-[100px] h-[100px] rounded-full object-cover"
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info flex flex-col gap-[10px]">
                <span>{data?.username}</span>
                <div className="stars flex items-center gap-[5px]">
                  <Image
                    className="h-[14px] w-[14px]"
                    src={starimg}
                    alt="star"
                  />
                  <Image
                    className="h-[14px] w-[14px]"
                    src={starimg}
                    alt="star"
                  />
                  <Image
                    className="h-[14px] w-[14px]"
                    src={starimg}
                    alt="star"
                  />
                  <Image
                    className="h-[14px] w-[14px]"
                    src={starimg}
                    alt="star"
                  />
                  <Image
                    className="h-[14px] w-[14px]"
                    src={starimg}
                    alt="star"
                  />
                  <span className="text-[14px] font-bold text-yellow-400">
                    5
                  </span>
                </div>
                <button className="bg-white rounded-[5px] border border-gray-300 p-[6px]">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="box border border-gray-300 rounded-[5px] p-[20px] mt-[20px]">
              <div className="items flex justify-between flex-wrap">
                <div className="item w-[300px] flex flex-col gap-[10px] mb-[20px]">
                  <span className="title font-light">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item flex justify-between flex-wrap">
                  <span className="title font-light">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item flex justify-between flex-wrap">
                  <span className="title font-light">Avg. response time</span>
                  <span className="desc font-light">4 hours</span>
                </div>
                <div className="item flex justify-between flex-wrap">
                  <span className="title font-light">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item flex justify-between flex-wrap">
                  <span className="title  font-light">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr className="border-[0.5px] border-gray-300 mt-[20px] mb-[20px] h-0" />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>

          <div className="reviews mt-[50px]">
            <h2>Reviews</h2>
            <div className="item flex flex-col gap-[20px] my-[0] mx-[20px]">
              <div className="user flex items-center">
                <img
                  className="h-[50px] w-[50px] rounded-full"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country flex items-center gap-[10px] text-gray-500">
                    <img
                      className="w-[20px]"
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <span className="text-[14px] font-bold text-yellow-400">5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful flex items-center gap-[10px]">
                <span>Helpful?</span>
                <Image className="w-[14px]" src={like} alt="" />
                <span>Yes</span>
                <Image className="w-[14px]" src={disLike} alt="" />
                <span>No</span>
              </div>
            </div>
            <hr className="border-[0.5px] border-gray-300 mt-[20px] mb-[20px] h-0" />
            <div className="item flex flex-col gap-[20px] my-[0] mx-[20px]">
              <div className="user flex items-center">
                <img
                  className="h-[50px] w-[50px] rounded-full"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country flex items-center gap-[10px] text-gray-500">
                    <img
                      className="w-[20px]"
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <span className="text-[14px] font-bold text-yellow-400">5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful flex items-center gap-4">
                <span>Helpful?</span>
                <Image className="w-[14px]" src={like} alt="" />
                <span>Yes</span>
                <Image className="w-[14px]" src={disLike} alt="" />
                <span>No</span>
              </div>
            </div>
            <hr className="border-[0.5px] border-gray-300 mt-[20px] mb-[20px] h-0" />
            <div className="item flex flex-col gap-[20px] my-[0] mx-[20px]">
              <div className="user flex items-center">
                <img
                  className="h-[50px] w-[50px] rounded-full"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country flex items-center gap-[10px] text-gray-500">
                    <img
                      className="w-[20px]"
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <Image className="h-[14px] w-[14px]" src={starimg} alt="star" />
                <span className="text-[14px] font-bold text-yellow-400">5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful flex items-center gap-[10px]">
                <span>Helpful?</span>
                <Image className="w-[14px]" src={like} alt="" />
                <span>Yes</span>
                <Image className="w-[14px]" src={disLike} alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right flex-[1]  border-[1px] border-solid border-[#dadbdd] flex flex-col gap-[20px] h-max max-h-[500px] sticky top-[150px]">
          <div className="flex justify-between">
            <div
              onClick={() => handlePackages("Basic")}
              className={`${
                packagesData.name === "Basic" ? "black_border" : null
              } cursor-pointer bg-[#fafafa] p-[16px] text-lg flex-1 font-bold border-r-[1px] text-center border-b-[1px] border-solid border-[#dadbdd] text-[#74767e]`}
            >
              Basic
            </div>
            <div
              onClick={() => handlePackages("Standard")}
              className={`${
                packagesData.name === "Standard" ? "black_border" : null
              } cursor-pointer bg-[#fafafa] p-[16px] text-lg flex-1 font-bold border-b-[1px] text-center border-r-[1px] border-solid border-[#dadbdd] text-[#74767e]`}
            >
              Standard
            </div>
            <div
              onClick={() => handlePackages("Premium")}
              className={`${
                packagesData.name === "Premium" ? "black_border" : null
              }  cursor-pointer bg-[#fafafa] p-[16px] text-lg font-bold flex-1 border-b-[1px] text-center text-[#74767e]`}
            >
              Premium
            </div>
          </div>
          <div className="px-[20px] py-[10px] pt-[6px] flex flex-col gap-5">
            <div className="flex flex-col">
              {" "}
              <h1 className="text-2xl whitespace-nowrap font-bold  flex items-center gap-2">
                <span>PKR {packagesData.price}</span>
                <span className="text-[#74767e] text-[16px] font-medium tooltip">
                  <IoMdInformationCircleOutline />
                </span>
              </h1>{" "}
              <p className="text-[#404145] font-medium tracking-wide">
                Subscribe up to 20% with{" "}
                <span className="text-[#026A5D]">Subscribe to Save</span>
              </p>
            </div>

            <p className="text-[#74767e] text-lg font-medium">
              <span className="text-[#222325] font-bold text-[18px]">
                {packagesData.name}
              </span>
              - {packagesData.desc}
            </p>
            <div className="flex flex-col">
              <div className=" gap-6 flex items-center">
                <div className="flex items-center gap-2">
                  <img src={clock.src} alt="no error" className="h-4 w-4" />{" "}
                  <span className="font-bold text-sm">
                    {" "}
                    {packagesData.delivery} Days Delivery
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={recycle.src} alt="no error" className="h-4 w-4" />
                  <span className="font-bold text-sm">
                    {packagesData.Revision} Revisions
                  </span>
                </div>
              </div>
              <div className=" justify-between p-2 my-3 flex items-center">
                <span className={`text-[#404145] text-sm font-bold`}>
                  What's Included
                </span>
                <span
                  onClick={handleShow}
                  className={`${
                    showFunctionalities ? "transform rotate-180 " : null
                  }text-[#404145] text-sm font-extrabold cursor-pointer`}
                >
                  <SlArrowDown />
                </span>
              </div>
              {showFunctionalities ? (
                <div className="flex flex-col gap-3 ">
                  {packagesData.functionalities.map((p, index) => {
                    return (
                      <div key={index} className="flex gap-2">
                        <span className="text-xl">
                          <TiTick />
                        </span>
                        <span className="text-[15px] text-[#95979D]">{p}</span>
                      </div>
                    );
                  })}
                </div>
              ) : null}
              <div></div>
            </div>

            <button className="flex items-center justify-between py-2 px-4 bg-black text-white outline-none rounded-md text-lg">
              <span className="flex-1 text-center">Continue</span>
              <FaArrowRightLong />
            </button>
            <p className="text-[#222325] text-center text-[16px]">
              Compare Packages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gig;
