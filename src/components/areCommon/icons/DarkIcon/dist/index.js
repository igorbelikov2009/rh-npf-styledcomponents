"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.StyledDecreasedDarkIcon = exports.StyledDarkIcon = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
exports.StyledDarkIcon = styled_components_1["default"].img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 24px;\n  width: 24px;\n"], ["\n  height: 24px;\n  width: 24px;\n"])));
exports.StyledDecreasedDarkIcon = styled_components_1["default"].img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 18px;\n  width: 18px;\n"], ["\n  height: 18px;\n  width: 18px;\n"])));
var DarkIcon = function (_a) {
    var icon = _a.icon, isDecreased = _a.isDecreased;
    if (isDecreased) {
        return react_1["default"].createElement(exports.StyledDecreasedDarkIcon, { src: "/icons/triple/" + icon + "/Dark.svg", alt: "icon" });
    }
    return react_1["default"].createElement(exports.StyledDarkIcon, { src: "/icons/triple/" + icon + "/Dark.svg", alt: "icon" });
};
exports["default"] = DarkIcon;
var templateObject_1, templateObject_2;
