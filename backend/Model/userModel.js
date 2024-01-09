const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: function () {
      const shortenedAddress = `${this.address.substring(
        0,
        7
      )}...${this.address.slice(-10)}`
      return "user" + shortenedAddress
    },
  },
  avatar: {
    type: String,
    required: true,
    default:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=740&t=st=1704575090~exp=1704575690~hmac=0786cc1472f3c71ba1cfa0d6f6762088857c237e8a2d0d2d4c5d340be7e6c192",
  },
  address: {
    type: String,
    unique: true,
    required: [true, "Please Enter Account Address"],
  },
  description: {
    type: String,
    default:"show yourself to the world"
  },
  isSeller: {
    type: Boolean,
    default: false,
  },
  skills: {
    type: [Object],
  },
  languages: {
    type: [Object],
  },
  country: {
    type: String,
    default:"United States"
  },
  education: {
   type: [Object],
  },
  certifications: {
    type: [Object],
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
