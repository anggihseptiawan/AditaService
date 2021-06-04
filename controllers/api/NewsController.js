const { News } = require("../../models");

exports.allNews = async (req, res) => {
	try {
		const news = await News.findAll();
		res.status(200).json({ status: true, data: news });
	} catch (error) {
		res.status(500).json({ status: false, message: error });
	}
};
