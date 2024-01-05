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



