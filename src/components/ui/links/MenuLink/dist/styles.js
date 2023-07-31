"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.LinkDarkActive = exports.LinkDark = exports.LinkLightActive = exports.LinkLight = exports.StyledLink = void 0;
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
exports.StyledLink = styled_components_1["default"](react_router_dom_1.Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 24px;\n  margin-left: 20px;\n\n  transition: color 0.22s;\n  transition-duration: 0.22s;\n  transition-timing-function: ease;\n  transition-delay: 0s;\n  transition-property: color;\n"], ["\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 24px;\n  margin-left: 20px;\n\n  transition: color 0.22s;\n  transition-duration: 0.22s;\n  transition-timing-function: ease;\n  transition-delay: 0s;\n  transition-property: color;\n"])));
exports.LinkLight = styled_components_1["default"](exports.StyledLink)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: #b5bdc8;\n  &:hover {\n    color: white;\n  }\n"], ["\n  color: #b5bdc8;\n  &:hover {\n    color: white;\n  }\n"])));
exports.LinkLightActive = styled_components_1["default"](exports.StyledLink)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: 500;\n  color: white;\n"], ["\n  font-weight: 500;\n  color: white;\n"])));
exports.LinkDark = styled_components_1["default"](exports.StyledLink)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: #78828c;\n  &:hover {\n    color: #28323c;\n  }\n"], ["\n  color: #78828c;\n  &:hover {\n    color: #28323c;\n  }\n"])));
exports.LinkDarkActive = styled_components_1["default"](exports.StyledLink)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: 500;\n  color: #28323c;\n"], ["\n  font-weight: 500;\n  color: #28323c;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
