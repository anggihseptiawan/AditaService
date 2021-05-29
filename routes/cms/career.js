var express = require("express");
var router = express.Router();
const careerController = require("../../controllers/CareerController");

/* GET users listing. */
router.get("/", careerController.renderPage);

router.get("/postcareer", careerController.postCareerPage);
router.post("/postcareer", careerController.postCareer);

router.get("/edit/:id", careerController.editCareerPage);
router.post("/updatecareer", careerController.updateCareer);

router.get("/delete/:id", careerController.deleteCareer);

module.exports = router;
