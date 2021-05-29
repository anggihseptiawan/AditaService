const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.render("pages/events", { title: "Events" });
});

router.get("/postevents", function (req, res) {
	res.render("pages/events/postevents", { title: "Events" });
});

module.exports = router;
