const express = require("express");
const router = express.Router();
const EventsController = require("../../controllers/api/EventsController");

router.get("/", EventsController.allEvents);
router.get("/:id_event", EventsController.eventDetail);

module.exports = router;
