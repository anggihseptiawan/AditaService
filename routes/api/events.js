const express = require("express");
const router = express.Router();
const { upload } = require("../../middleware/uploadfile");
const EventsController = require("../../controllers/EventsController");

/* GET users listing. */
router.get("/", EventsController.renderPage);

router.post("/addevent", upload, EventsController.addEvent);
router.get("/postevent", EventsController.postEventsPage);

router.get("/edit/:id", EventsController.editEventsPage);
router.post("/updateevent", upload, EventsController.updateEvent);

router.get("/delete/:id", EventsController.deleteEvent);

module.exports = router;
