const mongoose = require("mongoose");

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

const gigSchema = new mongoose.Schema({
  title: String,
  description: String,
  gigimages: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  subField: { type: mongoose.Schema.Types.ObjectId, ref: "SubField" },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  Package: [
    {
      name: String,
      price: Number,
      desc: String,
      delivery: Number,
      revision: Number,
      pages: Number,
      functionalities: [String],
    },
  ],
  tags: [String],
  rating: { type: Number, default: 0 },
});
const gigModel = mongoose.model("Gig", gigSchema);

module.exports = {
  Gig: gigModel,
  Review: reviewModel,
};
