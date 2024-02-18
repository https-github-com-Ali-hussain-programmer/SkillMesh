const mongoose = require("mongoose");

const SubFieldSchema = new mongoose.Schema({
  category: String,
  name: {
    type: String,
    unique: true,
  },
});
const SubField = mongoose.model("SubField", SubFieldSchema);
const categorySchema = new mongoose.Schema({
  categoryName: String,
  imageUrl: String,
  subField: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubField" }],
});


const Category = mongoose.model("Category", categorySchema);
module.exports = {
  Category,
  SubField,
};
