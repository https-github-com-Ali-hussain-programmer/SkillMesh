const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
    required: true,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  address: {
    type: String,
    required: [true, "Please Enter Account Address"],
  },
  description: {
    type: String,
  },
  isSeller: {
    type: Boolean,
    default: false,
  },
  skills: {
    type: [String],
  },
  languages: {
    type: [String],
  },
  country: {
    type: String,
  },
  education: {
    type: [String],
  },
  certifications: {
    type: [String],
  },
  memberSince: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
