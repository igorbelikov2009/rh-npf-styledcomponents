"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Title = exports.PointYellow = exports.PointPurple = exports.Point = exports.ContainerTitles = exports.Subgraph = exports.YearTitle = exports.Years = exports.VerticalLine = exports.Diagrams = exports.StyledGraph = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
exports.StyledGraph = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
exports.Diagrams = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 191px;\n  margin-bottom: 0;\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (min-width: 576px) {\n    height: 200px;\n    margin-bottom: 8px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    height: 144px;\n    margin-bottom: 16px;\n  }\n"], ["\n  width: 100%;\n  height: 191px;\n  margin-bottom: 0;\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (min-width: 576px) {\n    height: 200px;\n    margin-bottom: 8px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    height: 144px;\n    margin-bottom: 16px;\n  }\n"])));
exports.VerticalLine = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 100%;\n  width: 1px;\n  background: #e4e4e4;\n"], ["\n  height: 100%;\n  width: 1px;\n  background: #e4e4e4;\n"])));
exports.Years = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (min-width: 576px) {\n    margin-bottom: 12px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    margin-bottom: 24px;\n  }\n"], ["\n  width: 100%;\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (min-width: 576px) {\n    margin-bottom: 12px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    margin-bottom: 24px;\n  }\n"])));
exports.YearTitle = styled_components_1["default"].p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: block;\n  font-size: 11px;\n  color: #96a0aa;\n"], ["\n  display: block;\n  font-size: 11px;\n  color: #96a0aa;\n"])));
exports.Subgraph = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  display: block;\n\n  @media screen and (min-width: 576px) {\n    display: flex;\n  }\n"], ["\n  width: 100%;\n  display: block;\n\n  @media screen and (min-width: 576px) {\n    display: flex;\n  }\n"])));
exports.ContainerTitles = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative;\n\n  &:first-of-type {\n    margin-right: 43px;\n    margin-bottom: 12px;\n\n    @media screen and (min-width: 576px) {\n      margin-bottom: 0;\n    }\n  }\n\n  @media screen and (min-width: 576px) {\n    justify-content: space-between;\n  }\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative;\n\n  &:first-of-type {\n    margin-right: 43px;\n    margin-bottom: 12px;\n\n    @media screen and (min-width: 576px) {\n      margin-bottom: 0;\n    }\n  }\n\n  @media screen and (min-width: 576px) {\n    justify-content: space-between;\n  }\n"])));
exports.Point = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  height: 8px;\n  width: 8px;\n  border-radius: 50%;\n  margin-right: 12px;\n"], ["\n  height: 8px;\n  width: 8px;\n  border-radius: 50%;\n  margin-right: 12px;\n"])));
exports.PointPurple = styled_components_1["default"](exports.Point)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  background-color: rgb(105, 16, 156);\n"], ["\n  background-color: rgb(105, 16, 156);\n"])));
exports.PointYellow = styled_components_1["default"](exports.Point)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  background-color: yellow;\n"], ["\n  background-color: yellow;\n"])));
exports.Title = styled_components_1["default"].p(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-size: 13px;\n  color: #5a646e;\n  position: relative;\n"], ["\n  font-size: 13px;\n  color: #5a646e;\n  position: relative;\n"])));
var Graph = function () {
    return (react_1["default"].createElement(exports.StyledGraph, null,
        react_1["default"].createElement(exports.Diagrams, null,
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null),
            react_1["default"].createElement(exports.VerticalLine, null)),
        react_1["default"].createElement(exports.Years, null,
            react_1["default"].createElement(exports.YearTitle, null, "2021"),
            react_1["default"].createElement(exports.YearTitle, null, "2024"),
            react_1["default"].createElement(exports.YearTitle, null, "2027"),
            react_1["default"].createElement(exports.YearTitle, null, "2030"),
            react_1["default"].createElement(exports.YearTitle, null, "2033"),
            react_1["default"].createElement(exports.YearTitle, null, "2036"),
            react_1["default"].createElement(exports.YearTitle, null, "2040"),
            react_1["default"].createElement(exports.YearTitle, null, "2043")),
        react_1["default"].createElement(exports.Subgraph, null,
            react_1["default"].createElement(exports.ContainerTitles, null,
                react_1["default"].createElement(exports.PointPurple, null),
                react_1["default"].createElement(exports.Title, null, "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0434\u043E\u0445\u043E\u0434")),
            react_1["default"].createElement(exports.ContainerTitles, null,
                react_1["default"].createElement(exports.PointYellow, null),
                react_1["default"].createElement(exports.Title, null, "\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0435 \u0432\u0437\u043D\u043E\u0441\u044B")))));
};
exports["default"] = Graph;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
