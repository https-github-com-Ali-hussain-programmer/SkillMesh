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
    category.gig.push(newGig._id);
    await category.save();
    await user.save();

    
    res.status(201).json({
      success: true,
      message: "Gig created successfully",
      user,
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
