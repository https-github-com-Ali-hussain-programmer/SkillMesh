"use client";
import React, { useState } from "react";
import Categories from "../../../../Components/GigCreation/Overview/Category";
import GigTitle from "../../../../Components/GigCreation/Overview/GigTitle";
import SearchTag from "../../../../Components/GigCreation/Overview/SearchTags";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Overview = () => {
  const [title, setTitle] = useState("");
  const categories = useSelector((state) => state?.category);
  const [selectedCategory, setSelectedCatgory] = useState("");
  const [selectedSubfield, setSelectedSubfield] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const router = useRouter();
  const putOverview = () => {
    localStorage.setItem("title", title);
    localStorage.setItem("selectedCategory", selectedCategory);
    localStorage.setItem("selectedSubField", selectedSubfield);
    localStorage.setItem("tags", JSON.stringify(tags));
    router.push("./Pricing");
  };
  return (
    <div className="w-full h-[1000px]">
      <div className="max-w-[1100px] border-[1px] rounded mx-[230px] mt-[100px] pb-28">
        <GigTitle title={title} setTitle={setTitle} />
        <Categories
          categories={categories.data}
          SelectedCategory={setSelectedCatgory}
          SelectedSubfield={setSelectedSubfield}
        />
        <SearchTag
          tags={tags}
          setTags={setTags}
          tagInput={tagInput}
          setTagInput={setTagInput}
        />
      </div>
      <button
        onClick={putOverview}
        className="bg-dark-blue text-white py-4 px-8 ml-[1150px] mt-6 rounded-xl hover:bg-blue-950"
      >
        Save & Continue
      </button>
    </div>
  );
};

export default Overview;
