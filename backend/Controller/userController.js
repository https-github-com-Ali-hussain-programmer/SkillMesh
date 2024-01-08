const crypto = require("crypto");
const ethers = require("ethers");
const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");

exports.generateNonce = async (req, res) => {
  const nonce = crypto.randomBytes(32).toString("hex");
  res.json({ nonce });
};

exports.Login = async (req, res) => {
  try {
    const { signedmessage, address, message } = req.body;
    const recoveredAddress = ethers.verifyMessage(message, signedmessage);
    if (recoveredAddress !== address) {
      return res.status(401).json({ error: "Invalid Signature" });
    }
    const existingUser = await User.findOne({ address: recoveredAddress });
    if (existingUser) {
      return existingUser.saveCookie(res, 200);
    }
    const newUser = new User({ address: recoveredAddress });
    await newUser.save();
    newUser.saveCookie(res, 200);
  } catch (error) {
    console.error("Error in Login:", error);
    return res.status(500).json({ error: "Server Error" });
  }
};

exports.authToken = async (req, res) => {
  const { user } = req;
  return res
    .status(200)
    .json({ success: true, message: "You are  Authenticated", user });
};
exports.Logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).send("200");
};
exports.profile = async (req, res) => {
  try {
    const { id } = req.body;

    const existingUser = await User.findOne({ _id: id });
    if (existingUser) {
      return res
        .status(200)
        .cookie("token", token, options)
        .json({ success: true, user: existingUser, message: "User Found" });
    } else {
      res.status(404).json({ success: false, message: "User Not Found" });
    }
  } catch (error) {
    console.error("Error in Login:", error);
    return res.status(500).json({ error: "Server Error" });
  }
};
exports.updateProfile = async (req, res) => {
  try {
    const { id, item } = req.body;  
    const key = Object.keys(item);
    const updatedField = await User.findByIdAndUpdate(
      id,
      { $set: { ...item } },
      { new: true }
    ).select(key[0]);
  
    return res.status(200).json({
      success: true,
      updatedField,
      messgae: "Successfully Updated Field",
    });
  } catch (error) {
    console.error("Error in Update:", error);
    return res.status(500).json({ error: "Server Error" });
  }
};
