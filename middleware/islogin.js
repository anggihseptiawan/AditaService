const isLogin = (req, res, next) => {
	if (req.cookies.login != "true") {
		res.redirect("/admin/auth");
	} else {
		next();
	}
};

module.exports = isLogin;
