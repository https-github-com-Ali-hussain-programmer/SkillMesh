const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  name: String,
  price: String,
  desc: String,
  delivery: Number,
  revision: Number,
  pages: Number,
  functionalities: [String],
});

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  helpful: {
    yes: {
      type: Number,
      default: 0,
    },
    no: {
      type: Number,
      default: 0,
    },
  },
});
const reviewModel = mongoose.model("Review", reviewSchema);
const packageModel = mongoose.model("Package", packageSchema);
const gigSchema = new mongoose.Schema({
  title: String,
  description: String,
  gigimages: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  subField: { type: mongoose.Schema.Types.ObjectId, ref: "SubField" },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  Package: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Package", min: 0, max: 3 },
  ],
  tags: [String],
});
const gigModel = mongoose.model("Gig", gigSchema);

module.exports = {
  Package: packageModel,
  Gig: gigModel,
  Review: reviewModel,
};
