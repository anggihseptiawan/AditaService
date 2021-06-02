const Events = require("../models/Events");

exports.renderPage = (req, res) => {
	res.render("pages/events", { title: "Events" });
};

exports.postEventsPage = (req, res) => {
	res.render("pages/events/postevents", { title: "Events" });
};

exports.addEvent = (req, res) => {
	console.log(req.body);
	console.log(req.file);
	// try {
	// } catch (error) {
	// 	console.log(error);
	// }
};
