const { check } = require("express-validator");

const loginMiddleware = [
  check("email").isEmail().normalizeEmail(),
  check("password").trim().isLength({ min: 8 }).escape(),
];

const signupMiddleware = [
  ...loginMiddleware,
  check("phone").isMobilePhone(),
  check("name").trim().isLength({ min: 5 }).whitelist("[a-zA-Z0-9_]+"),
];

const resetPasswordMiddleware = [
  ...loginMiddleware
];

module.exports = {
  loginMiddleware,
  signupMiddleware,
  resetPasswordMiddleware,
}