var express = require("express");
var router = express.Router();
const careerController = require("../../controllers/api/CareerController");

/* GET users listing. */
router.get("/", careerController.allCareer);
router.get("/:id_career", careerController.careerDetail);

module.exports = router;
