"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _auth = _interopRequireDefault(require("../middlewares/auth"));

var _authControler = require("../controller/authControler");

var _sanitizeAndValidate = require("../utils/sanitizeAndValidate");

var router = _express["default"].Router();

var diskStorage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "src/public/img");
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

var uplode = (0, _multer["default"])({
  storage: diskStorage
});
router.post("/signup", uplode.single("image"), _sanitizeAndValidate.validateSignup, _sanitizeAndValidate.isRequestValidate, _authControler.Signup);
router.post("/login", _sanitizeAndValidate.validateLogin, _sanitizeAndValidate.isRequestValidate, _authControler.Login);
router.get("/profile", _auth["default"], _authControler.Profile);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=auth.js.map