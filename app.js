require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cloudinary = require("cloudinary").v2;

const homeRouter = require("./routes/cms/home");
const eventsRouter = require("./routes/cms/events");
const newsRouter = require("./routes/cms/news");
const careerRouter = require("./routes/cms/career");
const aboutRouter = require("./routes/cms/about");

const app = express();

// init cloudinary
cloudinary.config({
	cloud_name: process.env.AIRTABLE_CLOUD_NAME,
	api_key: process.env.AIRTABLE_API_KEY,
	api_secret: process.env.AIRTABLE_API_SECRET,
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/events", eventsRouter);
app.use("/news", newsRouter);
app.use("/about", aboutRouter);
app.use("/career", careerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
