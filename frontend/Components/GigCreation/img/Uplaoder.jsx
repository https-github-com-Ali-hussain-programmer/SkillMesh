"use client";
import React, { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

const Uplaoder = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No file choose");
  const [error, setError] = useState(null);

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
          onChange={({ target: { files } }) => {
            if (files && files[0]) {
              setFileName(files[0].name);

              // Check image dimensions
              const img = new Image();
              img.src = URL.createObjectURL(files[0]);
              img.onload = () => {
                if (img.width <= 1000 && img.height <= 1000) {
                  setImage(URL.createObjectURL(files[0]));
                  setError(null);
                } else {
                  setError("Image dimensions must be 1000x1000.");
                }
              };
            }
          }}
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
          <MdDelete
            className="cursor-pointer"
            onClick={() => {
              setFileName("No selected File");
              setImage(null);
              setError(null);
            }}
          />
        </span>
      </section>
    </main>
  );
};

export default Uplaoder;
