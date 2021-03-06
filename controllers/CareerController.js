const { Career } = require("../models");

exports.renderPage = async (req, res) => {
	try {
		const careers = await Career.findAll();
		const user = req.cookies.email;
		res.render("pages/career", { title: "Career", careers, user });
	} catch (error) {
		console.log(error);
	}
};

exports.postCareerPage = (req, res) => {
	const user = req.cookies.email;
	res.render("pages/career/postcareer", { title: "Career", user });
};

exports.postCareer = async (req, res) => {
	const { title, qualification, description, duedate } = req.body;
	const data = {
		title,
		qualification,
		description,
		duedate,
	};
	try {
		await Career.create(data);
		res.redirect("/admin/career");
	} catch (error) {
		console.log(error);
	}
};

exports.editCareerPage = async (req, res) => {
	const id_career = req.params.id;
	const response = await Career.findAll({
		where: {
			id_career,
		},
	});
	const career = response[0];
	const user = req.cookies.email;
	res.render("pages/career/editcareer", {
		title: "Career",
		id_career,
		career,
		user,
	});
};

exports.updateCareer = async (req, res) => {
	const { id_career, title, qualification, description, duedate } = req.body;
	const data = {
		title,
		qualification,
		description,
		duedate,
	};
	try {
		const response = await Career.update(data, {
			where: {
				id_career,
			},
		});
		res.redirect("/admin/career");
	} catch (error) {
		console.log(error);
	}
};

exports.deleteCareer = async (req, res) => {
	const id_career = req.params.id;
	try {
		const response = await Career.destroy({
			where: {
				id_career,
			},
		});
		res.redirect("/admin/career");
	} catch (error) {
		console.log(error);
	}
};
