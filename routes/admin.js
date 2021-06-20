const express = require("express");
const router = express.Router();
const isLogin = require("../middleware/islogin");
const { upload } = require("../middleware/uploadfile");
const { Career, Events, News } = require("../models");
const authController = require("../controllers/AuthController");
const careerController = require("../controllers/CareerController");
const EventsController = require("../controllers/EventsController");
const NewsController = require("../controllers/NewsController");

// AUTH PAGE
router.get("/auth", authController.renderPage);
router.get("/auth/register", authController.register);
router.get("/auth/logout", authController.logout);
router.post("/auth/handleRegister", authController.handleRegister);
router.post("/auth/handleLogin", authController.handleLogin);

// AUTH MIDDLEWARE
router.use(isLogin);

// ABOUT PAGE
router.get("/home", async function (req, res, next) {
	try {
		const events = await Events.count();
		const career = await Career.count();
		const news = await News.count();
		const data = { events, career, news };
		res.render("pages/home", { title: "Home", data });
	} catch (error) {
		console.log(error);
	}
});

// ABOUT PAGE
router.get("/about", function (req, res, next) {
	res.render("pages/about", { title: "About" });
});

// CAREERS PAGE
router.get("/career", careerController.renderPage);
router.get("/career/postcareer", careerController.postCareerPage);
router.post("/career/postcareer", careerController.postCareer);
router.get("/career/edit/:id", careerController.editCareerPage);
router.post("/career/updatecareer", careerController.updateCareer);
router.get("/career/delete/:id", careerController.deleteCareer);

// EVENTS PAGE
router.get("/events", EventsController.renderPage);
router.post("/events/addevent", upload, EventsController.addEvent);
router.get("/events/postevent", EventsController.postEventsPage);
router.get("/events/edit/:id", EventsController.editEventsPage);
router.post("/events/updateevent", upload, EventsController.updateEvent);
router.get("/events/delete/:id", EventsController.deleteEvent);

// NEWS PAGE
router.get("/news", NewsController.renderPage);
router.get("/news/postnews", NewsController.postNewsPage);
router.post("/news/addnews", upload, NewsController.addNews);
router.get("/news/edit/:id", NewsController.editNewsPage);
router.post("/news/updatenews", upload, NewsController.updateNews);
router.get("/news/delete/:id", NewsController.deleteNews);

module.exports = router;
