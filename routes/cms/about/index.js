var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.render("pages/about", { title: "About" });
});

module.exports = router;
