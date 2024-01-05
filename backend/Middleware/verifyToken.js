const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");
const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "You are not Authenticated" });
    }
    const data = jwt.verify(token, process.env.JWT_KEY);
    const { address } = data;

    req.user = await User.findOne({ address });

    next();
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};
module.exports = verifyToken;
