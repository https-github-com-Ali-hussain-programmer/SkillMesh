const router = require("express").Router();
const verifyToken = require("../Middleware/verifyToken");
const {
  placedOrder,
  uploadDocument,
  getAllOrders,
  getAllOrdersSeller,
  uploadDocumentSeller,
  getAllOrdersCompleted,
  markCompletedProject
} = require("../Controller/orderController.js");
const documentUpload = require("../Middleware/documentsUpload.js");

const documentPlaced = documentUpload("orderPlaced");
router.route("/placeOrder").post(verifyToken, placedOrder);
router.route("/getAllOrders").post(verifyToken, getAllOrders);
router.route("/getAllOrders-seller").post(verifyToken, getAllOrdersSeller);
router.route("/upload").post(documentPlaced, uploadDocument);
router.route("/uploadproject").post(verifyToken,documentPlaced, uploadDocumentSeller);
router.route("/getAllOrdersCompleted").post(verifyToken, getAllOrdersCompleted);
router.route("/markCompletedProject").post(verifyToken, markCompletedProject);
module.exports = router;
