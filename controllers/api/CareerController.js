const { Career } = require("../../models");

exports.allCareer = async (req, res) => {
	try {
		const careers = await Career.findAll();
		res.status(200).json({ status: true, data: careers });
	} catch (error) {
		res.status(500).json({ status: false, message: error });
	}
};

exports.careerDetail = async (req, res) => {
	const { id_career } = req.params;
	try {
		const getCareer = await Career.findAll({
			where: {
				id_career,
			},
		});
		const career = getCareer[0];
		res.status(200).json({ status: true, data: career });
	} catch (error) {
		res.status(500).json({ status: false, message: error });
	}
};
