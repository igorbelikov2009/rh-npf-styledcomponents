"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.AgreeSpan = exports.AgreeTitle = exports.ContainerAgree = exports.CheckboxInput = exports.SwitchChecker = exports.Checker = exports.StyledCheckBox = void 0;
var styled_components_1 = require("styled-components");
exports.StyledCheckBox = styled_components_1["default"].label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  display: flex;\n  align-items: flex-start;\n  position: relative;\n  cursor: pointer;\n  margin-bottom: 24px;\n"], ["\n  user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  display: flex;\n  align-items: flex-start;\n  position: relative;\n  cursor: pointer;\n  margin-bottom: 24px;\n"])));
exports.Checker = styled_components_1["default"].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 20px;\n  height: 20px;\n  border: 2px solid #95bef0;\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: 2px;\n  left: 2px;\n\n  &:hover {\n    border: 3px solid #95bef0;\n  }\n\n  &:hover::before {\n    content: \"\";\n    width: 10px;\n    height: 10px;\n    margin: auto;\n    background-color: transparent;\n  }\n"], ["\n  width: 20px;\n  height: 20px;\n  border: 2px solid #95bef0;\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: 2px;\n  left: 2px;\n\n  &:hover {\n    border: 3px solid #95bef0;\n  }\n\n  &:hover::before {\n    content: \"\";\n    width: 10px;\n    height: 10px;\n    margin: auto;\n    background-color: transparent;\n  }\n"])));
exports.SwitchChecker = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  content: \"\";\n  width: 10px;\n  height: 10px;\n\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  background-color: #00d2ff;\n  transform: scale(1.2);\n  transition: all 0.2s linear;\n\n  display: ", ";\n"], ["\n  content: \"\";\n  width: 10px;\n  height: 10px;\n\n  position: absolute;\n  top: 7px;\n  left: 7px;\n  background-color: #00d2ff;\n  transform: scale(1.2);\n  transition: all 0.2s linear;\n\n  display: ", ";\n"])), function (_a) {
    var checkedValue = _a.checkedValue;
    return (checkedValue ? "block" : "none");
});
exports.CheckboxInput = styled_components_1["default"].input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: none;\n"], ["\n  display: none;\n"])));
exports.ContainerAgree = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 42px;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 42px;\n"])));
exports.AgreeTitle = styled_components_1["default"].span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 13px;\n  line-height: 16px;\n  color: #5a646e;\n"], ["\n  font-size: 13px;\n  line-height: 16px;\n  color: #5a646e;\n"])));
exports.AgreeSpan = styled_components_1["default"].span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 16px;\n  color: #666e76;\n"], ["\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 16px;\n  color: #666e76;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
