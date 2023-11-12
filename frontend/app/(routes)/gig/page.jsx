"use client";

import React from "react";
import Image from "next/image";
import starimg from "../../../public/star.png";
import Slider from "infinite-react-carousel";
import like from "../../../public/like.png";
import disLike from "../../../public/dislike.png";
import clock from "../../../public/clock.png";
import recyle from "../../../public/recycle.png";
import greencheck from "../../../public/greencheck.png";
import { useSearchParams } from "next/navigation";
import { gigs } from "@/utils/data";

const Gig = () => {
  const search = useSearchParams();
  const id = search.get("id");
  const data = gigs.find((gig) => gig.id === id) || {};
  return (
    <div className="mb-40 mt-20">
      <div className="container mx-auto px-[30px] py-[0px] flex gap-[50px]">
        <div className="flex-[2] flex flex-col gap-[20px]">
          <span className="font-light uppercase text-xs text-gray-500">
            {" "}
            SkillMesh {">"} {data?.category} {">"}{" "}
          </span>
          <h1 className="text-[33px]">{data?.title}</h1>

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
              className="max-h-[500px] object-contain"
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Pic1"
            />
            <img
              className="max-h-[500px] object-contain"
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Pic2"
            />
            <img
              className="max-h-[500px] object-contain"
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Pic3"
            />
          </Slider>
          <h2 className="font-normal">About This Gig</h2>
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

        <div className="right flex-[1] border border-gray-300 p-[20px] rounded-[5px] flex flex-col gap-[20px] h-max max-h-[500px] sticky top-[150px]">
          <div className="price flex items-center justify-between">
            <h3 className="font-light">1 AI generated image</h3>
            <h2 className="font-medium">$ 59.99</h2>
          </div>
          <p className="text-gray-500 mx-[10px] my-0">
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details flex items-center justify-between text-[14px]">
            <div className="item flex items-center gap-[10px]">
              <Image className="w-[20px]" src={clock} alt="" />
              <span>2 days Delivery</span>
            </div>
            <div className="item flex items-center gap-[10px]">
              <Image className="w-[20px]" src={recyle} alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item flex items-center gap-[10px] font-light text-gray-500 mb-[5px]">
              <Image className="w-[14px]" src={greencheck} alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item flex items-center gap-[10px] font-light text-gray-500 mb-[5px]">
              <Image className="w-[14px]" src={greencheck} alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item flex items-center gap-[10px] font-light text-gray-500 mb-[5px]">
              <Image className="w-[14px]" src={greencheck} alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item flex items-center gap-[10px] font-light text-gray-500 mb-[5px]">
              <Image className="w-[14px]" src={greencheck} alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button className="bg-green-500 py-[10px] px-[10px] border: none text-white font-semibold text-lg cursor-pointer">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default Gig;
