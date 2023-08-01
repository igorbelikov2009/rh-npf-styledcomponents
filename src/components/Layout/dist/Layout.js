"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var Footer_1 = require("../Footer");
var styled_components_1 = require("styled-components");
var StyledLayout = styled_components_1["default"].main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 1920px;\n  margin: 0 auto;\n  position: relative;\n"], ["\n  width: 100%;\n  max-width: 1920px;\n  margin: 0 auto;\n  position: relative;\n"])));
var Layout = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Footer_1["default"], null)));
};
exports["default"] = Layout;
var templateObject_1;
