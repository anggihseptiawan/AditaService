const { Auth } = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.renderPage = async (req, res) => {
	try {
		res.render("pages/auth/login", { title: "Login" });
	} catch (error) {
		console.log(error);
	}
};

exports.handleLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		console.log({ email, password });
		bcrypt.hash(password, saltRounds, async function (err, hash) {
			const data = {
				email,
				password: hash,
			};
			const response = await Auth.create(data);
		});
	} catch (error) {
		console.log(error);
	}
};
