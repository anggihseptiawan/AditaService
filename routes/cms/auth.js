var express = require("express");
var router = express.Router();
const authController = require("../../controllers/AuthController");

router.get("/", authController.renderPage);
router.get("/register", authController.register);
router.get("/logout", authController.logout);

router.post("/handleRegister", authController.handleRegister);
router.post("/handleLogin", authController.handleLogin);

module.exports = router;
