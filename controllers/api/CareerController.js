const { Career } = require("../../models");

exports.allCareer = async (req, res) => {
	try {
		const careers = await Career.findAll();
		res.status(200).json({ status: true, data: careers });
	} catch (error) {
		res.status(500).json({ status: false, message: error });
	}
};
