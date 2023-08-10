"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Paragraph = exports.Heading = exports.GUIContainer = exports.Container = exports.StyledAdminPanel = void 0;
var styled_components_1 = require("styled-components");
exports.StyledAdminPanel = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding: 24px;\n  margin-top: 72px;\n  margin-bottom: 48px;\n  background-color: #fff;\n\n  @media screen and (min-width: 576px) {\n    padding: 48px 28px;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 72px;\n  }\n"], ["\n  width: 100%;\n  padding: 24px;\n  margin-top: 72px;\n  margin-bottom: 48px;\n  background-color: #fff;\n\n  @media screen and (min-width: 576px) {\n    padding: 48px 28px;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 72px;\n  }\n"])));
exports.Container = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 860px;\n  margin: 0 auto;\n"], ["\n  width: 100%;\n  max-width: 860px;\n  margin: 0 auto;\n"])));
exports.GUIContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 12px;\n"], ["\n  margin-bottom: 12px;\n"])));
exports.Heading = styled_components_1["default"].h1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  max-width: 680px;\n  margin-bottom: 24px;\n  font-size: 18px;\n  line-height: 24px;\n  color: #28323c;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 34px;\n    line-height: 48px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    max-width: 860px;\n  }\n"], ["\n  display: block;\n  width: 100%;\n  max-width: 680px;\n  margin-bottom: 24px;\n  font-size: 18px;\n  line-height: 24px;\n  color: #28323c;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 34px;\n    line-height: 48px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    max-width: 860px;\n  }\n"])));
exports.Paragraph = styled_components_1["default"].h4(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  margin-bottom: 6px;\n  font-size: 16px;\n  line-height: 24px;\n  color: #727476;\n"], ["\n  display: block;\n  width: 100%;\n  margin-bottom: 6px;\n  font-size: 16px;\n  line-height: 24px;\n  color: #727476;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
