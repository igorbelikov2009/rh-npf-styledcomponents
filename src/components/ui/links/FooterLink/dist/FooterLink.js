"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var StyledLink = styled_components_1.styled(react_router_dom_1.Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 13px;\n  line-height: 24px;\n  margin-bottom: 0;\n  transition: color 0.22s;\n  transition-duration: 0.22s;\n  transition-timing-function: ease;\n  transition-delay: 0s;\n  transition-property: color;\n\n  &:last-of-type {\n    margin-right: 0;\n    margin-bottom: 0;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 16px;\n    font-size: 16px;\n    line-height: 24px;\n  }\n"], ["\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 13px;\n  line-height: 24px;\n  margin-bottom: 0;\n  transition: color 0.22s;\n  transition-duration: 0.22s;\n  transition-timing-function: ease;\n  transition-delay: 0s;\n  transition-property: color;\n\n  &:last-of-type {\n    margin-right: 0;\n    margin-bottom: 0;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 16px;\n    font-size: 16px;\n    line-height: 24px;\n  }\n"])));
var LinkDark = styled_components_1.styled(StyledLink)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: #78828c;\n  &:hover {\n    color: #28323c;\n  }\n"], ["\n  color: #78828c;\n  &:hover {\n    color: #28323c;\n  }\n"])));
var LinkActive = styled_components_1.styled(StyledLink)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: 500;\n  color: #28323c;\n  &:hover {\n    color: blueviolet;\n  }\n"], ["\n  font-weight: 500;\n  color: #28323c;\n  &:hover {\n    color: blueviolet;\n  }\n"])));
var FooterLink = function (_a) {
    var children = _a.children, to = _a.to;
    // параметром useMatch будет объект настройки
    var match = react_router_dom_1.useMatch({
        path: to,
        // полностью ссылка включена или нет.
        // Если это главная страничка, то мы берём полный путь. Если не главная, то неполный путь.
        // to - это наша ссылка, если это главная страница, то to имеет длину единичку.
        end: to.length === 1
    });
    if (match) {
        return react_1["default"].createElement(LinkActive, { to: to },
            " ",
            children,
            " ");
    }
    return react_1["default"].createElement(LinkDark, { to: to },
        " ",
        children,
        " ");
};
exports["default"] = FooterLink;
var templateObject_1, templateObject_2, templateObject_3;
