import React, { useState } from "react";

const Desc = ({ desc }) => {
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
    <div className="description ">
      <div className="flex flex-row justify-between px-[26px]">
        <h1 className="text-lg font-semibold">Description</h1>
        <button
          onClick={showdescription}
          className=" text-blue-700 hover:underline"
        >
          Edit Description
        </button>
      </div>
      {showParagraph && (
        <p className="text-[17px] font-[500] text-gray-500  px-[26px] py-5 text-justify">
          {desc}
        </p>
      )}
      {showBlock && (
        <div className="mr-3 ml-3 mb-10 bg-gray-200  px-[26px] flex flex-col items-center mt-5 border-[1px] border-current rounded-md">
          <textarea
            className="focus:border-transparent focus:outline-none mt-6 px-2 py-2 text-[15px] border-0 bg-gray-200 whitespace-wrap"
            name=""
            id=""
            cols={50}
            rows={5}
            placeholder="Please tell us about any hobbies, additional expertise, or anything else you'd like to add."
          ></textarea>
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

export default Desc;
