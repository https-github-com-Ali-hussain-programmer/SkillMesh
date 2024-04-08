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

    const category = await Category.findById("66130132e570cd52bf829fc1"); // Find category by ID
    var user;
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const parsedBasicPkg = JSON.parse(basicPkg);
    const parsedStandardPkg = JSON.parse(standardPkg);
    const parsedPremiumPkg = JSON.parse(premiumPkg);
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
          name: parsedBasicPkg.name,
          price: parsedBasicPkg.price,
          desc: parsedBasicPkg.packageDesc,
          delivery: parsedBasicPkg.deliveryTime,
          revision: 2,
          pages: parsedBasicPkg.noOfPages,
          functionalities: [parsedBasicPkg.offeringDetails],
        },
        {
          name: parsedStandardPkg.name,
          price: parsedStandardPkg.price,
          desc: parsedStandardPkg.packageDesc,
          delivery: parsedStandardPkg.deliveryTime,
          revision: 2,
          pages: parsedStandardPkg.noOfPages,
          functionalities: [parsedStandardPkg.offeringDetails],
        },
        {
          name: parsedPremiumPkg.name,
          price: parsedPremiumPkg.price,
          desc: parsedPremiumPkg.packageDesc,
          delivery: parsedPremiumPkg.deliveryTime,
          revision: 2,
          pages: parsedPremiumPkg.noOfPages,
          functionalities: [parsedPremiumPkg.offeringDetails],
        },
      ],
    });

    if (!Array.isArray(category.gig)) {
      category.gig = [];
    }

    category.gig.push(newGig._id);
    await category.save();

    res
      .status(201)
      .json({ message: "Gig created successfully", user, category });
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
    const {} = req.body;

    res
      .status(201)
      .json({ message: "Gig created successfully", user, category });
  } catch (error) {
    console.error("Error creating gig:", error);
    res.status(500).json({ error: "Failed to create gig" });
  }
};
