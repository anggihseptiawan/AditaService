const { Events } = require("../../models");

exports.allEvents = async (req, res) => {
	try {
		const events = await Events.findAll();
		res.status(200).json({ status: true, data: events });
	} catch (error) {
		res.status(500).json({ status: false, message: error });
	}
};

exports.eventDetail = async (req, res) => {
	const { id_event } = req.params;
	try {
		const getEvent = await Events.findAll({
			where: {
				id_event,
			},
		});
		const event = getEvent[0];
		res.status(200).json({ status: true, data: event });
	} catch (error) {
		res.status(500).json({ status: false, message: error });
	}
};
