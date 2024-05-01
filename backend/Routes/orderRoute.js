const router = require("express").Router();
const verifyToken = require("../Middleware/verifyToken");
const { placedOrder } = require("../Controller/orderController.js");

router.route("/orderPlaced").post(verifyToken, placedOrder);

module.exports = router;
