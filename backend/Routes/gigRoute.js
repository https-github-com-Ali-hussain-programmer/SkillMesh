const router = require("express").Router();
const verifyToken = require("../Middleware/verifyToken");
const {
  createGig,
  wishlistGig,
  getGig,
  fetchGigbyCategory,
  fetchGigbyid
} = require("../Controller/gigController.js");
const uploadPics = require("../Middleware/profileUpload.js");

const gigPics = uploadPics("GigPics");

router.route("/createGig").post(verifyToken, gigPics, createGig);
router.route("/getGig").get(verifyToken, getGig);
router.route("/wishlisteGig").post(verifyToken, wishlistGig);
router.route("/fetchGigbyCategory").post(verifyToken, fetchGigbyCategory);
router.route("/fetchGigbyid").post(verifyToken, fetchGigbyid);
module.exports = router;

