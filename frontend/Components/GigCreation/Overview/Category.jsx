import React, { useState } from "react";

const Categories = ({ categories, SelectedCategory, SelectedSubfield }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubfield, setSelectedSubfield] = useState("");

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    const selectedCategoryObj = categories.find(
      (category) => category._id === categoryId
    );
    setSelectedCategory(categoryId);
    SelectedCategory(categoryId);
    setSelectedSubfield("");
  };

  const handleSubFieldChange = (e) => {
    const subFieldId = e.target.value;
    setSelectedSubfield(subFieldId);
    SelectedSubfield(subFieldId);
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
            {categories?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.categoryName}
              </option>
            ))}
          </select>
          <select
            className="border-[1.5px] border-solid border-[#ccc] p-3 outline-none w-[50%] md:w-[45%] my-5"
            onChange={handleSubFieldChange}
            value={selectedSubfield}
            disabled={!selectedCategory} // Disable until a category is selected
          >
            <option value="">Select Subfield</option>
            {categories
              .find((cat) => cat._id === selectedCategory)
              ?.subField.map((subfield) => (
                <option key={subfield._id} value={subfield._id}>
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
