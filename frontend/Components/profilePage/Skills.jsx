import React, { useState } from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

const Skills = ({ skills ,handleUpdate}) => {
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
    <div className="skills">
      <div className="flex flex-row justify-between px-[26px]">
        <h1 className="text-lg font-semibold">Skills</h1>
        <button
          onClick={showdescription}
          className=" text-blue-700 hover:underline"
        >
          Add New
        </button>
      </div>
      {showParagraph && (
        <div className="flex flex-col gap-3 py-3  px-[26px] ">
          {skills?.map((s, index) => {
            return (
              <p
                key={index}
                className="text-[17px] font-[500] text-gray-500  "
              >
                {" "}
                {s.skillName} - <span className="text-[#333333] font-bold">{s.level}</span>
              </p>
            );
          })}
        </div>
      )}

      {showBlock && (
        <div className="mr-3 ml-3 mb-10 bg-gray-200  px-[26px] mt-5 border-[1px] border-current rounded-md">
          <input
            type="text"
            placeholder="Add Skill (e.g. Voice Talent)"
            onChange={(e) => {
              const { value } = e.target;
              setSkillName(value);
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
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <div className="flex flex-row justify-center gap-5 py-4 border-t-[1px] border-dark-black mt-3">
            <button
              onClick={disabledesc}
              className="bg-white py-2 px-[65px] text-[18px] text-gray-400 font-bold rounded-md border-[1px] border-current hover:bg-dark-black hover:text-white"
            >
              Cancel
            </button>
            <button className=" bg-dark-black text-white py-2 px-[65px] text-[18px] font-bold rounded-md hover:bg-black" onClick={()=>{
              handleUpdate({skills:{skillName,level}})
              setShowBlock(false)
              setShowParagraph(true);
              setLevel("Beginner")
              setSkillName("")
            }}>
              Update
            </button>
          </div>
        </div>
      )}
      <div className=" border-b-[0.5px] border-solid border-[#e2e8f0] font-normal mx-3 my-3"></div>
    </div>
  );
};

export default Skills;
