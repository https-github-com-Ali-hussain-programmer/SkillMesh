const router = require("express").Router();
const verifyToken = require("../Middleware/verifyToken");
const { placedOrder } = require("../Controller/orderController.js");
const documentUpload = require("../Middleware/documentsUpload.js");

const orderPlacedPics = documentUpload("orderPlaced");
router.route("/placeOrder").post(verifyToken, orderPlacedPics, placedOrder);

module.exports = router;
