"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.LinkTitle = exports.IconContainer = exports.StyledLink = exports.Container = exports.StyledNewsPage = void 0;
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
exports.StyledNewsPage = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding: 24px;\n  box-sizing: border-box;\n  margin-top: 72px;\n\n  @media screen and (min-width: 576px) {\n    padding-top: 48px;\n    padding-left: 24px;\n    padding-right: 24px;\n    padding-bottom: 24px;\n  }\n"], ["\n  width: 100%;\n  padding: 24px;\n  box-sizing: border-box;\n  margin-top: 72px;\n\n  @media screen and (min-width: 576px) {\n    padding-top: 48px;\n    padding-left: 24px;\n    padding-right: 24px;\n    padding-bottom: 24px;\n  }\n"])));
exports.Container = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 660px;\n  margin: 0 auto;\n"], ["\n  width: 100%;\n  max-width: 660px;\n  margin: 0 auto;\n"])));
exports.StyledLink = styled_components_1["default"](react_router_dom_1.Link)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 24px;\n  display: flex;\n  cursor: pointer;\n  text-decoration: none;\n  outline: none;\n"], ["\n  margin-bottom: 24px;\n  display: flex;\n  cursor: pointer;\n  text-decoration: none;\n  outline: none;\n"])));
exports.IconContainer = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transform: rotate(90deg);\n"], ["\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transform: rotate(90deg);\n"])));
exports.LinkTitle = styled_components_1["default"].p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 16px;\n  line-height: 24px;\n  color: #96a0aa;\n  display: block;\n  margin-left: 12px;\n\n  &:hover {\n    color: black;\n  }\n"], ["\n  font-size: 16px;\n  line-height: 24px;\n  color: #96a0aa;\n  display: block;\n  margin-left: 12px;\n\n  &:hover {\n    color: black;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
