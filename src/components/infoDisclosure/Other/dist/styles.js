"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Content = exports.Heading = exports.Container = exports.StyledOther = void 0;
var styled_components_1 = require("styled-components");
exports.StyledOther = styled_components_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding: 24px;\n\n  @media screen and (min-width: 576px) {\n    padding: 48px 28px;\n  }\n"], ["\n  width: 100%;\n  padding: 24px;\n\n  @media screen and (min-width: 576px) {\n    padding: 48px 28px;\n  }\n"])));
exports.Container = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n"], ["\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n"])));
exports.Heading = styled_components_1["default"].h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  font-size: 18px;\n  line-height: 24px;\n  color: #5a646e;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 576px) {\n    font-size: 34px;\n    line-height: 48px;\n    margin-bottom: 48px;\n  }\n"], ["\n  display: block;\n  font-size: 18px;\n  line-height: 24px;\n  color: #5a646e;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 576px) {\n    font-size: 34px;\n    line-height: 48px;\n    margin-bottom: 48px;\n  }\n"])));
exports.Content = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
