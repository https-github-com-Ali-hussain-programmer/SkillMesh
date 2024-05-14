const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ["Pending", "Completed", "Disputed", "Refunded"],
    default: "Pending",
  },
  orderName: {
    type: String,
  
  },
  orderDescription: {
    type: String,
  },
  orderPrice: {
    type: Number,
   
  },
  orderCompletionDate: {
    type: Date,
   
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
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  buyerDocumentUrl: {
    type: String,
  },
  sellerDocumentUrl: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Order", orderSchema);
