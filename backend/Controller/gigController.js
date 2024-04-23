const { Gig } = require("../Model/gigModel");
const User = require("../Model/userModel");
const { Category } = require("../Model/categoryModel");

exports.createGig = async (req, res) => {
  try {
    const {
      title,
      description,
      tags,
      basicPkg,
      standardPkg,
      premiumPkg,
      selectedCategory,
      selectedSubField,
    } = req.body;
    const basic = JSON.parse(basicPkg);
    console.log(basic);
    const standard = JSON.parse(standardPkg);
    const premium = JSON.parse(premiumPkg);
    const category = await Category.findById(selectedCategory).populate(
      "subField"
    );

    var user;
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const userId = req.user._id;
    const gigimages = process.env.url + req.file.bucket + "/" + req.file.key;

    if (userId) {
      user = await User.findById(userId);
      if (user) {
        user.isSeller = true;
        await user.save();
      }
    }

    const newGig = await Gig.create({
      title,
      description,
      tags,
      gigimages: [gigimages],
      user: userId,
      category: selectedCategory,
      subField: selectedSubField,
      Package: [
        {
          name: basic.name,
          price: basic.price,
          desc: basic.packageDesc,
          delivery: basic.deliveryTime,
          revision: basic.revisions,
          pages: basic.noOfPages,
          functionalities: basic.offeringDetails,
        },
        {
          name: standard.name,
          price: standard.price,
          desc: standard.packageDesc,
          delivery: standard.deliveryTime,
          revision: standard.revisions,
          pages: standard.noOfPages,
          functionalities: standard.offeringDetails,
        },
        {
          name: premium.name,
          price: premium.price,
          desc: premium.packageDesc,
          delivery: premium.deliveryTime,
          revision: premium.revisions,
          pages: premium.noOfPages,
          functionalities: premium.offeringDetails,
        },
      ],
    });

    if (!Array.isArray(category.gig)) {
      category.gig = [];
    }

    user.gig.push(newGig._id);
    await user.save();
    category.gig.push(newGig._id);
    await category.save();
    const User2 = await User.findById(user._id).populate({
      path: "gig",
      populate: {
        path: "reviews",
        model: "Review",
      },
    });

    res.status(201).json({
      success: true,
      message: "Gig created successfully",
      user: User2,
      category,
    });
  } catch (error) {
    console.error("Error creating gig:", error);
    res.status(500).json({ error: "Failed to create gig" });
  }
};

exports.wishlistGig = async (req, res) => {
  try {
    const {} = req.body;

    res
      .status(201)
      .json({ message: "Gig created successfully", user, category });
  } catch (error) {
    console.error("Error creating gig:", error);
    res.status(500).json({ error: "Failed to create gig" });
  }
};
exports.getGig = async (req, res) => {
  try {
    const user = req.user;
    const gigs = await Gig.find({ user: user._id })
      .populate("category")
      .populate("subField")
      .populate("reviews");
    console.log(gigs);
    if (!gigs) {
      return res.status(404).json({ message: "Gigs not found for this user" });
    }

    res.status(200).json({ message: "Gigs retrieved successfully", gigs });
  } catch (error) {
    console.error("Error retrieving gigs:", error);
    res.status(500).json({ error: "Failed to retrieve gigs" });
  }
};
exports.fetchGigbyCategory = async (req, res) => {
  try {
    const user = req.user;
    const { categoryName } = req.body;
    console.log(categoryName);
    const category = await Category.findOne({ categoryName }).populate({
      path: "gig",
      populate: [
        { path: "category" },
        { path: "subField" },
        { path: "reviews" },
        { path: "user" },
      ],
    });
    console.log(category);
    const gigs = category.gig;

    console.log(gigs);
    if (!gigs) {
      return res.status(404).json({ message: "Gigs not found for this user" });
    }

    res.status(200).json({ gigs });
  } catch (error) {
    console.error("Error retrieving gigs:", error);
    res.status(500).json({ error: "Failed to retrieve gigs" });
  }
};
exports.fetchGigbyid = async (req, res) => {
  try {
    const { id } = req.body;
    const gig = await Gig.findOne({ _id: id })
      .populate("category")
      .populate("subField")
      .populate("user");

    console.log(gig);
    if (!gig) {
      return res.status(404).json({ message: "Gigs not found for this user" });
    }

    res.status(200).json({ gig });
  } catch (error) {
    console.error("Error retrieving gigs:", error);
    res.status(500).json({ error: "Failed to retrieve gigs" });
  }
};
