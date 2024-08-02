const Order = require("../Model/orderModel");
const { Gig } = require("../Model/gigModel");
const User = require("../Model/userModel");
exports.placedOrder = async (req, res) => {
  try {
    const { gigId, price } = req.body;
    const { user } = req;

    const gig = await Gig.findById(gigId);

    if (!gig || !user) {
      return res
        .status(404)
        .json({ success: false, message: "Gig or User not found" });
    }

    // Use findOne instead of find
    let testingorder = await Order.findOne({ buyer: user._id });

    // Check if testingorder exists
    if (!testingorder) {
      // If testingorder doesn't exist, create a new order
      testingorder = new Order({ buyer: user._id });
    }

    // Set properties of the order
    testingorder.isActive = true;
    testingorder.price = price;

    // Save the order
    await testingorder.save();

    return res.status(200).json({testingorder });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const { user } = req;
    const orders = await Order.find({
      $or: [{ buyer: user._id }],
      isActive: true,
    })
      .populate({
        path: "gig",
        populate: {
          path: "category", // Populate the category field in the gig model
        },
      })
      .populate("buyer")
      .populate("seller");

    res.json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
exports.getAllOrdersSeller = async (req, res) => {
  try {
    const { user } = req;
    const orders = await Order.find({
      $or: [{ seller: user._id }],
      isActive: true,
    })
      .populate({
        path: "gig",
        populate: {
          path: "category",
        },
      })
      .populate("buyer")
      .populate("seller");

    res.json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
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
exports.uploadDocumentSeller = async (req, res) => {
  try {
    const value = process.env.url + req.file.bucket + "/" + req.file.key;
    const { user } = req;
    const { orderId } = req.body;
    console.log(value);

    const isMatchUser = await User.findById(user._id);
    const isMatchOrder = await Order.findOne({ _id: orderId });

    if (!isMatchOrder || !isMatchUser) {
      return res
        .status(404)
        .json({ success: false, message: "Order or User not found" });
    }

    isMatchOrder.sellerDocumentUrl = value;
    isMatchOrder.status = "Completed";
    console.log(isMatchOrder);
    await isMatchOrder.save();

    return res.status(200).json({ success: true, isMatchOrder });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
exports.getAllOrdersCompleted = async (req, res) => {
  try {
    const { user } = req;
    const orders = await Order.find({
      $or: [{ buyer: user._id }],
      status: "Completed",
    })
      .populate({
        path: "gig",
        populate: {
          path: "category", // Populate the category field in the gig model
        },
      })
      .populate("buyer")
      .populate("seller");

    res.json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
exports.markCompletedProject = async (req, res) => {
  try {
    const { id } = req.body;
    const isMatchOrder = await Order.findOne({ _id: id });
    isMatchOrder.orderCompleted = true;
    (isMatchOrder.isActive = false), await isMatchOrder.save();
    res.json({ isMatchOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
