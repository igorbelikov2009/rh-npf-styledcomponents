"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.BarIcon = exports.BarPosition = exports.BarContainer = exports.Department = exports.Content = exports.Container = exports.StyledManagement = void 0;
var styled_components_1 = require("styled-components");
exports.StyledManagement = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding-left: 24px;\n  padding-right: 24px;\n  position: relative;\n\n  @media screen and (min-width: 576px) {\n    padding-left: 28px;\n    padding-right: 28px;\n  }\n"], ["\n  width: 100%;\n  padding-left: 24px;\n  padding-right: 24px;\n  position: relative;\n\n  @media screen and (min-width: 576px) {\n    padding-left: 28px;\n    padding-right: 28px;\n  }\n"])));
exports.Container = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-width: 1160px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n\n  @media screen and (min-width: 944px) {\n    flex-wrap: nowrap;\n  }\n"], ["\n  max-width: 1160px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n\n  @media screen and (min-width: 944px) {\n    flex-wrap: nowrap;\n  }\n"])));
exports.Content = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  max-width: 760px;\n  width: 100%;\n  order: 1;\n  margin-bottom: 72px;\n\n  @media screen and (min-width: 944px) {\n    order: 0;\n  }\n"], ["\n  max-width: 760px;\n  width: 100%;\n  order: 1;\n  margin-bottom: 72px;\n\n  @media screen and (min-width: 944px) {\n    order: 0;\n  }\n"])));
exports.Department = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 72px 24px 48px;\n  border-bottom: 1px solid #e6f0fa;\n  box-sizing: content-box;\n  margin: 0 auto;\n\n  @media screen and (min-width: 576px) {\n    padding: 72px 0 24px;\n  }\n\n  @media screen and (min-width: 944px) {\n    padding-top: 48px;\n  }\n\n  &:last-of-type {\n    padding-bottom: 124px;\n  }\n"], ["\n  padding: 72px 24px 48px;\n  border-bottom: 1px solid #e6f0fa;\n  box-sizing: content-box;\n  margin: 0 auto;\n\n  @media screen and (min-width: 576px) {\n    padding: 72px 0 24px;\n  }\n\n  @media screen and (min-width: 944px) {\n    padding-top: 48px;\n  }\n\n  &:last-of-type {\n    padding-bottom: 124px;\n  }\n"])));
exports.BarContainer = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  overflow: hidden;\n\n  @media screen and (min-width: 944px) {\n    width: 352px;\n    margin-left: 48px;\n    overflow: hidden;\n  }\n"], ["\n  width: 100%;\n  overflow: hidden;\n\n  @media screen and (min-width: 944px) {\n    width: 352px;\n    margin-left: 48px;\n    overflow: hidden;\n  }\n"])));
exports.BarPosition = styled_components_1["default"].aside(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  height: 72px;\n  padding: 24px;\n  top: 0;\n  left: 0;\n  box-shadow: 0 4px 6px rgb(155, 194, 229);\n  background: #fff;\n  overflow-x: auto;\n  display: inline-flex;\n  transition: box-shadow 0.3s;\n\n  position: ", ";\n\n  &::-webkit-scrollbar {\n    height: 8px;\n    width: 8px;\n    background-color: #f1f1f1;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #c1c1c1;\n    border-radius: 9em;\n  }\n\n  @media screen and (min-width: 944px) {\n    width: auto;\n    height: auto;\n    padding: 0 0 0 48px;\n    left: inherit;\n    box-shadow: none;\n    display: block;\n    margin-top: 48px;\n  }\n"], ["\n  width: 100%;\n  height: 72px;\n  padding: 24px;\n  top: 0;\n  left: 0;\n  box-shadow: 0 4px 6px rgb(155, 194, 229);\n  background: #fff;\n  overflow-x: auto;\n  display: inline-flex;\n  transition: box-shadow 0.3s;\n\n  position: ", ";\n\n  &::-webkit-scrollbar {\n    height: 8px;\n    width: 8px;\n    background-color: #f1f1f1;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #c1c1c1;\n    border-radius: 9em;\n  }\n\n  @media screen and (min-width: 944px) {\n    width: auto;\n    height: auto;\n    padding: 0 0 0 48px;\n    left: inherit;\n    box-shadow: none;\n    display: block;\n    margin-top: 48px;\n  }\n"])), function (_a) {
    var absolute = _a.absolute;
    return (absolute ? "absolute" : "fixed");
});
exports.BarIcon = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  transform: rotate(0.75turn);\n  display: none;\n  position: absolute;\n  top: 0px;\n  left: 0;\n  transition: top 0.3s;\n\n  @media screen and (min-width: 944px) {\n    display: block;\n  }\n"], ["\n  width: 24px;\n  height: 24px;\n  transform: rotate(0.75turn);\n  display: none;\n  position: absolute;\n  top: 0px;\n  left: 0;\n  transition: top 0.3s;\n\n  @media screen and (min-width: 944px) {\n    display: block;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
