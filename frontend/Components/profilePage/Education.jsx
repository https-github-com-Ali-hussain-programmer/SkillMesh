import React, { useState } from "react";

const Education = ({ education }) => {
  const [showBlock, setShowBlock] = useState(false);
  const [showParagraph, setShowParagraph] = useState(true);
  const showdescription = () => {
    setShowBlock(true);
    setShowParagraph(false);
  };

  const disabledesc = () => {
    setShowBlock(false);
    setShowParagraph(true);
  };

  return (
    <div className="education">
      <div className="flex flex-row justify-between px-[26px]">
        <h1 className="text-lg font-semibold">Education</h1>
        <button
          onClick={showdescription}
          className=" text-blue-700 hover:underline"
        >
          Add New
        </button>
      </div>
      {showParagraph && (
        <div className="flex flex-col gap-3 py-3 px-[26px] ">
          {education.map((e, index) => {
            return (
              <div
                className="text-sm font-[500] text-gray-500 flex-col flex gap-3 "
                key={index}
              >
                <h1 className="font-bold text-[17px] w-full">{e?.level}</h1>
                <div className="flex justify-between items-center">
                  {" "}
                  <span>{e?.institution}</span>
                  <span>{e?.location}</span>
                  <span> {e?.duration}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showBlock && (
        <div className="mr-3 ml-3 mb-10 bg-gray-200  px-[26px] mt-5 border-[1px] border-current rounded-md">
          <input
            type="text"
            placeholder="Country Name"
            className="mt-5 w-[400px] py-2 px-2 text-[18px]"
          />
          <input
            type="text"
            placeholder="Collage(institute) Name"
            className="mt-5 w-[400px] py-2 px-2 text-[18px]"
          />
          <input
            type="text"
            placeholder="Title (e.g. BSCS)"
            className="mt-5 w-[400px] py-2 px-2 text-[18px]"
          />
          <input
            type="text"
            placeholder="Year of Graduation"
            className="mt-5 w-[400px] py-2 px-2 text-[18px]"
          />

          <div className="flex flex-row justify-center gap-5 py-4 border-t-[1px] border-dark-black mt-3">
            <button
              onClick={disabledesc}
              className="bg-white py-2 px-[65px] text-[18px] text-gray-400 font-bold rounded-md border-[1px] border-current hover:bg-dark-black hover:text-white"
            >
              Cancel
            </button>
            <button className=" bg-dark-black text-white py-2 px-[65px] text-[18px] font-bold rounded-md hover:bg-black">
              Update
            </button>
          </div>
        </div>
      )}
      <div className=" border  border-gray-300  font-normal mx-3 my-3"></div>
    </div>
  );
};

export default Education;
