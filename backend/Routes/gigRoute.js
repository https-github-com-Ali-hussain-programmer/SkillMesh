const router = require("express").Router();
const { createGig } = require("../Controller/gigController.js");
const uploadPics = require("../Middleware/profileUpload.js");

const gigPics = uploadPics("GigPics");

router.route("/createGig").post(gigPics, createGig);
module.exports = router;
