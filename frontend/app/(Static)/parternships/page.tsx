import React from "react";

function Parternships() {
  return (
    <div className="Partnership min-h-screen bg-cover flex items-center">
      <div className="main-container  flex flex-col  ml-[45px] md:ml-[200px]">
        <div className="section-1 flex flex-col items-start">
          <h2 className="text-[35px]  text-gray-500 w-max font-[700] ">
            Let's be Friends
          </h2>
          <h3 className="text-[20px]  md:text-[25px]  text-gray-500 w-max font-[600]  mb-[10px]">
            {" "}
            Interested in partnering with us?
          </h3>
        </div>
        <div className=" section-2 flex flex-col justify-between gap-[10px] w-[300px] md:w-[365px]">
          <input
            type="text"
            placeholder="Name"
            className="rounded px-[10px] py-[10px] mb-[10px] "
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded px-[10px] py-[10px] mb-[10px]"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="rounded px-[10px] py-[10px] mb-[10px]"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={4}
            placeholder="How can we partner"
            className="rounded px-[10px] py-[10px] mb-[10px]"
          ></textarea>
          <button className="border-0 py-[15px] px-[15px] text-white font-[500] text-[18px] bg-green-500 cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Parternships;
