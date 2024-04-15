"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import seller from "../../../public/seller.jpg";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { GrUpdate } from "react-icons/gr";
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
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  fetchProfileData,
  updateProfileData,
  updatePics,
  handleCertificationUpdate,
} from "@/Api/userApi";
import { updateField } from "../../../redux/slice/userSlice";
import { countries } from "../../../utils/data";
import ReactFlagsSelect from "react-flags-select";
import { setGigs } from "../../../redux/slice/gigcreationslice";
import { getGig } from "../../../Api/gigApi";
const ProfilePage = () => {
  const { id } = useSearchParams();
  const currentUser = useSelector((state) => state.user?.userData);
  console.log(currentUser);
  const [profileData, setProfileData] = useState(currentUser);
  const [showName, setshowName] = useState(false);
  const [changeName, setChangeName] = useState("");
  const [abortController, setAbortController] = useState(null);
  const [showCountry, setshowCountry] = useState(false);
  
  const dispatch = useDispatch();
  const [select, setSelect] = useState("SE");
  const onSelect = (code) => setSelect(code);
  const [tempUrl, setTempUrl] = useState(currentUser?.avatar);
  const [profileUpdate, setprofileUpdate] = useState(false);
  const [file, setFile] = useState(null);
  const profileRef = useRef(null);
  const router = useRouter();

  const handleUpdate = useCallback(async (updatedField) => {
    const abortController = new AbortController();
    setAbortController(abortController);
    const data = await updateProfileData(
      profileData?._id,
      updatedField,
      abortController.signal
    );
    dispatch(updateField({ updatedField: data.updatedField }));
    abortController.abort();
  }, []);
  const disabledesc = () => {
    setshowName(false);
  };

  useEffect(() => {
    if (id) {
      const abortController = new AbortController();
      setAbortController(abortController);

      const fetchData = async () => {
        try {
          const data = await fetchProfileData(id, abortController.signal);
          setProfileData(data?.user);
        } catch (error) {
          if (error.name === "AbortError") {
            return;
          }
        }
      };

      fetchData();
    }
    return () => {
      if (abortController) {
        abortController.abort();
      }
    };
  }, [id]);
  useEffect(() => {
    setProfileData(currentUser);
  }, [currentUser]);
  const {
    avatar,
    address,
    isSeller,
    skills,
    languages,
    education,
    certifications,
    name,
    memberSince,
    country,
    description,
    gig,
  } = profileData || {};
  const convertDate = (date = new Date()) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const memberSinceDate = new Date(date);
    const formattedMemberSince = new Intl.DateTimeFormat(
      "en-US",
      options
    ).format(memberSinceDate);
    return formattedMemberSince;
  };
  const handleProfile = async (e) => {
    const { files } = e.target;
    setFile(files[0]);
    setTempUrl(URL.createObjectURL(files[0]));
    setprofileUpdate(true);
  };
  const handlePicUpdate = async (fileParams, fieldName) => {
    const formData = new FormData();
    formData.append("images", fileParams);
    formData.append("id", profileData?._id);
    formData.append("fieldName", fieldName);
    const abortController = new AbortController();
    setAbortController(abortController);
    const data = await updatePics(formData, abortController.signal);
    dispatch(updateField({ updatedField: data.updatedField }));
    abortController.abort();
  };
  const handleCertitication = async (formData) => {
    const data = await handleCertificationUpdate(formData);
    dispatch(updateField({ updatedField: data.updatedField }));
  };

  return (
    <>
      <div className=" min-h-screen bg-[#f7f7f7] pt-[30px] pb-[200px] px-5">
        <div className="  flex flex-col md:flex-row gap-10  ">
          <div className="flex-1  flex flex-col gap-14 items-center ">
            <div className="w-full bg-white border-[1px] border-gray-300 flex flex-col gap-2   p-8">
              <div className=" flex items-center justify-center">
                <img
                  className="w-[130px] h-[130px]  rounded-full border-4 border-green-500 border-solid"
                  src={tempUrl}
                  alt="error"
                  onClick={() => {
                    profileRef.current.click();
                  }}
                />
              </div>

              {profileUpdate && (
                <div className="mb-5 bg-[#f4f4f4] p-4 gap-2 flex flex-col items-center  border-[1px] border-[#e5e5e5] rounded-[3px]">
                  <div className="flex flex-row justify-center gap-5 py-4  mt-2 w-full">
                    <button
                      onClick={() => {
                        setprofileUpdate(false);
                        setTempUrl(avatar);
                      }}
                      className="bg-white text-[#777]  w-[calc(100%-15px)] font-[600]  hover:text-[#1dbf73] py-[10px] px-[30px] text-sm  rounded-[3px]  border border-solid border-[#ccc]"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        handlePicUpdate(file, "avatar");
                        setprofileUpdate(false);
                      }}
                      className="bg-[#1dbf73] text-white w-[calc(100%-15px)] py-[10px] px-[30px] text-sm font-bold rounded-[3px]  border border-solid border-transparent"
                    >
                      Update
                    </button>
                  </div>
                </div>
              )}
              <input
                type="file"
                className="hidden"
                ref={profileRef}
                onChange={handleProfile}
                accept="image/*"
              />
              <div className="flex flex-col gap-3 items-center">
                <div className="flex flex-row gap-2 items-center">
                  {" "}
                  <h1 className=" text-[20px] text-[#222325] font-[700] hover:cursor-default hover:underline">
                    {name}
                  </h1>
                  <CreateOutlinedIcon
                    className="text-[18px] mt-2 text-gray-400 hover:cursor-pointer"
                    onClick={() => {
                      setshowName(true);
                    }}
                  />
                </div>
                {showName && (
                  <div className=" w-full mb-5 bg-[#f4f4f4] p-4  flex flex-col items-center  border-[1px] border-[#e5e5e5] rounded-[3px]">
                    <input
                      type="text"
                      placeholder="Enter New Name"
                      onChange={(e) => {
                        const { value } = e.target;
                        setChangeName(value);
                      }}
                      className="  w-full focus:outline-none font-[400] text-[16px]  bg-white border-[1px] border-solid border-[#c5c6c9] text-[#404145] rounded-[4px] py-[8px] px-[12px] placeholder:text-[#7a7d85] placeholder:text-[15px] placeholder:font-[400] placeholder:text-justify"
                    />
                    <div className="flex flex-row justify-center gap-5 py-4  mt-3 w-full">
                      <button
                        onClick={disabledesc}
                        className="bg-white text-[#777]  w-[calc(100%-15px)] font-[600]  hover:text-[#1dbf73] py-[10px] px-[30px] text-sm  rounded-[3px]  border border-solid border-[#ccc]"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          handleUpdate({ name: changeName });
                          setshowName(false);
                        }}
                        className="bg-[#1dbf73] text-white w-[calc(100%-15px)] py-[10px] px-[30px] text-sm font-bold rounded-[3px]  border border-solid border-transparent"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <h1 className="text-[#7a7d85]  text-[16px] text-center ">
                {address || ""}
              </h1>
              <div className="flex items-center justify-center">
                <button className=" w-3/4 text-sm  font-semibold border-[1px]  mt-4 rounded-md border-current mb-8 hover:bg-[#1dbf73] hover:bg-transparent  py-[10px] hover:border-gray-400 text-[#62646A] duration-500 hover:text-white">
                  Preview SkillMesh Profile
                </button>
              </div>

              <div className=" border-t border-[#ddd] flex flex-col   w-full  ">
                <div className=" flex flex-row justify-between items-center w-full py-4 pt-5">
                  {" "}
                  <div className="flex items-center gap-2">
                    <span className="text-sm">
                      {" "}
                      <LocationOnIcon className=" text-[#62646a] text-[15.5px] cursor-pointer" />{" "}
                    </span>

                    <h3 className="text-[#62646a] text-sm cursor-pointer">
                      From
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    {" "}
                    <span className="text-[#62646a] font-bold text-sm">
                      {country}
                    </span>
                    <GrUpdate
                      className="text-sm  text-[#62646a] hover:cursor-pointer"
                      onClick={() => {
                        setshowCountry(true);
                      }}
                    />
                  </div>
                </div>

                {showCountry && (
                  <div>
                    <div>
                      <ReactFlagsSelect
                        selected={select}
                        onSelect={onSelect}
                        countries={Object.keys(countries)}
                        placeholder={"Select Country"}
                        searchable={true}
                        searchPlaceholder={"Search Countries"}
                      />
                    </div>
                    <div className="flex flex-row justify-center gap-6 py-3 border-t-[1px] border-solid border-[#e5e5e5] mt-3">
                      <button
                        onClick={() => {
                          setshowCountry(false);
                        }}
                        className=" py-1 px-[40px] text-sm  font-bold rounded-md border border-solid border-[#ccc] bg-white text-[#777]  "
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          handleUpdate({ country: countries[select] });
                          setshowCountry(false);
                          setSelect("");
                        }}
                        className=" bg-[#1dbf73] text-white py-1 px-[40px] text-sm font-bold rounded-md "
                      >
                        Update
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-row justify-between  w-full  ">
                <div className="flex items-center gap-2">
                  {" "}
                  <span>
                    <PersonIcon className=" text-[#62646a] text-[15.5px]  cursor-pointer" />
                  </span>
                  <h3 className=" text-[#62646a] text-sm  cursor-pointer">
                    Member since
                  </h3>
                </div>

                <h2 className="text-[#62646a] text-sm font-bold">
                  {currentUser ? convertDate(memberSince) || "" : null}
                </h2>
              </div>
            </div>
            <div className="w-full bg-white p-[30px] border-[1px] border-solid border-[#ddd]  flex flex-col gap-4">
              <Desc desc={description || ""} handleUpdate={handleUpdate} />
              <Language
                languages={languages || ""}
                handleUpdate={handleUpdate}
              />
              <Skills skills={skills || ""} handleUpdate={handleUpdate} />
              <Education
                education={education || ""}
                handleUpdate={handleUpdate}
              />
              <Certification
                certifications={certifications || ""}
                handleUpdate={handleCertitication}
                id={currentUser?._id}
              />
            </div>
          </div>
          {isSeller ? (
            <div className="md:w-[65%] w-full flex flex-col">
              <div className=" bg-white">
                <button className="py-5 ml-10 px-2 border-b-[3px] border-dark-blue text-[18px] font-semibold">
                  ACTIVE GIGS
                </button>
              </div>

              <div className="flex-wrap mt-4 items-center flex  gap-5">
                {gig?.length > 0
                  ? gig?.map((g, index) => {
                      return <ProfileGig key={index} {...g} />;
                    })
                  : null}
                <div
                  onClick={() => {
                    router.push("/GigCreation/Overview");
                  }}
                  className=" w-[300px] h-[384px] bg-white  hover:cursor-pointer hover:shadow-xl flex flex-col justify-center items-center"
                >
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
                <Link href="./GigCreation/Overview">
                  <button className="bg-dark-blue text-white py-3 px-7 mt-5 rounded-md font-semibold hover:shadow-2xl">
                    Become a Seller
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
