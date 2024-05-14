const router = require("express").Router();
const verifyToken = require("../Middleware/verifyToken");
const {
  placedOrder,
  uploadDocument,
} = require("../Controller/orderController.js");
const documentUpload = require("../Middleware/documentsUpload.js");

const documentPlaced = documentUpload("orderPlaced");
router.route("/placeOrder").post(verifyToken, placedOrder);
router.route("/upload").post(documentPlaced, uploadDocument);

module.exports = router;
