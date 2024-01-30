"use client";
import React, { useState } from "react";
import Categories from "../../../../Components/GigCreation/Overview/Category";
import GigTitle from "../../../../Components/GigCreation/Overview/GigTitle";
import SearchTag from "../../../../Components/GigCreation/Overview/SearchTags";
import {
  setGigTitle,
  setGigCategory,
  setGigSubField,
  setGigTags,
} from "../../../../redux/slice/gigcreationslice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Overview = () => {
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subfields, setSubfields] = useState([]);
  const [seletSubField, setSeletSubField] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const router = useRouter();

  const dispatch = useDispatch();
  const putOverview = () => {
    // dispatch(setGigTitle(title));
    // dispatch(setGigCategory(selectedCategory));
    // dispatch(setGigSubField(seletSubField));
    // dispatch(setGigTags(tags));
    localStorage.setItem("title", title);
    localStorage.setItem("selectedCategory", selectedCategory);
    localStorage.setItem("subfields", JSON.stringify(subfields));
    localStorage.setItem("seletSubField", seletSubField);
    localStorage.setItem("tags", JSON.stringify(tags));
    router.push("./Pricing")
  };

  return (
    <div className="w-full h-[1000px]">
      <div className="max-w-[1100px] border-[1px] rounded mx-[230px] mt-[100px] pb-28">
        <GigTitle title={title} setTitle={setTitle} />
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          subfields={subfields}
          setSubfields={setSubfields}
          seletSubField={seletSubField}
          setSeletSubField={setSeletSubField}
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
