import React, { useState } from "react";

const Education = ({ education, handleUpdate }) => {
  const [showBlock, setShowBlock] = useState(false);
  const [showParagraph, setShowParagraph] = useState(true);
  const [Education, setEducation] = useState({
    country: "Country of College/University",
    college: "",
    title: "",
    yearOfEducation: "",
  });
  const showdescription = () => {
    setShowBlock(true);
    setShowParagraph(false);
  };
  const disabledesc = () => {
    setShowBlock(false);
    setShowParagraph(true);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setEducation((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div
      className={`education flex flex-col gap-2 py-2 ${
        education?.length > 0
          ? "border-b-[1px] border-solid border-[#ddd]"
          : null
      } `}
    >
      <div className="flex flex-row justify-between">
        <h1 className="text-[16px] font-[700] text-[#0E0E0F]">Education</h1>
        <button
          onClick={showdescription}
          className=" text-[#00698C] hover:underline text-sm"
        >
          Add New
        </button>
      </div>
      {showParagraph && (
        <div className="flex flex-col gap-3 py-3 ">
          {education?.map((e, index) => {
            return (
              <div className=" text-[17px] flex-col flex gap-3 " key={index}>
                <div className="flex items-center gap-2">
                  <span className=" font-[500] text-gray-500">Degree-</span>
                  <span className="text-[#333333] font-bold">{e?.title}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className=" font-[500] text-gray-500">
                      Institute-
                    </span>
                    <span className="text-[#333333] font-bold">
                      {e?.college}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className=" font-[500] text-gray-500">Country-</span>
                    <span className="text-[#333333] font-bold">
                      {e?.country}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className=" font-[500] text-gray-500">
                      Year Of Education-
                    </span>
                    <span className="text-[#333333] font-bold">
                      {" "}
                      {e?.yearOfEducation}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showBlock && (
        <div className="mb-5 bg-[#f4f4f4] p-4 gap-2 flex flex-col items-center  border-[1px] border-[#e5e5e5] rounded-[3px]">
          <select
            className="w-full focus:outline-none font-[400] text-[16px] bg-white border-[1px] border-solid border-[#c5c6c9] text-[#404145] rounded-[4px] py-[8px] px-[12px] "
            name="country"
            onChange={handleChange}
            value={Education.country}
          >
            <option value="0" className="hidden">Country of College/University</option>
           
           
          </select>

          <input
            type="text"
            placeholder="Institute Name"
            className="  w-full focus:outline-none font-[400] text-[16px]  bg-white border-[1px] border-solid border-[#c5c6c9] text-[#404145] rounded-[4px] py-[8px] px-[12px] placeholder:text-[#7a7d85] placeholder:text-[15px] placeholder:font-[400] placeholder:text-justify"
            name="college"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Title "
            className="  w-full focus:outline-none font-[400] text-[16px]  bg-white border-[1px] border-solid border-[#c5c6c9] text-[#404145] rounded-[4px] py-[8px] px-[12px] placeholder:text-[#7a7d85] placeholder:text-[15px] placeholder:font-[400] placeholder:text-justify"
            name="title"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Major "
            className="  w-full focus:outline-none font-[400] text-[16px]  bg-white border-[1px] border-solid border-[#c5c6c9] text-[#404145] rounded-[4px] py-[8px] px-[12px] placeholder:text-[#7a7d85] placeholder:text-[15px] placeholder:font-[400] placeholder:text-justify"
            name="title"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Year of graduation"
            className="  w-full focus:outline-none font-[400] text-[16px]  bg-white border-[1px] border-solid border-[#c5c6c9] text-[#404145] rounded-[4px] py-[8px] px-[12px] placeholder:text-[#7a7d85] placeholder:text-[15px] placeholder:font-[400] placeholder:text-justify"
            name="yearOfEducation"
            onChange={handleChange}
          />

          <div className="flex flex-row justify-center gap-5 py-4  mt-2 w-full">
            <button
              onClick={disabledesc}
              className="bg-white text-[#777]  w-[calc(100%-15px)] font-[600]  hover:text-[#1dbf73] py-[10px] px-[30px] text-sm  rounded-[3px]  border border-solid border-[#ccc]"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleUpdate({
                  education: {
                    country: Education.country,
                    college: Education.college,
                    title: Education.title,
                    yearOfEducation: Education.yearOfEducation,
                  },
                });
                setShowBlock(false);
                setShowParagraph(true);
                setEducation({
                  country: "",
                  college: "",
                  title: "",
                  yearOfEducation: "",
                });
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

export default Education;
