var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.render("pages/news", { title: "News" });
});
router.get("/postnews", function (req, res) {
	res.render("pages/news/postnews", { title: "News" });
});

module.exports = router;
