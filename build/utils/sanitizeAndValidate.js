"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRequestValidate = exports.validateLogin = exports.validateSignup = void 0;

var _expressValidator = require("express-validator");

var validateSignup = [(0, _expressValidator.check)("about").not().isEmpty().withMessage("About cannot be empty"), (0, _expressValidator.check)("name").not().isEmpty().withMessage("Name cannot be empty").isLength({
  max: 15
}).withMessage("Max length is 15 characters.").isAlphanumeric().withMessage("Cannot contain special characters or numbers"), (0, _expressValidator.check)("email").not().isEmpty().withMessage("Email cannot be empty").isEmail().withMessage("Not a valid email"), (0, _expressValidator.check)("password").not().isEmpty().withMessage("Password cannot be empty").isLength({
  min: 6
}).withMessage("Password must have atleast 6 cracters")];
exports.validateSignup = validateSignup;
var validateLogin = [(0, _expressValidator.check)("email").not().isEmpty().withMessage("Email cannot be empty").isEmail().withMessage("Not a valid email"), (0, _expressValidator.check)("password").not().isEmpty().withMessage("Password cannot be empty").isLength({
  min: 6
}).withMessage("Password must have atleast 6 cracters")];
exports.validateLogin = validateLogin;

var isRequestValidate = function isRequestValidate(req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  next();
};

exports.isRequestValidate = isRequestValidate;
//# sourceMappingURL=sanitizeAndValidate.js.map