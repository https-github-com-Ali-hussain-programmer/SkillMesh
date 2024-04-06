const { Category, SubField } = require("../Model/categoryModel");
const { Package, Gig, Review } = require("../Model/gigModel");
const User = require("../Model/userModel");
exports.createGig = async (req, res) => {
  try {
    const newGig = await Gig.create();
    await newGig.save( );
  } catch (error) {
    consoel.log(error);
  }
};

