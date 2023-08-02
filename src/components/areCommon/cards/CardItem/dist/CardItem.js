"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DarkIcon_1 = require("../../icons/DarkIcon");
var styles_1 = require("./styles");
var CardItem = function (_a) {
    var icon = _a.icon, subtitle = _a.subtitle, span = _a.span, title = _a.title;
    return (react_1["default"].createElement(styles_1.CardItems, null,
        react_1["default"].createElement(styles_1.ContainerIcon, null,
            react_1["default"].createElement(DarkIcon_1["default"], { icon: icon })),
        react_1["default"].createElement(styles_1.Description, null,
            react_1["default"].createElement(styles_1.CardTitle, null,
                title,
                react_1["default"].createElement(styles_1.CardTitleSpan, null,
                    " ",
                    span,
                    " ")),
            react_1["default"].createElement(styles_1.CardSubtitle, null, subtitle))));
};
exports["default"] = CardItem;
