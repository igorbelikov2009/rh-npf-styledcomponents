"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var TripleIcon = function (_a) {
    var icon = _a.icon, light = _a.light, hovered = _a.hovered;
    var _b = react_1.useState(false), isLocalHovered = _b[0], setIsLocalHovered = _b[1];
    var state = light ? "light" : "dark";
    if (isLocalHovered || hovered)
        state = "colored";
    return (react_1["default"].createElement(styles_1.StyledTripleIcon, { onMouseOver: function () { return setIsLocalHovered(true); }, onMouseOut: function () { return setIsLocalHovered(false); }, src: "/icons/triple/" + icon + "/" + state + ".svg", alt: icon }));
};
exports["default"] = TripleIcon;
