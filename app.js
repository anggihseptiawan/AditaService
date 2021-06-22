require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const flash = require("connect-flash");

const adminRouter = require("./routes/admin");
const indexRouter = require("./routes/index");

// api router
const apiCareerRouter = require("./routes/api/career");
const apiNewsRouter = require("./routes/api/news");
const apiEventsRouter = require("./routes/api/events");

const app = express();
app.use(cookieParser());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 60000 },
	})
);
app.use(flash());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/admin", adminRouter);

// app.use(cors);
app.use("/api/career", cors(), apiCareerRouter);
app.use("/api/events", cors(), apiEventsRouter);
app.use("/api/news", cors(), apiNewsRouter);

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
