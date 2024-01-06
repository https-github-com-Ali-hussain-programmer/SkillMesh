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
    unique: true,
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

userSchema.methods.generateJWT = function () {
  return jwt.sign({ address: this.address }, process.env.JWT_KEY, {
    expiresIn: "1h",
  });
};
userSchema.methods.saveCookie = function (res, statuscode) {
  const token = this.generateJWT();
  const options = {
    maxAge: 3600000,
    httpOnly: true,
    secure: true,
    SameSite: "none",
  };
  res
    .status(statuscode)
    .cookie("token", token, options)
    .json({ success: true, user: this, token });
};

module.exports = mongoose.model("User", userSchema);
