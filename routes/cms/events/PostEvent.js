var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
	res.render("pages/events/PostEvents", { title: "Events" });
});

module.exports = router;
