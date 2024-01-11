"use client";
import React, { useCallback, useEffect, useState } from "react";
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
import { fetchProfileData, updateProfileData } from "@/Api/userApi";
import { updateField } from "../../../redux/slice/userSlice";
import { countries } from "../../../utils/data";
import ReactFlagsSelect from "react-flags-select";

const ProfilePage = () => {
  const { id } = useSearchParams();
  const currentUser = useSelector((state) => state.user.userData);
  const [profileData, setProfileData] = useState(currentUser);
  const [showName, setshowName] = useState(false);
  const [changeName, setChangeName] = useState("");
  const [abortController, setAbortController] = useState(null);
  const [showCountry, setshowCountry] = useState(false);
  const dispatch = useDispatch();
  const [select, setSelect] = useState("SE");
  const onSelect = (code) => setSelect(code);

  const handleUpdate = useCallback(async (updatedField) => {
    const abortController = new AbortController();
    setAbortController(abortController);
    const data = await updateProfileData(
      profileData._id,
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
  } = profileData || {};
  const convertDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const memberSinceDate = new Date(date);
    const formattedMemberSince = new Intl.DateTimeFormat(
      "en-US",
      options
    ).format(memberSinceDate);
    return formattedMemberSince;
  };
  return (
    <>
      <div className=" min-h-screen bg-gray-200 pt-[30px] pb-[200px] px-5">
        <div className="  flex flex-col md:flex-row gap-10  ">
          <div className="flex-1  flex flex-col gap-14 items-center ">
            <div className="w-full bg-white border-[1px] border-gray-300 flex flex-col gap-4 items-center  p-8">
              <img
                className="w-[100px] h-[100px] rounded-full object-cover border-4 border-green-500 border-solid"
                src={avatar || ""}
                alt="error"
              />
              <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-row gap-2 items-center">
                  {" "}
                  <h1 className="text-[20px] font-[600] hover:cursor-pointer hover:underline">
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
                  <div className="mr-2 ml-2 mb-5 bg-gray-200  px-[15px] mt-2 border-[1px] border-current rounded-md">
                    <input
                      type="text"
                      placeholder="Enter New Name"
                      onChange={(e) => {
                        const { value } = e.target;
                        setChangeName(value);
                      }}
                      className="mt-5 w-[400px] py-2 px-2 text-[18px]"
                    />
                    <div className="flex flex-row justify-center gap-6 py-3 border-t-[1px] border-dark-black mt-3">
                      <button
                        onClick={disabledesc}
                        className="bg-white py-1 px-[40px] text-sm text-gray-400 font-bold rounded-md border-[1px] border-current hover:bg-dark-black hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          handleUpdate({ name: changeName });
                          setshowName(false);
                        }}
                        className=" bg-dark-black text-white py-1 px-[40px] text-sm font-bold rounded-md hover:bg-black"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-400 py-1 text-sm ">{address || ""}</h1>
              </div>

              <button className=" w-full  font-semibold border-[1px] py-1 mt-4 rounded-md border-current mb-8 hover:bg-gray-400 hover:border-gray-400 hover:text-white duration-500">
                Preview SkillMesh Profile
              </button>
              <div className=" border-t border-gray-300 flex flex-col gap-2  w-full py-4 pt-5">
                <div className=" flex flex-row justify-between items-center w-full py-4 pt-5">
                  {" "}
                  <h3 className="">From</h3>
                  <div className="flex items-center gap-2">
                    {" "}
                    <LocationOnIcon className="text-[18px]  hover:cursor-pointer" />
                    <span>{country}</span>
                    <span class="flag-icon flag-icon-US"></span>
                    <span class="flag-icon flag-icon-gr flag-icon-squared"></span>
                    <GrUpdate
                      className="text-[15px]  text-gray-400 hover:cursor-pointer"
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
                    <div className="flex flex-row justify-center gap-6 py-3 border-t-[1px] border-dark-black mt-3">
                      <button
                        onClick={() => {
                          setshowCountry(false);
                        }}
                        className="bg-white py-1 px-[40px] text-sm text-gray-400 font-bold rounded-md border-[1px] border-current hover:bg-dark-black hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          handleUpdate({ country: countries[select] });
                          setshowCountry(false);
                          setSelect("");
                        }}
                        className=" bg-dark-black text-white py-1 px-[40px] text-sm font-bold rounded-md hover:bg-black"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-row justify-between  w-full py-4 ">
                <PersonIcon />
                <h3>Member since</h3>
                <h2>{convertDate(memberSince) || ""}</h2>
              </div>
            </div>
            <div className="w-full bg-white py-5 border-b-[0.5px] border-solid border-[#e2e8f0] text-sm">
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
                handleUpdate={handleUpdate}
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
    </>
  );
};

export default ProfilePage;
