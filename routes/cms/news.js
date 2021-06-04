const express = require("express");
const router = express.Router();
const { upload } = require("../../middleware/uploadfile");
const NewsController = require("../../controllers/NewsController");

router.get("/", NewsController.renderPage);

router.get("/postnews", NewsController.postNewsPage);
router.post("/addnews", upload, NewsController.addNews);

router.get("/edit/:id", NewsController.editNewsPage);
router.post("/updatenews", upload, NewsController.updateNews);

router.get("/delete/:id", NewsController.deleteNews);

module.exports = router;
