import React, { useState } from "react";
import { toast } from "react-toastify";
import CertificationBox from "./CertificationBox";
import { deleteCertification } from "../../Api/userApi";
import { useDispatch } from "react-redux";
import { deleteCertificationState } from "../../redux/slice/userSlice";
import { years } from "../../utils/data";
const Certification = ({ certifications, handleUpdate, id }) => {
  const [showBlock, setShowBlock] = useState(false);
  const [showParagraph, setShowParagraph] = useState(true);
  const dispatch = useDispatch();
  const [CertificationsDetail, setCertficationsDetail] = useState({
    certificateName: "",
    platform: "",
    certficateDate: "",
    certificationImage: "",
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
    var { value, name } = e.target;
    if (name === "certificationImage") {
      const { files } = e.target;
      value = files[0];
    }
    setCertficationsDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handledeleteCertification = async (index) => {
    try {
      const response = await deleteCertification(id, index);
      dispatch(
        deleteCertificationState({ updatedField: response.updatedField })
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`certification  flex flex-col gap-2 py-2 ${
        certifications?.length > 0
          ? "border-b-[1px] border-solid border-[#ddd]"
          : null
      }`}
    >
      <div className=" flex flex-row justify-between ">
        <h1 className="text-[16px] font-[700] text-[#0E0E0F]">Certification</h1>
        <button
          onClick={showdescription}
          className=" text-[#00698C] hover:underline text-sm"
        >
          Add New
        </button>
      </div>
      {showParagraph && (
        <div className="flex flex-col  gap-8   mt-3 ">
          {certifications &&
            certifications?.map((e, index) => {
              return (
                <CertificationBox
                  key={index}
                  e={e}
                  onclick={() => handledeleteCertification(index)}
                />
              );
            })}
        </div>
      )}

      {showBlock && (
        <div className="mb-5 bg-[#f4f4f4] p-4 gap-2 flex flex-col items-center  border-[1px] border-[#e5e5e5] rounded-[3px]">
          <input
            type="text"
            placeholder="Certificate or Award"
            className="  w-full focus:outline-none font-[400] text-[16px]  bg-white border-[1px] border-solid border-[#c5c6c9] text-[#404145] rounded-[4px] py-[8px] px-[12px] placeholder:text-[#7a7d85] placeholder:text-[15px] placeholder:font-[400] placeholder:text-justify"
            onChange={handleChange}
            name="certificateName"
          />
          <input
            type="text"
            placeholder="Certified From (E.G. coursera)"
            className="  w-full focus:outline-none font-[400] text-[16px]  bg-white border-[1px] border-solid border-[#c5c6c9] text-[#404145] rounded-[4px] py-[8px] px-[12px] placeholder:text-[#7a7d85] placeholder:text-[15px] placeholder:font-[400] placeholder:text-justify"
            onChange={handleChange}
            name="platform"
          />
          <select
            name="certficateDate"
            className="w-full focus:outline-none font-[400] text-[16px] bg-white border-[1px] border-solid border-[#c5c6c9] text-[#404145] rounded-[4px] py-[8px] px-[12px] placeholder:text-[#7a7d85] placeholder:text-[15px] placeholder:font-[400] placeholder:text-justify"
            onChange={handleChange}
            value={CertificationsDetail.certficateDate}
          >
            {years?.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className={option.className}
              >
                {option.label}
              </option>
            ))}
          </select>

          <div className="  w-full focus:outline-none font-[400] text-[16px]  bg-white border-[1px] border-solid border-[#c5c6c9] text-[#404145] rounded-[4px] py-[8px] px-[12px] placeholder:text-[#7a7d85] placeholder:text-[15px] placeholder:font-[400] placeholder:text-justify">
            <label
              htmlFor="fileInput"
              className="fileInputLabel text-[#777]  text-sm font-[400]"
            >
              Add Certification Proof (JPEG, JPG, PNG){" "}
              <span className="text-red-500">*</span>:
            </label>
            <input
              type="file"
              id="fileInput"
              placeholder="Add Certification Image"
              className=""
              onChange={handleChange}
              name="certificationImage"
              accept="image/*"
            />
          </div>

          <div className="flex flex-row justify-center gap-5 py-4  mt-2 w-full">
            <button
              onClick={disabledesc}
              className="bg-white text-[#777]  w-[calc(100%-15px)] font-[600]  hover:text-[#1dbf73] py-[10px] px-[30px] text-sm  rounded-[3px]  border border-solid border-[#ccc]"
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                if (CertificationsDetail.certificationImage === "") {
                  return toast.error("Compulsory To Add Proof", {
                    position: "top-right",
                    autoClose: 3000,
                  });
                }

                const formData = new FormData();
                formData.append("id", id);
                formData.append(
                  "certificateName",
                  CertificationsDetail.certificateName
                );
                formData.append("platform", CertificationsDetail.platform);
                formData.append(
                  "certficateDate",
                  CertificationsDetail.certficateDate
                );
                formData.append(
                  "images",
                  CertificationsDetail.certificationImage
                );
                handleUpdate(formData);
                setShowBlock(false);
                setShowParagraph(true);
                setCertficationsDetail({
                  certificateName: "",
                  platform: "",
                  certficateDate: "",
                  certificationImage: "",
                });
              }}
              className="bg-[#1dbf73] text-white w-[calc(100%-15px)] py-[10px] px-[30px] text-sm font-bold rounded-[3px]  border border-solid border-transparent"
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certification;
