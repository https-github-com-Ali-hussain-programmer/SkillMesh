import React from "react";

const Add = () => {
  return (
    <div className="add flex justify-center">
      <div className="container w-[1400px] px-[50px] py-[0px]">
        <h1 className="text-[30px] w-max mb-[30px] text-gray-500 font-light">Add New Gig</h1>
        <div className="sections flex justify-between gap-[100px]">
          <div className="info flex-[1] flex flex-col justify-between gap-[10px]">
            <label htmlFor="" className="text-gray-500 text-xl">Title</label>
            <input className="px-[20px] py-[20px]"
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor="" className="text-gray-500 text-xl">Category</label>
            <select name="cats" id="cats" className="px-[20px] py-[20px]">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="" className="text-gray-500 text-xl">Cover Image</label>
            <input type="file" className="px-[20px] py-[20px]"/>
            <label htmlFor="" className="text-gray-500 text-xl">Upload Images</label>
            <input type="file" multiple className="px-[20px] py-[20px]"/>
            <label htmlFor="" className="text-gray-500 text-xl">Description</label>
            <textarea name="" id="" className="px-[20px] py-[20px]" placeholder="Brief descriptions to introduce your service to customers" cols={0} rows={16}></textarea>
            <button className="border-0 py-[20px] px-[20px] text-white font-[500] text-[18px] bg-green-500 cursor-pointer">Create</button>
          </div>
          <div className="details  flex-[1] flex flex-col justify-between gap-[10px]">
            <label htmlFor="" className="text-gray-500 text-xl">Service Title</label>
            <input type="text" className="px-[20px] py-[20px]" placeholder="e.g. One-page web design" />
            <label htmlFor="" className="text-gray-500 text-xl">Short Description</label>
            <textarea name="" id="" className="px-[20px] py-[20px]" placeholder="Short description of your service" cols={30} rows={10}></textarea>
            <label htmlFor="" className="text-gray-500 text-xl">Delivery Time (e.g. 3 days)</label>
            <input type="number" className="px-[20px] py-[20px]"/>
            <label htmlFor="" className="text-gray-500 text-xl">Revision Number</label>
            <input type="number" className="px-[20px] py-[20px]"/>
            <label htmlFor="" className="text-gray-500 text-xl">Add Features</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" className="px-[20px] py-[20px]" placeholder="e.g. file uploading" />
            <input type="text" className="px-[20px] py-[20px]" placeholder="e.g. setting up a domain" />
            <input type="text" className="px-[20px] py-[20px]" placeholder="e.g. hosting" />
            <label htmlFor="" className="text-gray-500 text-xl">Price</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;