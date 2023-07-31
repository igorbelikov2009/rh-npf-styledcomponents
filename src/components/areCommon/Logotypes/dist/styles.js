"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.LogotypeSmall = exports.LogotypeLarge = exports.Container = void 0;
var styled_components_1 = require("styled-components");
exports.Container = styled_components_1["default"].a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  outline: none;\n"], ["\n  text-decoration: none;\n  outline: none;\n"])));
exports.LogotypeLarge = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: none;\n\n  @media screen and (min-width: 576px) {\n    display: block;\n  }\n"], ["\n  display: none;\n\n  @media screen and (min-width: 576px) {\n    display: block;\n  }\n"])));
exports.LogotypeSmall = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n\n  @media screen and (min-width: 576px) {\n    display: none;\n  }\n"], ["\n  display: block;\n\n  @media screen and (min-width: 576px) {\n    display: none;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
