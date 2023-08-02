"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Social = exports.CalculationContainer = exports.Sum = exports.Calculation = exports.Storage = exports.Span = exports.Title = exports.Pension = exports.InFutureContainer = exports.InFuture = exports.Container = exports.StyledPensionInfo = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
exports.StyledPensionInfo = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  margin-bottom: 24px;\n  border-top: 1px solid #e4e4e4;\n  border-bottom: 1px solid #e4e4e4;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  @media screen and (min-width: 576px) {\n    width: 29.41%;\n    border-top: none;\n    border-bottom: none;\n    display: block;\n  }\n\n  @media screen and (min-width: 1024px) {\n    display: flex;\n    width: 47.92%;\n  }\n"], ["\n  width: 100%;\n  margin-bottom: 24px;\n  border-top: 1px solid #e4e4e4;\n  border-bottom: 1px solid #e4e4e4;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  @media screen and (min-width: 576px) {\n    width: 29.41%;\n    border-top: none;\n    border-bottom: none;\n    display: block;\n  }\n\n  @media screen and (min-width: 1024px) {\n    display: flex;\n    width: 47.92%;\n  }\n"])));
exports.Container = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (min-width: 576px) {\n    display: block;\n  }\n\n  @media screen and (min-width: 1024px) {\n    display: flex;\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (min-width: 576px) {\n    display: block;\n  }\n\n  @media screen and (min-width: 1024px) {\n    display: flex;\n  }\n"])));
exports.InFuture = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 24px;\n  width: 46.25%;\n  margin-right: 0;\n  margin-bottom: 0;\n  box-sizing: border-box;\n\n  @media screen and (min-width: 576px) {\n    width: 100%;\n    margin-bottom: 24px;\n    border: 1px solid #e4e4e4;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 35.85%;\n    margin-right: 24px;\n    margin-bottom: 0;\n  }\n"], ["\n  padding: 24px;\n  width: 46.25%;\n  margin-right: 0;\n  margin-bottom: 0;\n  box-sizing: border-box;\n\n  @media screen and (min-width: 576px) {\n    width: 100%;\n    margin-bottom: 24px;\n    border: 1px solid #e4e4e4;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 35.85%;\n    margin-right: 24px;\n    margin-bottom: 0;\n  }\n"])));
exports.InFutureContainer = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  border-right: 1px solid #e4e4e4;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media screen and (min-width: 576px) {\n    border-right: none;\n  }\n"], ["\n  width: 100%;\n  border-right: 1px solid #e4e4e4;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media screen and (min-width: 576px) {\n    border-right: none;\n  }\n"])));
exports.Pension = styled_components_1["default"].p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: #28323c;\n  margin-bottom: 96px;\n  font-size: 34px;\n  line-height: 48px;\n\n  @media screen and (min-width: 576px) {\n    margin-bottom: 48px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    margin-bottom: 96px;\n    font-size: 28px;\n    line-height: 48px;\n  }\n"], ["\n  color: #28323c;\n  margin-bottom: 96px;\n  font-size: 34px;\n  line-height: 48px;\n\n  @media screen and (min-width: 576px) {\n    margin-bottom: 48px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    margin-bottom: 96px;\n    font-size: 28px;\n    line-height: 48px;\n  }\n"])));
exports.Title = styled_components_1["default"].p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 13px;\n  color: #5a646e;\n"], ["\n  font-size: 13px;\n  color: #5a646e;\n"])));
exports.Span = styled_components_1["default"].span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: block;\n  font-size: inherit;\n  color: inherit;\n\n  @media screen and (min-width: 576px) {\n    display: inline;\n    margin-bottom: 48px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    display: block;\n    margin-bottom: 0;\n  }\n"], ["\n  display: block;\n  font-size: inherit;\n  color: inherit;\n\n  @media screen and (min-width: 576px) {\n    display: inline;\n    margin-bottom: 48px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    display: block;\n    margin-bottom: 0;\n  }\n"])));
exports.Storage = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 100%;\n  border-right: 1px solid #e4e4e4;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media screen and (min-width: 576px) {\n    border-right: none;\n  }\n"], ["\n  width: 100%;\n  border-right: 1px solid #e4e4e4;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media screen and (min-width: 576px) {\n    border-right: none;\n  }\n"])));
exports.Calculation = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: 100%;\n  padding: 24px;\n\n  &:last-of-type {\n    padding-top: 0;\n    margin-top: 24px;\n  }\n"], ["\n  width: 100%;\n  padding: 24px;\n\n  &:last-of-type {\n    padding-top: 0;\n    margin-top: 24px;\n  }\n"])));
exports.Sum = styled_components_1["default"].p(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  font-size: 18px;\n  line-height: 24px;\n  color: #0a0a0a;\n"], ["\n  font-size: 18px;\n  line-height: 24px;\n  color: #0a0a0a;\n"])));
exports.CalculationContainer = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  border-top: 1px solid #e4e4e4;\n"], ["\n  border-top: 1px solid #e4e4e4;\n"])));
exports.Social = styled_components_1["default"].p(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  font-size: 18px;\n  line-height: 24px;\n  color: #0a0a0a;\n  margin-top: 24px;\n"], ["\n  font-size: 18px;\n  line-height: 24px;\n  color: #0a0a0a;\n  margin-top: 24px;\n"])));
var PensionInfo = function (_a) {
    var pensionValue = _a.pensionValue, generalAccumValue = _a.generalAccumValue;
    return (react_1["default"].createElement(exports.StyledPensionInfo, null,
        react_1["default"].createElement(exports.Container, null,
            react_1["default"].createElement(exports.InFuture, null,
                react_1["default"].createElement(exports.InFutureContainer, null,
                    react_1["default"].createElement(exports.Pension, null,
                        " ",
                        pensionValue,
                        " \u20BD. "),
                    react_1["default"].createElement(exports.Title, null, "\u041F\u0435\u043D\u0441\u0438\u044F "),
                    react_1["default"].createElement(exports.Span, null, " \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C"))),
            react_1["default"].createElement(exports.Storage, null,
                react_1["default"].createElement(exports.Calculation, null,
                    react_1["default"].createElement(exports.Sum, null,
                        generalAccumValue,
                        " \u20BD."),
                    react_1["default"].createElement(exports.Title, null, " \u041D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u043E ")),
                react_1["default"].createElement(exports.Calculation, null,
                    react_1["default"].createElement(exports.CalculationContainer, null,
                        react_1["default"].createElement(exports.Social, null, " 273 000 \u20BD."),
                        react_1["default"].createElement(exports.Title, null, " \u0420\u0430\u0437\u043C\u0435\u0440 \u0441\u043E\u0446. \u0432\u044B\u0447\u0435\u0442\u0430 ")))))));
};
exports["default"] = PensionInfo;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
