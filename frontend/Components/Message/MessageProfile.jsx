import React from "react";
import p1 from "../../public/people-02.png";
function MessageProfile(props) {
  return (
    <>
      <div onClick={props.onClick} className=" py-3  text-sm flex items-center gap-8  rounded-md p-2  border  border-gray-300">
        <div>
          <img src={p1.src} alt="error" className="h-[48px] w-[48px]" />
        </div>
        <div className="flex flex-col gap-1">
          <h3>John Smith</h3>
          <p>You: Well! That's Fine</p>
        </div>
        <div className="text-gray-400">17 oct</div>
      </div>
    </>
  );
}

export default MessageProfile;
