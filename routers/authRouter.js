const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();
const { identifier } = require("../middlewares/identification");

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.post("/signout", identifier, authController.signout);

router.patch(
  "/send-verification-email",
  identifier,
  authController.sendVerificationCode
);
router.patch(
  "/verify-verification-email",
  identifier,
  authController.verifyVerificationCode
);
router.patch("/change-password", identifier, authController.changePassword);
router.get(
  "/send-forgot-password-code",
  authController.sendForgotPasswordCode
);
router.patch(
  "/verify-forgot-password-code",
  authController.verifyForgotPasswordCode
);
module.exports = router;
