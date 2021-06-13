exports.isLogin = () => {
	const login = document.cookie.split(";").some((item) => {
		return item.includes("login=true") ? "yess" : "noo";
	});
	return login;
};
