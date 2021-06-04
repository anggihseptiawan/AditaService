const express = require("express");
const router = express.Router();
const EventsController = require("../../controllers/api/EventsController");

/* GET users listing. */
router.get("/", EventsController.allEvents);

module.exports = router;
