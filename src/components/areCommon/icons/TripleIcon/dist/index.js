"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.StyledTripleIcon = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
exports.StyledTripleIcon = styled_components_1["default"].img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  height: 24px;\n  width: 24px;\n"], ["\n  cursor: pointer;\n  height: 24px;\n  width: 24px;\n"])));
var TripleIcon = function (_a) {
    var icon = _a.icon, light = _a.light, hovered = _a.hovered;
    var _b = react_1.useState(false), isLocalHovered = _b[0], setIsLocalHovered = _b[1];
    var state = light ? "light" : "dark";
    if (isLocalHovered || hovered)
        state = "colored";
    return (react_1["default"].createElement(exports.StyledTripleIcon, { onMouseOver: function () { return setIsLocalHovered(true); }, onMouseOut: function () { return setIsLocalHovered(false); }, src: "/icons/triple/" + icon + "/" + state + ".svg", alt: icon }));
};
exports["default"] = TripleIcon;
var templateObject_1;
