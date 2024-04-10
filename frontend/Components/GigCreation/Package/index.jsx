import React, { useState } from "react";

const Package = ({ packageDetails, handleChange, handleOffering }) => {
  const {
    packageDesc,
    offeringDetails,
    noOfPages,
    deliveryTime,
    price,
    revisions,
    name,
  } = packageDetails;

  const noOfPagesOptions = [1, 2, 4, 6, 8, 10, 12, 15, 17, 19, 21, 23, 25];
  const revisionsdata = [1, 2, 4, 6];

  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState(offeringDetails || []);

  const handleTagInput = (e) => {
    setTagInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      handleOffering(tags, name);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  const deliveryTimeOptions = [1, 2, 4, 6, 8, 11, 13, 15];

  return (
    <div className="flex justify-start gap-7 flex-wrap py-6 px-5">
      <textarea
        className="w-full focus:outline-none h-[100px] font-[400] text-[16px] bg-transparent resize-none overflow-scroll rounded-lg border-[2px] border-solid border-[#e5e5e5] text-[#7a7d85] px-5 py-5 placeholder:text-[#7a7d85] placeholder:text-[15px] placeholder:font-[400] placeholder:text-justify"
        name="packageDesc"
        value={packageDesc}
        onChange={handleChange}
        placeholder="Package Description"
        maxLength="600"
        minLength="150"
      ></textarea>
      <textarea
        name="price"
        value={price}
        onChange={handleChange}
        rows={1}
        className="resize-none border-[2px] border-solid border-[#e5e5e5] py-3 px-3 rounded-xl outline-none w-[250px] text-gray-400"
        placeholder="Price"
      ></textarea>

      <select
        name="noOfPages"
        value={noOfPages}
        onChange={handleChange}
        className="border-[2px] border-solid border-[#e5e5e5] py-3 px-3 rounded-xl outline-none w-[250px] text-gray-400"
      >
        <option value="">No of pages or screens</option>

        {noOfPagesOptions.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <select
        name="deliveryTime"
        value={deliveryTime}
        onChange={handleChange}
        className="border-[2px] border-solid border-[#e5e5e5] py-3 px-3 rounded-xl outline-none w-[250px] text-gray-400"
      >
        <option value="">Delivery Time</option>

        {deliveryTimeOptions.map((item, index) => (
          <option value={item} key={index}>
            {item} DAY DELIVERY
          </option>
        ))}
      </select>
      <select
        name="revisions"
        value={revisions}
        onChange={handleChange}
        className="border-[2px] border-solid border-[#e5e5e5] py-3 px-3 rounded-xl outline-none w-[250px] text-gray-400"
      >
        <option value="">Revisions</option>

        {revisionsdata?.map((item, index) => (
          <option value={item} key={index}>
            {item} revisions
          </option>
        ))}
      </select>
      <div>
        <div className="flex gap-2 mb-3">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-200 rounded-lg px-2 py-1"
            >
              <span>{tag}</span>
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="ml-1 text-gray-500"
              >
                X
              </button>
            </div>
          ))}
        </div>

        <input
          name="offeringDetails"
          value={tagInput}
          onChange={handleTagInput}
          rows={1}
          className="resize-none overflow-hidden border-[1px] rounded-xl border-black w-[250px] py-3 px-3 text-[black]"
          placeholder="Details of your offering"
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default Package;
