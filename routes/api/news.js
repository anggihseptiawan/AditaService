const express = require("express");
const router = express.Router();
const NewsController = require("../../controllers/api/NewsController");

router.get("/", NewsController.allNews);

module.exports = router;
