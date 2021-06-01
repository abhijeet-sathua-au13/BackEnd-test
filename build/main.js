"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _mongo = _interopRequireDefault(require("./models/configs/mongo"));

require("dotenv").config();

(0, _mongo["default"])();
var app = (0, _express["default"])();
var Port = process.env.PORT || 5001;
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.get("/health", function (req, res) {
  res.send("Health check ok!");
});
app.use("/api", _auth["default"]);
app.listen(Port, function (err, req, res) {
  if (err) {
    console.log(err.message);
  }

  console.log("app running on http://localhost:".concat(Port));
});
//# sourceMappingURL=main.js.map