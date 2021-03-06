const { Events } = require("../models");

exports.renderPage = async (req, res) => {
	try {
		const events = await Events.findAll();
		const user = req.cookies.email;
		res.render("pages/events", { title: "Events", events, user });
	} catch (error) {
		res.sendStatus(400).json(error);
	}
};

exports.postEventsPage = (req, res) => {
	const user = req.cookies.email;
	res.render("pages/events/postevent", { title: "Events", user });
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
		const user = req.cookies.email;
		res.render("pages/events/editevent", {
			title: "Events",
			id_event,
			event,
			user,
		});
	} catch (error) {
		console.log(error);
	}
};

exports.updateEvent = async (req, res) => {
	const { path } = req.file;
	const image = path.replace(/public/g, "");
	const { id_event, title, schedule, content } = req.body;
	const data = {
		title,
		image,
		schedule,
		content,
	};
	try {
		const response = await Events.update(data, {
			where: {
				id_event,
			},
		});
		res.redirect("/admin/events");
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
		res.redirect("/admin/events");
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
		res.redirect("/admin/events");
	} catch (error) {
		console.log(error);
	}
};
