import React from "react";
import SideBar from "../../../Components/Dashbaord/SideBar";
import Profile from "../../../Components/Dashbaord/Profile";
import Content from "../../../Components/Dashbaord/Content";

const dashboard = () => {
  return (
    <div className=" bg-[#dde6ed] p-[20px] flex gap-[20px] ">
      <div>
        <SideBar />
      </div>
      <div className="dashboard--content bg-[#fff] flex-[1] rounded-[20px] p-[2rem] pb-5 flex gap-[1.5rem] justify-between ">
        <Content />
      </div>
    </div>
  );
};

export default dashboard;
