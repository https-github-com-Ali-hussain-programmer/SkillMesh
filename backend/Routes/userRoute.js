const router = require("express").Router();
const {
  generateNonce,
  Login,
  authToken,
  Logout,
  profile,
  updateProfile,
  updatePic,
  updateCertification,
  deleteCertification 
} = require("../Controller/userController");

const verifyToken = require("../Middleware/verifyToken");
const uploadPics = require("../Middleware/profileUpload.js");
const profilePic = uploadPics("profilePics");
const CertificationPic = uploadPics("certificationsPic");
const cookieParser = require("cookie-parser");
router.use(cookieParser());
router.route("/nonce").get(generateNonce);
router.route("/Login").post(Login);
router.route("/secure").get(verifyToken, authToken);
router.route("/Logout").get(Logout);
router.route("/profile").get(profile);
router.route("/update/profile").patch(updateProfile);
router.route("/update/profile/pic").patch(profilePic, updatePic);
router.route("/update/profile/certificate").patch(CertificationPic,updateCertification);
router.route("/update/profile/deleteCertificate").patch(deleteCertification);
module.exports = router;
 