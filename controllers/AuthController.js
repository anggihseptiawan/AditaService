const { Auth } = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.renderPage = async (req, res) => {
	try {
		const alertMessage = req.flash("alertMessage");
		const alertStatus = req.flash("alertStatus");
		const alert = { message: alertMessage, status: alertStatus };
		if (req.cookies.login == "true") {
			res.redirect("/admin/home");
		} else {
			res.render("pages/auth/login", { alert, title: "Login" });
		}
	} catch (error) {
		console.log(error);
	}
};

exports.register = async (req, res) => {
	try {
		const alertMessage = req.flash("alertMessage");
		const alertStatus = req.flash("alertStatus");
		const alert = { message: alertMessage, status: alertStatus };
		res.render("pages/auth/register", { alert, title: "Register" });
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
			const user = await Auth.findAll({
				where: {
					email,
				},
			});
			if (!user[0]) {
				const response = await Auth.create(data);
				if (response) {
					req.flash(
						"alertMessage",
						"Registrasi berhasil, silahkan login.."
					);
					req.flash("alertStatus", "success");
					res.redirect("/admin/auth");
				} else {
					req.flash("alertMessage", "Registrasi gagal..");
					req.flash("alertStatus", "danger");
					res.redirect("/admin/auth/register");
				}
			} else {
				req.flash(
					"alertMessage",
					"User telah terdaftar, silahkan gunakan user lain.."
				);
				req.flash("alertStatus", "danger");
				res.redirect("/admin/auth/register");
			}
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
		if (!user[0]) {
			req.flash("alertMessage", "Email tidak terdaftar..");
			req.flash("alertStatus", "danger");
			res.redirect("/admin/auth");
		} else {
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
					res.redirect("/admin/home");
				} else {
					req.flash("alertMessage", "Password Salah..");
					req.flash("alertStatus", "danger");
					res.redirect("/admin/auth");
				}
			});
		}
	} catch (error) {
		req.flash("alertMessage", "Internal server error..");
		req.flash("alertStatus", "danger");
		res.redirect("/admin/auth");
	}
};

exports.logout = (req, res, next) => {
	res.clearCookie("login");
	res.clearCookie("email");
	res.redirect("/");
};
