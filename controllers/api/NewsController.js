const { News } = require("../models");

exports.renderPage = async (req, res) => {
	try {
		const news = await News.findAll();
		res.render("pages/news", { title: "News", news });
	} catch (error) {
		console.log(error);
	}
};

exports.postNewsPage = async (req, res) => {
	try {
		res.render("pages/news/postnews", { title: "News" });
	} catch (error) {
		console.log(error);
	}
};

exports.addNews = async (req, res) => {
	const { path } = req.file;
	const image = path.replace(/public/g, "");
	const { title, content } = req.body;
	const data = { title, image, content };
	try {
		const response = await News.create(data);
		res.redirect("/news");
	} catch (error) {
		console.log(error);
	}
};

exports.editNewsPage = async (req, res) => {
	const id_news = req.params.id;
	try {
		const response = await News.findAll({
			where: {
				id_news,
			},
		});
		const news = response[0];
		res.render("pages/news/editnews", { title: "News", id_news, news });
	} catch (error) {
		console.log(error);
	}
};

exports.updateNews = async (req, res) => {
	const { id_news, title, image, content } = req.body;
	const data = { title, image, content };
	try {
		const response = News.update(data, {
			where: {
				id_news,
			},
		});
		res.redirect("/news");
	} catch (error) {
		console.log(error);
	}
};

exports.deleteNews = async (req, res) => {
	const id_news = req.params.id;
	try {
		const response = await News.destroy({
			where: {
				id_news,
			},
		});
		res.redirect("/news");
	} catch (error) {
		console.log(error);
	}
};
