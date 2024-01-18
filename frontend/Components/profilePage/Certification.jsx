import React, { useState } from "react";
import { toast } from "react-toastify";
import CertificationBox from "./CertificationBox";
import { deleteCertification } from "../../Api/userApi";
import { useDispatch } from "react-redux";
import { deleteCertificationState } from "../../redux/slice/userSlice";
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
      dispatch(deleteCertificationState({ updatedField: response.user }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="certification">
      <div className=" flex flex-row justify-between px-[26px]">
        <h1 className=" font-semibold text-lg">Certification</h1>
        <button
          onClick={showdescription}
          className=" text-blue-700 hover:underline"
        >
          Add New
        </button>
      </div>
      {showParagraph && (
        <div className="flex flex-col  gap-8  px-[26px] mt-3 ">
          {certifications && certifications?.map((e, index) => {
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
        <div className="mr-3 ml-3 mb-10 bg-gray-200  px-[26px] mt-5 border-[1px] border-current rounded-md">
          <input
            type="text"
            placeholder="Certificate or Award"
            className="mt-5 w-[400px] py-2 px-2 text-[18px]"
            onChange={handleChange}
            name="certificateName"
          />
          <input
            type="text"
            placeholder="Certified From (E.G. coursera)"
            className="mt-5 w-[400px] py-2 px-2 text-[18px]"
            onChange={handleChange}
            name="platform"
          />

          <input
            type="text"
            placeholder="Year"
            className="mt-5 w-[200px] py-2 px-2 text-[18px]"
            onChange={handleChange}
            name="certficateDate"
          />
          <div className="mt-5  py-2 px-2 text-sm">
            <label htmlFor="fileInput" className="fileInputLabel">
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

          <div className="flex flex-row justify-center gap-5 py-4 border-t-[1px] border-dark-black mt-3">
            <button
              onClick={disabledesc}
              className="bg-white py-2 px-[65px] text-[18px] text-gray-400 font-bold rounded-md border-[1px] border-current hover:bg-dark-black hover:text-white"
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
              className=" bg-dark-black text-white py-2 px-[65px] text-[18px] font-bold rounded-md hover:bg-black"
            >
              Update
            </button>
          </div>
        </div>
      )}
      {/* <hr className="ml-5 mr-5 border-[1px] my-3" /> */}
    </div>
  );
};

export default Certification;
