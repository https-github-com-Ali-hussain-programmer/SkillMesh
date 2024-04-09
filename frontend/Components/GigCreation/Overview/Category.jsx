import React, { useState } from "react";

const Categories = ({ categories, SelectedCategory, SelectedSubfield}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubfield, setSelectedSubfield] = useState("");

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;

    const selectedCategoryObj = categories.find(
      (category) => category._id === categoryId
    );
    SelectedCategory(categoryId);
    setSelectedCategory(selectedCategoryObj.categoryName);
    setSelectedSubfield("");
  };

  const handleSubFieldChange = (e) => {
    const subField = e.target.value;
    setSelectedSubfield(subField);
    SelectedSubfield(subField);
  };

  return (
    <div className="flex gap-[60px] px-10 pb-11">
      <div className="flex-[1]">
        <h3 className="text-[22px] font-semibold">Category</h3>
        <p className="pt-[10px] text-[18px]">
          Choose the category and sub-category most suitable for your Gig.
        </p>
      </div>
      <div className="flex-[2]">
        <div className="flex justify-between">
          <select
            className="border-[1.5px] border-solid border-[#ccc] p-3 outline-none w-[50%] md:w-[45%] my-5"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="">Select Category</option>
            {categories?.map((category, index) => (
              <option key={index} value={category._id}>
                {category.categoryName}
              </option>
            ))}
          </select>
          <select
            className="border-[1.5px] border-solid border-[#ccc] p-3 outline-none w-[50%] md:w-[45%] my-5"
            onChange={handleSubFieldChange}
            value={selectedSubfield}
          >
            <option value="">Select Subfield</option>
            {selectedCategory &&
              categories
                .find((cat) => cat.categoryName === selectedCategory)
                ?.subField.map((subfield, index) => (
                  <option key={index} value={subfield._id}>
                    {subfield.name}
                  </option>
                ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Categories;
