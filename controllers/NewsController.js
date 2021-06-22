const { News } = require("../models");

exports.renderPage = async (req, res) => {
	try {
		const news = await News.findAll();
		const user = req.cookies.email;
		res.render("pages/news", { title: "News", news, user });
	} catch (error) {
		console.log(error);
	}
};

exports.postNewsPage = async (req, res) => {
	try {
		const user = req.cookies.email;
		res.render("pages/news/postnews", { title: "News", user });
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
		res.redirect("/admin/news");
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
		const user = req.cookies.email;
		res.render("pages/news/editnews", { title: "News", id_news, news, user });
	} catch (error) {
		console.log(error);
	}
};

exports.updateNews = async (req, res) => {
	const { path } = req.file;
	const image = path.replace(/public/g, "");
	const { id_news, title, content } = req.body;
	const data = { title, image, content };
	try {
		const response = News.update(data, {
			where: {
				id_news,
			},
		});
		res.redirect("/admin/news");
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
		res.redirect("/admin/news");
	} catch (error) {
		console.log(error);
	}
};
