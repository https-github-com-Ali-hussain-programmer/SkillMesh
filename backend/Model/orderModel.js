const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: {
    type: Number,
    unique: true,
  },
  
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

// Pre-save middleware to generate orderId
orderSchema.pre('save', async function(next) {
  if (!this.isNew) {
    return next();
  }

  try {
    // Find the highest orderId in existing documents
    const highestOrder = await this.constructor.findOne({}, { orderId: 1 }).sort({ orderId: -1 });
    const newOrderId = highestOrder ? highestOrder.orderId + 1 : 1;
    this.orderId = newOrderId;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("Order", orderSchema);
