import React, { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

const Uploader = ({ handleSave }) => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);

      const img = new Image();
      img.src = URL.createObjectURL(selectedFile);
      img.onload = () => {
        setImage(URL.createObjectURL(selectedFile));
        setError(null);
      };
    }
  };

  const handleDelete = () => {
    setFileName("No file chosen");
    setImage(null);
    setError(null);
  };

  const handleUpload = () => {
    if (file && !error) {
      handleSave(file); // Call handleSave with the selected file
      setFileName("No file chosen");
      setImage(null);
      setError(null);
    }
  };

  return (
    <main>
      <form
        action=""
        onClick={() => document.querySelector(".input-filed").click()}
        className="flex flex-col justify-center items-center border-[2px] border-dashed h-[400px] w-[500px] cursor-pointer rounded-lg border-dark-blue"
      >
        <input
          type="file"
          accept="image/*"
          className="input-filed hidden"
          onChange={handleFileChange}
        />
        {image ? (
          <img src={image} alt={fileName} width={290} height={250} />
        ) : (
          <>
            <MdCloudUpload className="text-blue-500" size={60} />
            <p>Browse Files to upload</p>
          </>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <section className="mt-[20px] flex items-center gap-2">
        <AiFillFileImage />
        <span className="flex items-center gap-[140px]">
          {fileName}
          {fileName !== "No file chosen" && (
            <MdDelete className="cursor-pointer" onClick={handleDelete} />
          )}
        </span>
        {image && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleUpload}
          >
            Upload
          </button>
        )}
      </section>
    </main>
  );
};

export default Uploader;
