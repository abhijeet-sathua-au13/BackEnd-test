"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var mongoUri = "mongodb+srv://Abhijeet-Sathua:8797218788Aa@cluster0.ka2fe.mongodb.net/mediaUsers?retryWrites=true&w=majority";

function mongoInit() {
  return _mongoInit.apply(this, arguments);
}

function _mongoInit() {
  _mongoInit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _mongoose["default"].connect(mongoUri, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            });

          case 3:
            console.log("Mongo DB connect succesfully");
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _mongoInit.apply(this, arguments);
}

var _default = mongoInit;
exports["default"] = _default;
//# sourceMappingURL=mongo.js.map