"use strict";
exports.__esModule = true;
var react_1 = require("react");
var logoColored_svg_1 = require("../../../assets/logotype/logoColored.svg");
var logoWhite_svg_1 = require("../../../assets/logotype/logoWhite.svg");
var logoColoredSmall_svg_1 = require("../../../assets/logotype/logoColoredSmall.svg");
var logoWhiteSmall_svg_1 = require("../../../assets/logotype/logoWhiteSmall.svg");
var styles_1 = require("./styles");
var Logotypes = function (_a) {
    var isBackgroundWhite = _a.isBackgroundWhite;
    return (react_1["default"].createElement(styles_1.Container, { href: "#" },
        react_1["default"].createElement(styles_1.LogotypeLarge, null,
            react_1["default"].createElement("img", { src: isBackgroundWhite ? logoColored_svg_1["default"] : logoWhite_svg_1["default"], alt: "logotype" })),
        react_1["default"].createElement(styles_1.LogotypeSmall, null,
            react_1["default"].createElement("img", { src: isBackgroundWhite ? logoColoredSmall_svg_1["default"] : logoWhiteSmall_svg_1["default"], alt: "logotype" }))));
};
exports["default"] = Logotypes;
