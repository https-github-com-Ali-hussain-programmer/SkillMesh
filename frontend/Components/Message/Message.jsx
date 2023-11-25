"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import MessageProfile from "./MessageProfile";
import MessageLayout from "./MessageLayout";
import { usePathname } from "next/navigation";

function Message() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  const [individualProfile, setindividualProfile] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const inputRef = useRef(null);
  const profileRef = useRef(null);
  const messageLayoutRef = useRef(null);
  const messageRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        messageRef?.current.contains(e.target) ||
        inputRef?.current?.contains(e.target) ||
        profileRef?.current?.contains(e.target) ||
        messageLayoutRef?.current?.contains(e.target) ||
        (profileRef?.current?.contains(e.target) && individualProfile)
      ) {
        return;
      }
      setShow(false);
      setindividualProfile(false);
    };
  
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [individualProfile]);
  
  const toggleMessage = (e) => {
    if (
      inputRef?.current?.contains(e.target) ||
      profileRef?.current?.contains(e.target) ||
      messageLayoutRef?.current?.contains(e.target)
    ) {
      return;
    }
    setShow(!show);
    setindividualProfile(false);
  };
  const toggleProfile = useCallback(() => {
    setindividualProfile(false);
  }, []);
  return (
    <>
      <div
        ref={messageRef}
        onClick={toggleMessage}
        className={`${
          show ? "message" : null
        }   h-12  gap-4 cursor-pointer flex flex-col ${
          pathname === "/"
            ? "bg-white text-black"
            : "bg-dark-blue  text-secondary-white"
        }  w-[340px] p-3 rounded-md  `}
      >
        <h2 className="text-center text-lg">Message</h2>

        {individualProfile ? (
          <div ref={messageLayoutRef} className="w-full h-full ">
            <MessageLayout
              toggleProfile={toggleProfile}
              profileData={profileData}
            />
          </div>
        ) : (
          <>
            <div
              ref={inputRef}
              className="mx-auto w-[90%] rounded-md flex items-center gap-2 border-[1px] border-solid border-secondary-white p-2"
            >
              <span className="text-md">
                <FiSearch />
              </span>
              <input
                type="text"
                placeholder="Search Friends"
                className="border-none outline-none rounded-sm bg-transparent"
              />
            </div>
            <div ref={profileRef} className="flex flex-col overflow-y-auto p-2">
              <MessageProfile
                onClick={() => {
                  setindividualProfile(() => {
                    return true;
                  });
                }}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Message;
