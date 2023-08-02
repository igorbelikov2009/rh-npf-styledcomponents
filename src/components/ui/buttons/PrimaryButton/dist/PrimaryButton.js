"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var PrimaryButton = function (_a) {
    var children = _a.children, disabled = _a.disabled, props = __rest(_a, ["children", "disabled"]);
    return react_1["default"].createElement(styles_1.StyledPrimaryButton, { disabled: disabled },
        " ",
        children,
        " ");
};
exports["default"] = PrimaryButton;
