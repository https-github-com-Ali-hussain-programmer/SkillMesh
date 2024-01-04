const router = require("express").Router();
const cookieParser = require("cookie-parser");
const { generateNonce, Login } = require("../Controller/userController");
router.route("/nonce").get(generateNonce);
router.route("/Login").post(Login);

module.exports = router;
