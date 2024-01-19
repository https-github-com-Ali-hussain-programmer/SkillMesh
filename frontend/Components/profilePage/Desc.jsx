import React, { useState } from "react";

const Desc = ({ desc, handleUpdate }) => {
  const [showBlock, setShowBlock] = useState(false);
  const [showParagraph, setShowParagraph] = useState(true);
  const [description, setDescription] = useState("");
  const showdescription = () => {
    setShowBlock(true);
    setShowParagraph(false);
  };

  const disabledesc = () => {
    setShowBlock(false);
    setShowParagraph(true);
  };
  const handleDescription = (e) => {
    const { value } = e.target;
    setDescription(value);
  };

  return (
    <div
      className={`description flex flex-col gap-2.5 ${
        desc ? "border-b-[1px] border-solid border-[#ddd]" : null
      } py-2`}
    >
      <div className="flex flex-row justify-between ">
        <h1 className="text-[16px] font-[700] text-[#0E0E0F]">Description</h1>
        <button
          onClick={showdescription}
          className=" text-[#00698C] hover:underline text-sm"
        >
          Edit Description
        </button>
      </div>
      {showParagraph && (
        <p className="text-sm font-[500] text-[#62646A] text-justify pb-6">
          {desc}
        </p>
      )}
      {showBlock && (
        <div className="mb-5 bg-[#f4f4f4] p-4  flex flex-col items-center  border-[1px] border-[#e5e5e5] rounded-[3px]">
          <textarea
            className="  w-full focus:outline-none h-[140px] font-[400] text-[16px]  bg-transparent resize-none overflow-scroll border-b-[1.5px] border-solid border-[#e5e5e5] text-[#7a7d85] rounded-[3px] p-[7px] pt-[6px] placeholder:text-[#7a7d85] placeholder:text-[15px] placeholder:font-[400] placeholder:text-justify"
            name=""
            id=""
            maxLength="600"
            minLength="150"
            onChange={handleDescription}
            placeholder="Please tell us about any hobbies, additional expertise, or anything else you'd like to add."
          ></textarea>
          <div className="flex flex-row justify-center gap-5 py-4  mt-3 w-full">
            <button
              onClick={disabledesc}
              className="bg-white text-[#777]  w-[calc(100%-15px)] font-[600]  hover:text-[#1dbf73] py-[10px] px-[30px] text-sm  rounded-[3px]  border border-solid border-[#ccc]"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleUpdate({ description });
                setShowBlock(false);
                setShowParagraph(true);
              }}
              className="bg-[#1dbf73] text-white w-[calc(100%-15px)] py-[10px] px-[30px] text-sm font-bold rounded-[3px]  border border-solid border-transparent"
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Desc;
