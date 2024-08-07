"use client";
import React, { useState, useEffect } from "react";
import Slider from "infinite-react-carousel";
import StarRating from "../../../Components/Shared/StarRating";
import clock from "../../../public/clock.png";
import recycle from "../../../public/recycle.png";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import GigReviews from "@/Components/Gig/GigReviews";
import { Tag } from "@chakra-ui/react";
import OrderDrawer from "../../../Components/Order/OrderDrawer";
import moment from "moment";
import { useDisclosure } from "@chakra-ui/react";
import Currency from "@/utils/Currency";
import { useSelector } from "react-redux";
import { fetchGigbyid } from "../../../Api/gigApi";
import useSmartContract from "../../../utils/useSmartContract";
const Gig = () => {
  const search = useSearchParams();
  
  const rate = useSelector((state) => state.exchange.ETH_TO_USD);
  const [showFunctionalities, setShowFunctionalities] = useState(false);
  const id = search.get("id");
  const [data, setData] = useState("");
  const [packagesData, setpackagesData] = useState([]);
  const [ReviewSearch, setReviewSearch] = useState("");
  const [filteredReviews, setfilteredReviews] = useState([]);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleShow = () => {
    setShowFunctionalities(!showFunctionalities);
  };
  const handlePackages = (packageName) => {
    if (packageName.toLowerCase() === "basic") {
      setpackagesData(data?.Package[0]);
    } else if (packageName.toLowerCase() === "standard") {
      setpackagesData(data?.Package[1]);
    } else if (packageName.toLowerCase() === "premium") {
      setpackagesData(data?.Package[2]);
    }
  };
  const handleRoute = (route) => {
    router.replace(route);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchGigbyid(id);
    
        setData(response.gig);
        setpackagesData(response?.gig?.Package[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

 

  return (
    <div className="mb-[300px] mt-[50px] ">
      <div className="container  2xl:max-w-[1400px]   px-[30px] py-[0px] flex  flex-col md:flex-row gap-[50px]">
        <div className="flex-[2] flex flex-col gap-6">
          <div className=" text-[#404145] text-sm flex items-center gap-2 cursor-pointer">
            <span onClick={() => handleRoute("/")}>
              <AiOutlineHome />
            </span>
            <span>/</span>{" "}
            <span onClick={() => handleRoute("/Categories")}>Categories</span>{" "}
            <span>/</span>
            <span onClick={() => handleRoute(`/Categories/${data?.category}`)}>
              Gig
            </span>
          </div>

          <h1 className="text-3xl font-bold   text-[#404145] break-words  tracking-wide">
            {data?.title}
          </h1>

          <div className="flex items-center gap-[10px]">
            <img
              className="w-[32px] h-[32px] rounded-full object-cover"
              src={data?.user?.avatar}
              alt="error"
            />
            <span className="text-base font-medium hover:border-b-2 border-black cursor-pointer">
              {data?.user?.name}
            </span>
            <div className="flex items-center gap-[5px]">
              <StarRating rating={data?.star} color={" text-yellow-400"} />
            </div>
          </div>
          {data ? (
            <div>
              {data && (
                <Slider
                  slidesToShow={1}
                  autoplaySpeed={2500}
                  autoplay={true}
                  autoplayScroll={1}
                  arrows={false}
                  arrowsScroll={1}
                >
                  {data &&
                    data?.gigimages?.map((g, index) => {
                      return (
                        <img
                          key={index}
                          className="max-h-[420px] object-cover"
                          src={g}
                          alt="Pic"
                        />
                      );
                    })}
                </Slider>
              )}
            </div>
          ) : (
            []
          )}

          <h2 className="font-semibold text-2xl text-gray-700">
            About This Gig
          </h2>
          <p className="font-light leading-[25px] text-gray-500 text-justify">
            {data?.description}
          </p>

          <div className="mt-[50px] flex flex-col gap-[20px]">
            <h2 className="text-gray-700 text-2xl">About The Seller</h2>
            <div className="flex items-center gap-[20px]">
              <img
                className="w-[100px] h-[100px] rounded-full object-cover"
                src={data?.user?.avatar}
                alt=""
              />
              <div className="info flex flex-col gap-[10px]">
                <span>{data?.username}</span>
                <div className="stars flex items-center gap-[5px]">
                  <StarRating rating={data?.star} color={" text-yellow-400"} />
                </div>
                <button className="bg-white rounded-[5px] border border-gray-300 p-[6px]">
                  Contact Me
                </button>
              </div>
            </div>
            <div className=" border border-gray-300 rounded-[5px] p-[20px] mt-[20px] text-gray-500 text-sm">
              <div className=" flex justify-between flex-wrap">
                <div className=" w-[260px] flex flex-col gap-[11px] mb-[20px]">
                  <span className="title font-light">From</span>
                  <span className="desc">{data?.user?.country}</span>
                </div>
                <div className="item flex justify-between  gap-2 flex-wrap">
                  <span className="title font-light">Member since:</span>
                  <span className="font-bold">
                    {moment(data?.user?.memberSince).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </span>
                </div>
                <div className="item flex justify-between flex-wrap gap-1">
                  <span className="title font-light">Avg. response time:</span>
                  <span className="desc font-bold">4 hours</span>
                </div>
                <div className="item flex justify-between flex-wrap gap-2">
                  <span className="title font-light">Last delivery:</span>
                  <span className="font-bold">
                    {data?.user?.averageResponseTime}
                  </span>
                </div>
                <div className="item flex justify-between flex-wrap gap-2">
                  <span className="title  font-light">Languages: </span>
                  {data?.user?.languages?.map((l, index) => {
                    return (
                      <Tag
                        size={"md"}
                        key={index}
                        variant="solid"
                        colorScheme="teal"
                      >
                        {l.languageName}
                      </Tag>
                    );
                  })}
                </div>
              </div>

              <p className="py-5 border-t-[1px] border-gray-400 mt-4">
                {data?.user?.description}
              </p>
            </div>
          </div>

          <div className="reviews mt-[50px] flex flex-col gap-8">
            <h2 className="text-2xl text-[#404145] font-bold flex justify-between items-center">
              <span>Reviews</span>
              <span className="hover:border-b-[2px] border-black cursor-pointer flex items-center text-[18px] gap-[1px] font-normal">
                <StarRating rating={data?.star} color={"text-black"} />
                <span className="text-[#404145] font-bold">{data?.star}</span>
              </span>
            </h2>
            <h2 className="text-[#404145] font-medium text-lg ">
              <span className="hover:border-b-2 border-black cursor-pointer">
                {" "}
                {data?.reviews?.length} Reviews Available
              </span>
            </h2>
            <div className="flex items-center  ">
              <input
                type="text"
                value={ReviewSearch}
                onChange={(e) => {
                  const { value } = e.target;
                  setReviewSearch(value);
                  if (value === "") {
                    setfilteredReviews(data?.reviews);
                  } else {
                    const filter = filteredReviews.filter((r) => {
                      const rating = parseInt(r.rating, 10);
                      const searchValue = parseInt(value, 10);
                      return rating === searchValue;
                    });
                    setfilteredReviews(filter);
                  }
                }}
                placeholder="Search reviews by rating"
                className="md:w-[40%] w-full outline-none   border-solid  border border-[#c5c6c9] rounded-bl-[4px] rounded-tl-[4px] text-[#404145] px-[8px] py-[12px] transition-all"
              />

              <button className=" text-lg bg-black text-secondary-white outline-none border-none rounded-tr-md rounded-br-md px-[14px] py-[16px]">
                <IoSearchOutline />
              </button>
            </div>
            <div className="flex flex-col gap-12">
              {filteredReviews &&
                filteredReviews?.map((review, index) => {
                  return <GigReviews key={index} {...review} />;
                })}
            </div>
          </div>
        </div>

        <div className="right flex-[1]  border-[1px] border-solid border-[#dadbdd] flex flex-col gap-[20px] h-max  sticky top-[150px]">
          <div className="flex justify-between">
            <div
              onClick={() => handlePackages("Basic")}
              className={`${
                packagesData?.name === "Basic" ? "black_border" : null
              } cursor-pointer bg-[#fafafa] p-[16px] text-lg flex-1 font-bold border-r-[1px] text-center border-b-[1px] border-solid border-[#dadbdd] text-[#74767e]`}
            >
              Basic
            </div>
            <div
              onClick={() => handlePackages("Standard")}
              className={`${
                packagesData?.name === "Standard" ? "black_border" : null
              } cursor-pointer bg-[#fafafa] p-[16px] text-lg flex-1 font-bold border-b-[1px] text-center border-r-[1px] border-solid border-[#dadbdd] text-[#74767e]`}
            >
              Standard
            </div>
            <div
              onClick={() => handlePackages("Premium")}
              className={`${
                packagesData?.name === "Premium" ? "black_border" : null
              }  cursor-pointer bg-[#fafafa] p-[16px] text-lg font-bold flex-1 border-b-[1px] text-center text-[#74767e] border-solid border-[#dadbdd]`}
            >
              Premium
            </div>
          </div>
          <div className="px-[20px] py-[10px] pt-[6px] flex flex-col gap-5">
            <div className="flex flex-col">
              {" "}
              <h1 className="text-2xl whitespace-nowrap font-bold  flex items-center gap-2">
                <span>
                  {" "}
                  {packagesData?.price} USD (
                  {(packagesData?.price / rate).toFixed(5)}) ETH{" "}
                </span>
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
                {packagesData?.name}
              </span>
              - {packagesData?.desc}
            </p>
            <div className="flex flex-col">
              <div className=" gap-6 flex items-center">
                <div className="flex items-center gap-2">
                  <img src={clock.src} alt="no error" className="h-4 w-4" />{" "}
                  <span className="font-bold text-sm">
                    {" "}
                    {packagesData?.delivery} Days Delivery
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={recycle.src} alt="no error" className="h-4 w-4" />
                  <span className="font-bold text-sm">
                    {packagesData?.revision} Revisions
                  </span>
                </div>
              </div>
              <div className=" justify-between p-2 my-3 flex items-center">
                <span className={`text-[#404145] text-sm font-bold`}>
                  What's Included
                </span>
                <span
                  onClick={handleShow}
                  className={`  transition-all duration-[0.4s] ease-out ${
                    showFunctionalities && "rotate-180"
                  } text-[#404145] text-sm font-extrabold cursor-pointer`}
                >
                  <SlArrowDown />
                </span>
              </div>

              <div
                className={` orderactive flex flex-col gap-3 ${
                  showFunctionalities && "activelist"
                } `}
              >
                {packagesData?.functionalities?.map((p, index) => {
                  return (
                    <div key={index} className="flex gap-2 py-1">
                      <span className="text-xl font-bold">
                        <MdOutlineDone />
                      </span>
                      <span className=" capitalize text-[15px] text-[#95979D]">
                        {p}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={onOpen}
              className="flex items-center justify-between py-2 px-4 bg-black text-white outline-none rounded-md text-lg"
            >
              <span className="flex-1 text-center">Continue</span>
              <FaArrowRightLong />
            </button>
            <p className="text-[#222325] text-center text-[16px]">
              Compare Packages
            </p>
          </div>
        </div>
      </div>
      <OrderDrawer
        isOpen={isOpen}
        onClose={onClose}
        packagesData={packagesData}
        gigimage={data && data?.gigimages[0]}
        id={id}
        address={data?.user?.address}
      />
    </div>
  );
};
export default Gig;
