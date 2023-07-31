"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var styles_1 = require("./styles");
var TripleIcon_1 = require("../../areCommon/icons/TripleIcon/TripleIcon");
var TopMenu = function () {
    var _a = react_1.useState(true), isBackgroundWhite = _a[0], setBackgroundWhite = _a[1];
    var _b = react_1.useState(false), isPrivateOfficeHovered = _b[0], setPrivateOfficeHovered = _b[1];
    return (react_1["default"].createElement(styles_1.Header, { isBackgroundWhite: isBackgroundWhite },
        react_1["default"].createElement(styles_1.Container, null,
            react_1["default"].createElement(styles_1.LeftBlock, null),
            react_1["default"].createElement(styles_1.RigthBlock, null,
                react_1["default"].createElement(styles_1.Contacts, null),
                react_1["default"].createElement(styles_1.PrivateOffice, { onMouseOver: function () { return setPrivateOfficeHovered(true); }, onMouseOut: function () { return setPrivateOfficeHovered(false); } },
                    react_1["default"].createElement(TripleIcon_1["default"], { icon: "User", light: !isBackgroundWhite, hovered: isPrivateOfficeHovered }),
                    react_1["default"].createElement(styles_1.PersonalArea, { isBackgroundWhite: isBackgroundWhite }, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"))))));
};
exports["default"] = TopMenu;
