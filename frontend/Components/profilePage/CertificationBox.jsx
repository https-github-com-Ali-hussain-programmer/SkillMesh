import React, { useState } from "react";

import { BsThreeDots } from "react-icons/bs";
function CertificationBox({ e, onclick }) {
  const [deletebutton, setDelete] = useState(false);
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className=" text-[15px] font-[400]  flex-col flex gap-2 ">
        <div className="flex items-center justify-between">
          <span className="text-[#555555]">{e?.certificateName}</span>
          <div className="relative">
            <span
              onClick={() => {
                setDelete(!deletebutton);
              }}
            >
              <BsThreeDots />
            </span>
            {deletebutton ? (
              <span
                onClick={() => {
                  onclick();
                  setDelete(false);
                }}
                className=" text-sm bg-sky-500 cursor-pointer absolute right-0 p-3 text-white rounded-md shadow-lg"
              >
                Delete
              </span>
            ) : null}
          </div>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-[#b2b2b2]">{e?.platform}</span>
          <span className="text-[#b2b2b2]">{e?.certficateDate}</span>
        </div>

        <div className="w-full">
          <h1
            className="text-sky-500 text-sm text-[400] cursor-pointer py-2"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            Show more
          </h1>

          <div
            className={`showMore ${showMore ? " image-show " : " h-0"} `}
          >
            <img
              src={e?.certificationImage}
              alt="error"
              className="w-full h-full rounded-sm object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificationBox;
