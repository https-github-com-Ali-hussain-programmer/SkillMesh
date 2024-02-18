const { Category, SubField } = require("../Model/categoryModel");
const { initialCategories ,initialSubFields } = require("./data");
const seedingCategories = async () => {
  const count = await Category.countDocuments();
  if (count > 0) return;
  try {
    const categories = await Category.insertMany(initialCategories);
    const subfields = await SubField.find();
    for (const category of categories) {
      const matchingSubfields = subfields.filter(
        (subfield) => subfield.category === category.categoryName
      );
      category.subField = matchingSubfields.map((subfield) => subfield._id);
      await category.save();
    }
  } catch (error) {
    console.log(error);
  }
};

const seedingSubFields = async () => {
  const count = await SubField.countDocuments();
  if (count > 0) return;

  try {
    await SubField.insertMany(initialSubFields);
 
  } catch (error) {
    console.log(error);
  }
};
module.exports = { seedingCategories, seedingSubFields };
