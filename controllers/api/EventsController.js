const { Events } = require("../../models");

exports.allEvents = async (req, res) => {
	try {
		const events = await Events.findAll();
		res.status(200).json({ status: true, data: events });
	} catch (error) {
		res.status(500).json({ status: false, message: error });
	}
};
