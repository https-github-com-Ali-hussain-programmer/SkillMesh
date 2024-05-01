const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderName: {
    type: String,
    required: true,
  },
  orderDescription: {
    type: String,
  },
  orderPrice: {
    type: Number,
    required: true,
  },
  orderCompletionDate: {
    type: Date,
    required: true,
  },
  orderCompleted: {
    type: Boolean,
    default: false,
  },
  orderStatus: {
    type: String,
    enum: ["Pending", "Completed", "Disputed", "Refunded"],
    default: "Pending",
  },
  orderCreatedDate: {
    type: Date,
    default: Date.now,
  },
  gig: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gig",
    required: true,
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  buyerDocumentUrl: {
    type: String,
  },
  sellerDocumentUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Order", orderSchema);
