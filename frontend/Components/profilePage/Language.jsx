import React, { useState } from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

const Language = ({ languages, handleUpdate }) => {
  const [showBlock, setShowBlock] = useState(false);
  const [showParagraph, setShowParagraph] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [languageName, setLanguageName] = useState("");
  const [level, setLevel] = useState("Basic");
  const showdescription = () => {
    setShowBlock(true);
    setShowParagraph(false);
  };

  const disabledesc = () => {
    setShowBlock(false);
    setShowParagraph(true);
  };

  const mouseEnter = () => {
    setShowEdit(true);
  };

  const mouseLeave = () => {
    setShowEdit(false);
  };
  return (
    <div
      className={`languages flex flex-col gap-2 py-2  ${
        languages?.length > 0
          ? "border-b-[1px] border-solid border-[#ddd]"
          : null
      }  `}
    >
      <div className="flex flex-row justify-between ">
        <h1 className="text-[16px] font-[700] text-[#0E0E0F]">Languages</h1>
        <button
          onClick={showdescription}
          className=" text-[#00698C] hover:underline text-sm"
        >
          Add New
        </button>
      </div>
      {showParagraph && (
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className="flex flex-col  gap-3   py-3"
        >
          {languages?.map((l, index) => {
            return (
              <p
                className="text-[14px] font-[400] text-[#555555]  "
                key={index}
              >
                {l.languageName} -{" "}
                <span className="text-[#B2B2B2] font-[400] text-[14px] ">
                  {l.level}
                </span>
              </p>
            );
          })}

          {showEdit && (
            <CreateOutlinedIcon className="text-[16px] text-gray-500 cursor-pointer" />
          )}
        </div>
      )}

      {showBlock && (
        <div className="mb-5 bg-[#f4f4f4] p-4 gap-2 flex flex-col items-center  border-[1px] border-[#e5e5e5] rounded-[3px]">
          <input
            type="text"
            placeholder="Add Language"
            onChange={(e) => {
              const { value } = e.target;
              setLanguageName(value);
            }}
            className="  w-full focus:outline-none font-[400] text-[16px]  bg-white border-[1px] border-solid border-[#c5c6c9] text-[#404145] rounded-[4px] py-[8px] px-[12px] placeholder:text-[#7a7d85] placeholder:text-[15px] placeholder:font-[400] placeholder:text-justify"
          />
          <select
            className="  w-full focus:outline-none font-[400] text-[16px]  bg-white border-[1px] border-solid border-[#c5c6c9] text-[#404145] rounded-[4px] py-[8px] px-[12px] placeholder:text-[#7a7d85] placeholder:text-[15px] placeholder:font-[400] placeholder:text-justify"
            onChange={(e) => {
              const { value } = e.target;
              setLevel(value);
            }}
          >
            <option value="Basic" >Basic</option>
            <option value="Fluent">Fluent</option>
            <option value="Conversational">Conversational</option>
          </select>

          <div className="flex flex-row justify-center gap-5 py-4  mt-2 w-full">
            <button
              onClick={disabledesc}
              className="bg-white text-[#777]  w-[calc(100%-15px)] font-[600]  hover:text-[#1dbf73] py-[10px] px-[30px] text-sm  rounded-[3px]  border border-solid border-[#ccc]"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleUpdate({ languages: { languageName, level } });
                setShowBlock(false);
                setShowParagraph(true);
                setLevel("Basic");
                setLanguageName("");
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

export default Language;
