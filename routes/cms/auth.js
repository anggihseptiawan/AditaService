var express = require("express");
var router = express.Router();
const authController = require("../../controllers/AuthController");

router.get("/", authController.renderPage);
router.post("/handleLogin", authController.handleLogin);

module.exports = router;
