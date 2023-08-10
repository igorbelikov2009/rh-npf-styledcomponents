"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ContainerButton = exports.Paragraph = exports.Date = exports.Title = exports.ID = exports.Container = void 0;
var styled_components_1 = require("styled-components");
exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 860px;\n  border-top: 1px solid #e4e4e4;\n  padding: 24px;\n"], ["\n  width: 100%;\n  max-width: 860px;\n  border-top: 1px solid #e4e4e4;\n  padding: 24px;\n"])));
exports.ID = styled_components_1["default"].h3(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 18px;\n  font-size: 14px;\n  line-height: 18px;\n  color: #28323c;\n"], ["\n  display: block;\n  margin-bottom: 18px;\n  font-size: 14px;\n  line-height: 18px;\n  color: #28323c;\n"])));
exports.Title = styled_components_1["default"].p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 24px;\n  font-size: 18px;\n  line-height: 24px;\n  color: black;\n\n  @media screen and (min-width: 768px) {\n    font-size: 34px;\n    line-height: 48px;\n  }\n"], ["\n  display: block;\n  margin-bottom: 24px;\n  font-size: 18px;\n  line-height: 24px;\n  color: black;\n\n  @media screen and (min-width: 768px) {\n    font-size: 34px;\n    line-height: 48px;\n  }\n"])));
exports.Date = styled_components_1["default"].p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 18px;\n  font-size: 14px;\n  line-height: 18px;\n  color: #28323c;\n"], ["\n  display: block;\n  margin-bottom: 18px;\n  font-size: 14px;\n  line-height: 18px;\n  color: #28323c;\n"])));
exports.Paragraph = styled_components_1["default"].p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: 12px 0;\n  color: #5a646e;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n  vertical-align: baseline;\n  box-sizing: border-box;\n  position: relative;\n  margin-left: 32px;\n"], ["\n  margin: 12px 0;\n  color: #5a646e;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n  vertical-align: baseline;\n  box-sizing: border-box;\n  position: relative;\n  margin-left: 32px;\n"])));
exports.ContainerButton = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 136px;\n  margin-top: 24px;\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  width: 136px;\n  margin-top: 24px;\n  display: flex;\n  justify-content: flex-end;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
