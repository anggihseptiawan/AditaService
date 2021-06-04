const express = require("express");
const router = express.Router();
const { Career, Events, News } = require("../../models");

/* GET home page. */
router.get("/", async function (req, res, next) {
	try {
		const events = await Events.count();
		const career = await Career.count();
		const news = await News.count();
		const data = { events, career, news };
		res.render("pages/home", { title: "Home", data });
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
