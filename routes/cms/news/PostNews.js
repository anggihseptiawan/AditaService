var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
	res.render("pages/news/PostNews", { title: "News" });
});

module.exports = router;
