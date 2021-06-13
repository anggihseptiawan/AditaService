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

exports.register = async (req, res) => {
	try {
		res.render("pages/auth/register", { title: "Register" });
	} catch (error) {
		console.log(error);
	}
};

exports.handleRegister = async (req, res) => {
	try {
		const { email, password } = req.body;

		bcrypt.hash(password, saltRounds, async function (err, hash) {
			const data = {
				email,
				password: hash,
			};
			const response = await Auth.create(data);
			res.redirect("/auth");
		});
	} catch (error) {
		console.log(error);
	}
};

exports.handleLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await Auth.findAll({
			where: {
				email,
			},
		});
		const hash = user[0].password;
		bcrypt.compare(password, hash, async function (err, result) {
			if (result) {
				res.cookie("login", "true", {
					expires: new Date(Date.now() + 7200000),
					httpOnly: true,
				});
				res.cookie("email", email, {
					expires: new Date(Date.now() + 7200000),
					httpOnly: true,
				});
				res.redirect("/");
			} else {
				alert("password salah..");
			}
		});
	} catch (error) {
		console.log(error);
	}
};

exports.logout = (req, res, next) => {
	res.clearCookie("login");
	res.clearCookie("email");
	res.redirect("/");
};
