"use client";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/side.png";
import Search from "../Shared/Search";
import { useCallback, useEffect, useRef, useState } from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import MetaMask from "../../public/MetaMask.png";
import { FaAddressCard } from "react-icons/fa";
import Ethereum from "../../public/ethereum.svg";
import { ethers } from "ethers";
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
const Hero = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState([]);
  const [valueradio, setValueradio] = useState("User");
  const [showResult, setShowResult] = useState(false);
  const inputRef = useRef(null);
  const ShowRef = useRef(null);
  const currentUser = useSelector((state) => state.user.userData);
  const [value, setValue] = useState("");
  const [balance, setBalance] = useState("");

  const showBalance = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(currentUser.address);
      const etherBalance = ethers.formatEther(balance);
      setBalance(etherBalance);
    } catch (error) {
      console.error("Error fetching balance:", error);
      return "Error fetching balance";
    }
  };

  const shortAddress = (fullAddress) => {
    const shortenedAddress = `${fullAddress?.substring(
      0,
      10
    )}...${fullAddress?.slice(-10)}`;
    return shortenedAddress;
  };
  const handleInput = (e) => {
    const { value } = e.target;
    setInput(value);

    if (value.trim() === "") {
      setSearch([]);
      return;
    }

    const h = Search(value, valueradio);
    setSearch(h);
  };
  useEffect(() => {
    const removeShowResult = (e) => {
      if (
        inputRef?.current?.contains(e.target) ||
        ShowRef?.current?.contains(e.target)
      ) {
        return;
      }
      setShowResult(false);
    };

    document.addEventListener("click", removeShowResult);
    return () => {
      document.removeEventListener("click", removeShowResult);
    };
  }, []);
  useEffect(() => {
    if (currentUser) {
      showBalance();
    }
  }, [currentUser]);
  const renderSearchResults = () => {
    if (valueradio === "User") {
      return (
        <div className="flex flex-col gap-4">
          {search.map((s, i) => (
            <div className="flex items-center justify-between" key={i}>
              <img
                src={s?.profileImg}
                alt="error"
                className="h-12 w-12 rounded-full object-cover"
              />
              <p>{s?.username}</p>
              <p>{s?.country}</p>
            </div>
          ))}
        </div>
      );
    } else if (valueradio === "Category") {
      return (
        <div className="flex flex-col gap-4">
          {search.map((s, i) => (
            <div className="flex items-center justify-between" key={i}>
              <img
                src={s?.imageUrl}
                alt="error"
                className="h-12 w-12 rounded-full object-cover"
              />
              <p>{s?.name}</p>
              <p>{s?.TotalNoofGigsAvailable}</p>
            </div>
          ))}
        </div>
      );
    } else if (valueradio === "Subcategory") {
      return (
        <div className="flex flex-col gap-4">
          {search.map((s, i) => (
            <div className="flex items-center justify-between" key={i}>
              <img
                src={s?.imageUrl}
                alt="error"
                className="h-12 w-12 rounded-full object-cover"
              />
              <p>{s?.name}</p>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };
  return (
    <>
      <div className={`h-[600px] justify-center flex`}>
        <div
          className={`2xl:w-[1400px] container flex items-center justify-between 
           px-7`}
        >
          <div className="flex flex-col gap-[30px] max-w-[700px] relative">
            <h1
              className={`text-4xl tracking-wide font-bold title-animation
              `}
            >
              Find the perfect
              <span className="font-light italic ps-2">freelance</span> services
              for your business
            </h1>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
              <input
                ref={inputRef}
                type="text"
                placeholder="Block Chain Web 3.0"
                className="text-gray-600 outline-none w-[90%] py-5 px-5 rounded-sm  border-[#E2E8F0] border-solid border-2"
                onChange={handleInput}
                onFocus={() => {
                  setShowResult(true);
                }}
              />
              <button className="bg-[#A835C4] w-[90%] lg:w-20 py-5 px-5 font-bold lg:flex items-center justify-center rounded-r-md bg-onlineGreen border-none cursor-pointer lg:text-xl text-3xl">
                <FiSearch />
              </button>
            </div>
            {showResult ? (
              <div
                ref={ShowRef}
                className="text-[rgb(64,65,69)] flex flex-col gap-3 bg-white h-[350px] rounded-sm w-[89%] absolute sm:top-[180px] top-[275px] shadow-xl overflow-auto  "
              >
                <div className="flex justify-end px-5 py-3 ">
                  <RadioGroup onChange={setValueradio} value={valueradio}>
                    <Stack direction="row">
                      <Radio value="User">User</Radio>
                      <Radio value="Category">Category</Radio>
                      <Radio value="Subcategory">Subcategory</Radio>
                    </Stack>
                  </RadioGroup>
                </div>

                {search?.length > 0 && valueradio === "User" ? (
                  <div className="flex items-center justify-between  px-5 ">
                    <span className="font-bold">User</span>{" "}
                    <span className="font-bold">Name</span>
                    <span className="font-bold">Country</span>
                  </div>
                ) : null}

                {search?.length > 0 && valueradio === "Category" ? (
                  <div className="flex items-center justify-between px-5  ">
                    <span className="font-bold">Category</span>{" "}
                    <span className="font-bold">Name</span>
                    <span className="font-bold">
                      {" "}
                      <span className="text-green-500 text-lg">.</span>
                      Available
                    </span>
                  </div>
                ) : null}

                {search?.length > 0 && valueradio === "Subcategory px-5" ? (
                  <div className="flex items-center justify-between ">
                    <span className="font-bold">Fields</span>{" "}
                    <span className="font-bold">Name</span>
                  </div>
                ) : null}

                <div className="px-5 py-1">{renderSearchResults()}</div>
              </div>
            ) : null}

            <div className="gap-4 items-center max-w-xl text-sm hidden lg:flex">
              <span className="font-bold text-md">Popular:</span>
              <Link
                href="/"
                className="border-[1px] border-solid border-white rounded-2xl bg-transparent py-1 px-2"
              >
                UI/UX
              </Link>
              <Link
                href="/"
                className="border-[1px] border-solid border-white rounded-2xl bg-transparent py-1 px-2"
              >
                AI SERVICES
              </Link>
              <Link
                href="/"
                className="border-[1px] border-solid border-white rounded-2xl bg-transparent py-1 px-2"
              >
                Web Development
              </Link>
            </div>
          </div>
          {currentUser ? (
            <div className="rounded-[16px] bg-[#fbbf06]  w-[430px] showStatus p-4  flex flex-col gap-3 border-[#E2E8F0] border-solid border-2 ">
              <h1 className="w-full p-2  bg-[#f5f5f7]  font-bold text-[#6c6f7f] mb-2 text-center">
                Account 's Information
              </h1>
              <div className="flex items-center gap-2 ">
                <span className="bg-[#FED7D7] h-[35px] w-[35px] rounded-full flex items-center justify-center">
                  <img
                    src={MetaMask.src}
                    alt="MetaMask"
                    className="h-[25px] "
                  />
                </span>
                <div className="flex items-center gap-2 p-1">
                  <div className="w-[6px] h-[6px] rounded-full bg-[#46CE7E]"></div>
                  <span className="text-[#2f3037] text-sm font-[500] ">
                    Polygon{" "}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <FaAddressCard className="text-[#2BCAB0] text-2xl" />{" "}
                  <span className=" text-[#151619]">Account Address :</span>{" "}
                  <h1 className="font-[700] text-sm text-[#6c6f7f] break-words">
                    {shortAddress(currentUser?.address)}
                  </h1>
                  <CopyToClipboard options={{ message: "Whoa!" }} text={currentUser?.address} >
                    <button
                      className="outline-none border-none hover:scale-110 transition-all"
                      onClick={() => {
                        setValue(currentUser?.address);
                        toast.success("Successfully Copied Address", {
                          autoClose: 3000,
                        });
                      }}
                    >
                      <FaCopy className="text-[#2BCAB0]  " />
                    </button>
                  </CopyToClipboard>
                </div>
                <div className="flex items-center gap-3">
                  <img src={Ethereum.src} alt="error" className="h-[30px]" />{" "}
                  <span className=" text-[#151619]">Account Balance :</span>
                  <h1 className="font-[400] font-lg text-[#151619] cursor-pointer">
                    <span>{balance}ETH</span>
                  </h1>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-[500px] hidden lg:inline-block">
              <Image
                src={logo}
                alt="error"
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
