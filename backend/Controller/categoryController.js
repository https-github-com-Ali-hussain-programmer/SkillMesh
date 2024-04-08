const { Category, SubField } = require("../Model/categoryModel");

exports.getCategories = async (req, res) => {
  try {
    const category = await Category.find({}).populate({
      path: "subField",
      select: "category imageUrl name",
    });
    return res.status(200).json(category);
  } catch (error) {
    console.log(error);
  }
};
