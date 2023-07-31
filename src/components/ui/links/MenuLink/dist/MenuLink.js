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
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("./styles");
var MenuLink = function (_a) {
    var children = _a.children, to = _a.to, isBackgroundWhite = _a.isBackgroundWhite, props = __rest(_a, ["children", "to", "isBackgroundWhite"]);
    // параметром useMatch будет объект настройки
    var match = react_router_dom_1.useMatch({
        path: to,
        // полностью ссылка включена или нет.
        // Если это главная страничка, то мы берём полный путь. Если не главная, то неполный путь.
        // to - это наша ссылка, если это главная страница, то to имеет длину единичку.
        end: to.length === 1
    });
    // console.log(match);
    if (isBackgroundWhite) {
        if (match) {
            return react_1["default"].createElement(styles_1.LinkDarkActive, { to: to },
                " ",
                children,
                " ");
        }
        else {
            return react_1["default"].createElement(styles_1.LinkDark, { to: to },
                " ",
                children,
                " ");
        }
    }
    else if (match) {
        return react_1["default"].createElement(styles_1.LinkLightActive, { to: to },
            " ",
            children,
            " ");
    }
    else {
        return react_1["default"].createElement(styles_1.LinkLight, { to: to },
            " ",
            children,
            " ");
    }
};
exports["default"] = MenuLink;
