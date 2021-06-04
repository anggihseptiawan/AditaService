const { Events } = require("../models");
const cloudinary = require("cloudinary").v2;

exports.renderPage = async (req, res) => {
	try {
		const events = await Events.findAll();
		res.render("pages/events", { title: "Events", events });
	} catch (error) {
		res.sendStatus(400).json(error);
	}
};

exports.postEventsPage = (req, res) => {
	res.render("pages/events/postevent", { title: "Events" });
};

exports.editEventsPage = async (req, res) => {
	const id_event = req.params.id;
	try {
		const response = await Events.findAll({
			where: {
				id_event,
			},
		});
		const event = response[0];
		res.render("pages/events/editevent", {
			title: "Events",
			id_event,
			event,
		});
	} catch (error) {
		console.log(error);
	}
};

exports.updateEvent = async (req, res) => {
	const { id_event, title, schedule, content } = req.body;
	const data = {
		title,
		schedule,
		content,
	};
	try {
		const response = await Events.update(data, {
			where: {
				id_event,
			},
		});
		res.redirect("/events");
	} catch (error) {
		console.log(error);
	}
};

exports.addEvent = async (req, res) => {
	const { path } = req.file;
	const image = path.replace(/public/g, "");
	const { title, schedule, content } = req.body;
	const data = { title, image, schedule, content };
	try {
		const add = await Events.create(data);
		res.redirect("/events");
	} catch (error) {
		console.log(error);
		res.sendStatus(400);
	}
};

exports.deleteEvent = async (req, res) => {
	const id_event = req.params.id;
	try {
		const response = await Events.destroy({
			where: {
				id_event,
			},
		});
		res.redirect("/events");
	} catch (error) {
		console.log(error);
	}
};
