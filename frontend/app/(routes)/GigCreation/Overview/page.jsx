"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import Categories from "../../../../Components/GigCreation/Overview/Category";
import GigTitle from "../../../../Components/GigCreation/Overview/GigTitle";
import SearchTag from "../../../../Components/GigCreation/Overview/SearchTags";
import { useRouter } from "next/navigation";
import Package from "../../../../Components/GigCreation/Package";
import { useSelector } from "react-redux";
import Uplaoder from "../../../../Components/GigCreation/img/Uplaoder";
import { createGig } from "../../../../Api/gigApi";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../../redux/slice/userSlice";
import { updateCategory } from "../../../../redux/slice/categorySlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "@chakra-ui/react";

const Overview = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const categories = useSelector((state) => state?.category);
  const [selectedCategory, setSelectedCatgory] = useState("");
  const [selectedSubfield, setSelectedSubfield] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const dispatch = useDispatch();
  const [laoder, setLaoder] = useState(false);

  const handleSave = async () => {
    setLaoder(true);
    const response = await createGig(
      file,
      desc,
      title,
      tags,
      selectedSubfield,
      selectedCategory,
      packageState.basic,
      packageState.standard,
      packageState.premium
    );

    const info = response.user;
    dispatch(setUserData({ info }));
    dispatch(updateCategory(response.category));
    router.replace("/profile");
  };
  const [packageState, setPackage] = useState({
    basic: {
      name: "basic",
      packageDesc: "",
      offeringDetails: [],
      noOfPages: "",
      deliveryTime: "",
      price: "",
      revisions: "",
    },
    standard: {
      name: "standard",
      packageDesc: "",
      offeringDetails: [],
      noOfPages: "",
      deliveryTime: "",
      price: "",
      revisions: "",
    },
    premium: {
      name: "premium",
      packageDesc: "",
      offeringDetails: [],
      noOfPages: "",
      deliveryTime: "",
      price: "",
      revisions: "",
    },
  });

  const allFieldsFilled =
    title.trim() !== "" &&
    selectedCategory.trim() !== "" &&
    selectedSubfield.trim() !== "" &&
    desc.trim() !== "" &&
    packageState.basic.packageDesc.trim() !== "" &&
    packageState.basic.noOfPages.trim() !== "" &&
    packageState.basic.price.trim() !== "" &&
    packageState.basic.revisions.trim() !== "" &&
    packageState.basic.deliveryTime.trim() !== "" &&
    packageState.standard.packageDesc.trim() !== "" &&
    packageState.standard.noOfPages.trim() !== "" &&
    packageState.standard.price.trim() !== "" &&
    packageState.standard.revisions.trim() !== "" &&
    packageState.standard.deliveryTime.trim() !== "" &&
    packageState.premium.packageDesc.trim() !== "" &&
    packageState.premium.noOfPages.trim() !== "" &&
    packageState.premium.price.trim() !== "" &&
    packageState.premium.revisions.trim() !== "" &&
    packageState.premium.deliveryTime.trim() !== "";
  // const tagsFields = tags.every((item) => item.trim() !== "");
  const isButtonEnable = allFieldsFilled;

  const handleChange = (e, pkgType) => {
    const { name, value } = e.target;
    setPackage((prevPackage) => ({
      ...prevPackage,
      [pkgType]: {
        ...prevPackage[pkgType],
        [name]: value,
      },
    }));
  };
  const handleOffering = (functionalities, pkgType) => {
    setPackage((prevPackage) => ({
      ...prevPackage,
      [pkgType]: {
        ...prevPackage[pkgType],
        offeringDetails: functionalities,
      },
    }));
  };
  const handleTitleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 1200) {
      setDesc(inputValue);
    }
  };

  const handleEmpty = () => {
    // toast("All Feilds are Required");
    toast.error("All Feilds are Required", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
  };

  return (
    <div className="w-full">
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

      {/* GigCreation Pricing Scope */}
      <div className="max-w-[1100px] rounded mx-[230px] mt-[100px]">
        <h1 className="text-[25px] font-bold pb-5">Scope & Pricing</h1>
        <h2 className="px-5 text-[20px] font-semibold">Basic Package</h2>
        <Package
          packageDetails={packageState.basic}
          handleChange={(e) => handleChange(e, "basic")}
          handleOffering={handleOffering}
        />
        <h2 className="px-5 text-[20px] font-semibold">Standard Package</h2>
        <Package
          packageDetails={packageState.standard}
          handleChange={(e) => handleChange(e, "standard")}
          handleOffering={handleOffering}
        />
        <h2 className="px-5 text-[20px] font-semibold">Premium Package</h2>
        <Package
          packageDetails={packageState.premium}
          handleChange={(e) => handleChange(e, "premium")}
          handleOffering={handleOffering}
        />
      </div>
      {/* GigCreation Deccription */}

      <div className="ml-[230px] mr-[293px] pt-[100px] text-[35px] mb-11 border-b-2 ">
        <div>
          <h1 className="mb-[30px] font-bold">Description</h1>
        </div>
      </div>
      <div className="max-w-[1070px] basic-right h-[300px] border-[1px] rounded mx-[230px] mt-[10px]">
        <h3 className="text-[20px]  py-6 px-8">Briefly Describe Your Gig</h3>
        <textarea
          value={desc}
          onChange={handleTitleChange}
          name=""
          id=""
          cols="20"
          rows="5"
          className="mx-8 w-[90%] py-4 px-7 border-[1px] text-[18px] resize-none"
          placeholder="About Gig"
        ></textarea>
        <p className="flex justify-end mr-[70px] text-red-600">
          {desc.length} / 1200 characters
        </p>
      </div>

      {/* GigCreation img  */}
      <div className="ml-[230px] mr-[293px] pt-[100px] text-[35px] mb-11 border-b-2 ">
        <div>
          <h1 className="mb-[30px] font-bold">Images(up to 3)</h1>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-[1200px] basic-right h-[500px] border-[1px] rounded ml-[230px]  mr-[293px] mt-[10px]">
        <Uplaoder setFile={setFile} />
      </div>

      {isButtonEnable && file ? (
        <button
          onClick={handleSave}
          // disabled={!isButtonEnable}
          className="bg-dark-blue text-white py-4 px-8 ml-[1120px] mb-10 mt-8 rounded-xl hover:bg-blue-950"
        >
          Save & Continue
        </button>
      ) : (
        <button
          onClick={handleEmpty}
          // disabled={!isButtonEnable}
          className="bg-dark-blue text-white py-4 px-8 ml-[1120px] mb-10 mt-8 rounded-xl hover:bg-blue-950"
        >
          Save & Continue
        </button>
      )}

      {laoder ? (
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-dark-blue font-bold text-[20px]">
            Wait Gig in Progress{" "}
          </span>
          <Spinner color="blue.500" />{" "}
        </div>
      ) : null}
    </div>
  );
};

export default Overview;
