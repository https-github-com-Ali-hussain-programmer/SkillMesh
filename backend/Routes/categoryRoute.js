const router = require("express").Router();
const {getCategories} = require("../Controller/categoryController");

router.route("/getCategories").get(getCategories);

module.exports = router;
