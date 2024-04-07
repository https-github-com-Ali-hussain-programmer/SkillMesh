const { Gig } = require("../Model/gigModel");
const User = require("../Model/userModel");

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

    var user;
    const parsedBasicPkg = JSON.parse(basicPkg);
    const parsedStandardPkg = JSON.parse(standardPkg);
    const parsedPremiumPkg = JSON.parse(premiumPkg);

    const userId = req.user._id;
    const gigimages = process.env.url + req.file.bucket + "/" + req.file.key;
    if (userId) {
      user = await User.findById(userId);
      user.isSeller = true;
      await user.save();
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
          functionalities: [parsedBasicPkg.offeringDetails], // Wrap in array if needed
        },
        {
          name: parsedStandardPkg.name,
          price: parsedStandardPkg.price,
          desc: parsedStandardPkg.packageDesc,
          delivery: parsedStandardPkg.deliveryTime,
          revision: 2,
          pages: parsedStandardPkg.noOfPages,
          functionalities: [parsedStandardPkg.offeringDetails], // Wrap in array if needed
        },
        {
          name: parsedPremiumPkg.name,
          price: parsedPremiumPkg.price,
          desc: parsedPremiumPkg.packageDesc,
          delivery: parsedPremiumPkg.deliveryTime,
          revision: 2,
          pages: parsedPremiumPkg.noOfPages,
          functionalities: [parsedPremiumPkg.offeringDetails], // Wrap in array if needed
        },
      ],
    });
    res
      .status(201)
      .json({ message: "Gig created successfully", user, gig: newGig });
  } catch (error) {
    console.error("Error creating gig:", error);
    res.status(500).json({ error: "Failed to create gig" });
  }
};
