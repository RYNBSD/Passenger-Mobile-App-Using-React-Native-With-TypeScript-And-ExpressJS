const router = require('express').Router();

const { loginController, signupController, resetPasswordController } = require("../controllers/authControllers");
const { loginMiddleware, signupMiddleware, resetPasswordMiddleware } = require("../middleware/authMiddleware");

router.post("/login", loginMiddleware, loginController);
router.post("/signup", signupMiddleware, signupController);
router.post("/reset/password", resetPasswordMiddleware, resetPasswordController);

module.exports = router;