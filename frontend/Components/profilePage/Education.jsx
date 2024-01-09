import React, { useState } from "react";

const Education = ({ education, handleUpdate }) => {
  const [showBlock, setShowBlock] = useState(false);
  const [showParagraph, setShowParagraph] = useState(true);
  const [Education, setEducation] = useState({
    country: "",
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
        <div className="mr-3 ml-3 mb-10 bg-gray-200  px-[26px] mt-5 border-[1px] border-current rounded-md">
          <input
            type="text"
            placeholder="Country Name"
            className="mt-5 w-[400px] py-2 px-2 text-[18px]"
            name="country"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Collage(institute) Name"
            className="mt-5 w-[400px] py-2 px-2 text-[18px]"
            name="college"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Title (e.g. BSCS)"
            className="mt-5 w-[400px] py-2 px-2 text-[18px]"
            name="title"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Year of Graduation"
            className="mt-5 w-[400px] py-2 px-2 text-[18px]"
            name="yearOfEducation"
            onChange={handleChange}
          />

          <div className="flex flex-row justify-center gap-5 py-4 border-t-[1px] border-dark-black mt-3">
            <button
              onClick={disabledesc}
              className="bg-white py-2 px-[65px] text-[18px] text-gray-400 font-bold rounded-md border-[1px] border-current hover:bg-dark-black hover:text-white"
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
              className=" bg-dark-black text-white py-2 px-[65px] text-[18px] font-bold rounded-md hover:bg-black"
            >
              Update
            </button>
          </div>
        </div>
      )}
      <div className="border-b-[0.5px] border-solid border-[#e2e8f0]  font-normal mx-3 my-3"></div>
    </div>
  );
};

export default Education;
