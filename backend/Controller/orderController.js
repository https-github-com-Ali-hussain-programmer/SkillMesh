const Order = require("../Model/orderModel");
const { Gig } = require("../Model/gigModel");
const User = require("../Model/userModel");
exports.placedOrder = async (req, res) => {
  try {
    return res.status(200).json(category);
  } catch (error) {
    console.log(error);
  }
};

exports.uploadDocument = async (req, res) => {
  try {
    const value = process.env.url + req.file.bucket + "/" + req.file.key;
    const { gigId, userId } = req.body;
    const gig = await Gig.findById(gigId);
    const user = await User.findById(userId);

    if (!gig || !user) {
      return res
        .status(404)
        .json({ success: false, message: "Gig or User not found" });
    }

    const order = new Order({
      buyerDocumentUrl: value,
      buyer: userId,
      seller: gig.user,
      gig: gigId,
    });

    await order.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};
