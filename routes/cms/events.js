const express = require("express");
const router = express.Router();
const uploadFile = require("../../middleware/uploadfile");
const upload = uploadFile.upload;
const EventsController = require("../../controllers/EventsController");

/* GET users listing. */
router.get("/", EventsController.renderPage);
router.get("/postevent", EventsController.postEventsPage);

router.post("/addevent", upload.single("image"), EventsController.addEvent);

module.exports = router;
