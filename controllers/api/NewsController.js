const { News } = require("../../models");

exports.allNews = async (req, res) => {
	try {
		const news = await News.findAll();
		res.status(200).json({ status: true, data: news });
	} catch (error) {
		res.status(500).json({ status: false, message: error });
	}
};

exports.newsDetail = async (req, res) => {
	const { id_news } = req.params;
	try {
		const getNews = await News.findAll({
			where: {
				id_news,
			},
		});
		const news = getNews[0];
		res.status(200).json({ status: true, data: news });
	} catch (error) {
		res.status(500).json({ status: false, message: error });
	}
};
