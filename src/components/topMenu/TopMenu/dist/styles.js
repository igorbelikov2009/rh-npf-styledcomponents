"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.PersonalArea = exports.PrivateOffice = exports.Contacts = exports.RigthBlock = exports.LeftBlock = exports.Container = exports.Header = void 0;
var styled_components_1 = require("styled-components");
exports.Header = styled_components_1["default"].header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 1920px;\n  margin: 0 auto;\n  height: 72px;\n  position: absolute;\n  top: 0;\n  border-bottom: ", ";\n"], ["\n  width: 100%;\n  max-width: 1920px;\n  margin: 0 auto;\n  height: 72px;\n  position: absolute;\n  top: 0;\n  border-bottom: ", ";\n"])), function (_a) {
    var isBackgroundWhite = _a.isBackgroundWhite;
    return (isBackgroundWhite ? "1px solid #e4e4e4" : "none");
});
exports.Container = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 24px 18px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  @media (min-width: 576px) {\n    padding-left: 28px;\n    padding-right: 28px;\n  }\n"], ["\n  width: 100%;\n  margin: 0 auto;\n  padding: 24px 18px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  @media (min-width: 576px) {\n    padding-left: 28px;\n    padding-right: 28px;\n  }\n"])));
exports.LeftBlock = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"])));
exports.RigthBlock = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-content: space-between;\n"])));
exports.Contacts = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: none;\n\n  @media (min-width: 768px) {\n    display: block;\n  }\n"], ["\n  display: none;\n\n  @media (min-width: 768px) {\n    display: block;\n  }\n"])));
exports.PrivateOffice = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  &:hover .top-menu_title {\n    color: #b5bdc8;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  &:hover .top-menu_title {\n    color: #b5bdc8;\n  }\n"])));
exports.PersonalArea = styled_components_1["default"].p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-left: 12px;\n  font-size: 16px;\n  line-height: 24px;\n  cursor: pointer;\n  display: none;\n\n  @media (min-width: 768px) {\n    display: block;\n  }\n\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"], ["\n  margin-left: 12px;\n  font-size: 16px;\n  line-height: 24px;\n  cursor: pointer;\n  display: none;\n\n  @media (min-width: 768px) {\n    display: block;\n  }\n\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"])), function (_a) {
    var isBackgroundWhite = _a.isBackgroundWhite;
    return (isBackgroundWhite ? "#78828c" : "#b5bdc8;");
}, function (_a) {
    var isBackgroundWhite = _a.isBackgroundWhite;
    return (isBackgroundWhite ? "#000000" : "#ffffff");
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
