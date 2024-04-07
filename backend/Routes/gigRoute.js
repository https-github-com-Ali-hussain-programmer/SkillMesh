const router = require("express").Router();
const verifyToken = require("../Middleware/verifyToken");
const { createGig } = require("../Controller/gigController.js");
const uploadPics = require("../Middleware/profileUpload.js");

const gigPics = uploadPics("GigPics");

router.route("/createGig").post(verifyToken,gigPics, createGig);
module.exports = router;
