const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
	res.redirect("/admin/auth");
});

module.exports = router;
