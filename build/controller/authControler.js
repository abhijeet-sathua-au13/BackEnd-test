"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Profile = exports.Login = exports.Signup = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _userSchema = _interopRequireDefault(require("../models/schemas/userSchema"));

var _hashPass = require("../utils/hashPass");

var Signup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, name, password, about, image, user, hashPassword;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, email = _req$body.email, name = _req$body.name, password = _req$body.password, about = _req$body.about;
            image = req.file;

            if (image) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              data: {},
              errors: [{
                value: req.file.path,
                msg: "image field cannot be empty",
                param: "image",
                location: "file"
              }]
            }));

          case 5:
            if (!(image.size > 500000)) {
              _context.next = 8;
              break;
            }

            console.log(image.size);
            return _context.abrupt("return", res.status(400).json({
              data: {},
              errors: [{
                value: req.file.size,
                msg: "image size must be less then 500kb",
                param: "image",
                location: "file"
              }]
            }));

          case 8:
            _context.next = 10;
            return _userSchema["default"].find({
              email: email
            });

          case 10:
            user = _context.sent;

            if (!user.length) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              data: {},
              errors: [{
                value: req.body.email,
                msg: "User already exists.",
                param: "email",
                location: "body"
              }],
              message: "Unable to create user"
            }));

          case 13:
            _context.next = 15;
            return (0, _hashPass.hash)(password, 10);

          case 15:
            hashPassword = _context.sent;
            user = new _userSchema["default"]({
              email: email,
              name: name,
              about: about,
              image: image.path,
              password: hashPassword
            });
            _context.next = 19;
            return user.save();

          case 19:
            res.status(200).json({
              data: {},
              errors: [],
              message: "Signed Up successfully!!"
            });
            _context.next = 25;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 22]]);
  }));

  return function Signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.Signup = Signup;

var Login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, email, password, user, matchPassword, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context2.next = 4;
            return _userSchema["default"].findOne({
              email: email
            });

          case 4:
            user = _context2.sent;

            if (user) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              data: {},
              errors: [{
                value: email,
                msg: "User not exist.",
                param: "email",
                location: "body"
              }],
              message: "Invalid credentials"
            }));

          case 7:
            matchPassword = _bcrypt["default"].compareSync(password, user.password);

            if (matchPassword) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              data: {},
              errors: [{
                value: password,
                msg: "Invalid password !",
                params: "password",
                location: "body"
              }],
              message: "Invalid credentials"
            }));

          case 12:
            token = _jsonwebtoken["default"].sign({
              id: user._id
            }, process.env.jwt_secret, {
              expiresIn: "1d"
            });
            res.status(200).json({
              data: {
                token: token
              },
              errors: [],
              message: "Login successfully!"
            });

          case 14:
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0.message);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 16]]);
  }));

  return function Login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.Login = Login;

var Profile = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$user, name, email, about, image;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$user = req.user, name = _req$user.name, email = _req$user.email, about = _req$user.about, image = _req$user.image; // console.log(image);

            try {
              res.status(200).json({
                data: {
                  name: name,
                  email: email,
                  about: about,
                  image: image
                },
                errors: [],
                message: "Fetched data form user"
              });
            } catch (err) {
              console.log(err.message);
            }

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function Profile(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.Profile = Profile;
//# sourceMappingURL=authControler.js.map