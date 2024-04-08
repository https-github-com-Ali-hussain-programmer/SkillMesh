const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  gig: { type: mongoose.Schema.Types.ObjectId, ref: "Gig", required: true },
  addedAt: { type: Date, default: Date.now },
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
