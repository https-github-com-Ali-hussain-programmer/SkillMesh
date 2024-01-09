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
    <div className="languages">
      <div className="flex flex-row justify-between px-[26px]">
        <h1 className="text-lg font-semibold">Languages</h1>
        <button
          onClick={showdescription}
          className=" text-blue-700 hover:underline"
        >
          Add New
        </button>
      </div>
      {showParagraph && (
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className="flex flex-col  gap-3  px-[26px] py-3"
        >
          {languages?.map((l, index) => {
            return (
              <p className="text-[17px] font-[500] text-gray-500 flex items-center gap-2 " key={index}>
                {l.languageName} - <span className="text-[#333333] font-bold ">{l.level}</span>
              </p>
            );
          })}

          {showEdit && (
            <CreateOutlinedIcon className="text-[16px] text-gray-500 cursor-pointer" />
          )}
        </div>
      )}

      {showBlock && (
        <div className="mr-3 ml-3 mb-10 bg-gray-200  px-[26px] mt-5 border-[1px] border-current rounded-md">
          <input
            type="text"
            placeholder="Add Language"
            onChange={(e) => {
              const { value } = e.target;
              setLanguageName(value);
            }}
            className="mt-5 w-[400px] py-2 px-2 text-[18px]"
          />
          <select
            className="mt-5 w-[400px] py-2 px-2 text-[18px]"
            onChange={(e) => {
              const { value } = e.target;
              setLevel(value);
            }}
          >
            <option value="Basic">Basic</option>
            <option value="Fluent">Fluent</option>
            <option value="Conversational">Conversational</option>
          </select>

          <div className="flex flex-row justify-center gap-6 py-4 border-t-[1px] border-dark-black mt-3">
            <button
              onClick={disabledesc}
              className="bg-white py-2 px-[65px] text-[18px] text-gray-400 font-bold rounded-md border-[1px] border-current hover:bg-dark-black hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleUpdate({ languages: { languageName, level } });
                setShowBlock(false);
                setShowParagraph(true);
                setLevel("Basic")
                setLanguageName("")
              }}
              className=" bg-dark-black text-white py-2 px-[65px] text-[18px] font-bold rounded-md hover:bg-black"
            >
              Update
            </button>
          </div>
        </div>
      )}
      <div className=" border-b-[0.5px] border-solid border-[#e2e8f0]  font-normal mx-3 my-3"></div>
    </div>
  );
};

export default Language;
