"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var global_1 = require("./styles/global");
var AppRouter_1 = require("./components/AppRouter");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(AppRouter_1["default"], null),
        react_1["default"].createElement(global_1["default"], null)));
}
exports["default"] = App;
