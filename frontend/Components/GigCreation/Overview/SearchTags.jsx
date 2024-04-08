import React, { useState } from "react";

const SearchTags = ({ tags, setTags, tagInput, setTagInput }) => {
  const addTag = () => {
    if (tagInput.trim() !== "" && tags.length < 5) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  return (
    <div className="flex px-10 gap-[60px]">
      <div className="flex-[1]">
        <h3 className="text-[22px] font-semibold">Search tags</h3>
        <p className="pt-[10px] text-[18px]">
          Tag your Gig with buzz words that are relevant to the services you
          offer. Use all 5 tags to get found.
        </p>
      </div>
      <div className="flex-[2]">
        <h3 className="text-[22px] font-semibold">Positive keywords</h3>
        <p className="pt-[10px] text-[18px] text-gray-400">
          Enter search terms you feel your buyers will use when <br /> looking
          for your service.
        </p>
        <div className="tags-container py-5">
          <div className=" flex items-center gap-5">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="tag px-3 py-3 rounded-full  bg-slate-300"
              >
                {tag}
                <button onClick={() => removeTag(index)}>&times;</button>
              </div>
            ))}
          </div>

          <input
            type="text"
            className="w-full border-[1px] border-black mt-5 py-3 px-3 text-[20px]"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addTag();
              }
            }}
          />
        </div>
        <p className="text-[16px] pt-2 text-gray-400">
          5 tags maximum. Use letters and numbers only.
        </p>
      </div>
    </div>
  );
};

export default SearchTags;
