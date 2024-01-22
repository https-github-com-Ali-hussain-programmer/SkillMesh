import React, { useState } from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

const Skills = ({ skills, handleUpdate }) => {
  const [showBlock, setShowBlock] = useState(false);
  const [showParagraph, setShowParagraph] = useState(true);
  const [skillName, setSkillName] = useState("");
  const [level, setLevel] = useState("Beginner");
  const showdescription = () => {
    setShowBlock(true);
    setShowParagraph(false);
  };

  const disabledesc = () => {
    setShowBlock(false);
    setShowParagraph(true);
  };

  return (
    <div
      className={`skills py-2 flex flex-col gap-2  ${
        skills?.length > 0 ? "border-b-[1px] border-solid border-[#ddd]" : null
      }   `}
    >
      <div className="flex flex-row justify-between ">
        <h1 className="text-[16px] font-[700] text-[#0E0E0F]">Skills</h1>
        <button
          onClick={showdescription}
          className=" text-[#00698C] hover:underline text-sm"
        >
          Add New
        </button>
      </div>
      {showParagraph && (
        <div className="flex  gap-3 flex-wrap items-center  py-3">
          {skills?.map((s, index) => {
            return (
              <p
                key={index}
                className=" py-[6px] px-[13px]  shadow-sm border-solid border-[1px] border-[#e5e5e5] rounded-[12px] font-[500] text-gray-500  "
              >
                {" "}
                <h1 className="text-[#555555] text-sm">{s.skillName}</h1> 
              </p>
            );
          })}
        </div>
      )}

      {showBlock && (
        <div className="mb-5 bg-[#f4f4f4] p-4 gap-2 flex flex-col items-center  border-[1px] border-[#e5e5e5] rounded-[3px]">
          <input
            type="text"
            placeholder="Add Skill (e.g. Voice Talent)"
            onChange={(e) => {
              const { value } = e.target;
              setSkillName(value);
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
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <div className="flex flex-row justify-center gap-5 py-4  mt-2 w-full">
            <button
              onClick={disabledesc}
              className="bg-white text-[#777]  w-[calc(100%-15px)] font-[600]  hover:text-[#1dbf73] py-[10px] px-[30px] text-sm  rounded-[3px]  border border-solid border-[#ccc]"
            >
              Cancel
            </button>
            <button
              className="bg-[#1dbf73] text-white w-[calc(100%-15px)] py-[10px] px-[30px] text-sm font-bold rounded-[3px]  border border-solid border-transparent"
              onClick={() => {
                handleUpdate({ skills: { skillName, level } });
                setShowBlock(false);
                setShowParagraph(true);
                setLevel("Beginner");
                setSkillName("");
              }}
            >
              {" "}
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
