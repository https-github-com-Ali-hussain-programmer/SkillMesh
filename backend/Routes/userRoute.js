const router = require("express").Router();
const {
  generateNonce,
  Login,
  authToken,Logout,profile,updateProfile
} = require("../Controller/userController");
const verifyToken = require("../Middleware/verifyToken");
const  cookieParser = require('cookie-parser')
router.use(cookieParser())
router.route("/nonce").get(generateNonce);
router.route("/Login").post(Login);
router.route("/secure").get(verifyToken, authToken);
router.route("/Logout").get(Logout)
router.route("/profile").get(profile)
router.route("/update/profile").patch(updateProfile)

module.exports = router;
