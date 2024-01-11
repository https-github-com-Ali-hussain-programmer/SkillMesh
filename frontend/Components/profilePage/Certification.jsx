import React, { useState } from "react";

const Certification = ({ certifications, handleUpdate }) => {
  const [showBlock, setShowBlock] = useState(false);
  const [showParagraph, setShowParagraph] = useState(true);
  const [CertificationsDetail, setCertficationsDetail] = useState({
    certificateName: "",
    platform: "",
    certficateDate: "",
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
    const { value, name } = e.target;
    setCertficationsDetail((prev) => {
      return { ...prev, [name]: value };
    });
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
        <div className="flex items-center gap-2  px-[26px] mt-3 ">
          {certifications?.map((e, index) => {
            return (
              <>
                <div className=" text-[17px] flex-col flex gap-3 " key={index}>
                  <div className="flex items-center gap-2">
                    <span className=" font-[500] text-gray-500">
                      {" "}
                      Certificate-
                    </span>
                    <span className="text-[#333333] font-bold">
                      {e?.certificateName}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className=" font-[500] text-gray-500">
                        Platform-
                      </span>
                      <span className="text-[#333333] font-bold">
                        {e?.platform}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className=" font-[500] text-gray-500">
                        Certificate Date-
                      </span>
                      <span className="text-[#333333] font-bold">
                        {e?.certficateDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className=" font-[500] text-gray-500">Proof</span>
                      <span className="text-[#333333] font-bold"> </span>
                    </div>
                  </div>
                </div>
              </>
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

          <div className="flex flex-row justify-center gap-5 py-4 border-t-[1px] border-dark-black mt-3">
            <button
              onClick={disabledesc}
              className="bg-white py-2 px-[65px] text-[18px] text-gray-400 font-bold rounded-md border-[1px] border-current hover:bg-dark-black hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleUpdate({
                  certifications: {
                    certificateName: CertificationsDetail.certificateName,
                    platform: CertificationsDetail.platform,
                    certficateDate: CertificationsDetail.certficateDate,
                  },
                });
                setShowBlock(false);
                setShowParagraph(true);
                setCertficationsDetail({
                  certificateName: "",
                  platform: "",
                  certficateDate: "",
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
