"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Nav = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var styles_1 = require("./styles");
var TripleIcon_1 = require("../../areCommon/icons/TripleIcon");
var Logotypes_1 = require("../../areCommon/Logotypes/Logotypes");
var react_router_dom_1 = require("react-router-dom");
var MenuLink_1 = require("../../ui/links/MenuLink/MenuLink");
exports.Nav = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: none;\n\n  @media (min-width: 1160px) {\n    display: flex;\n    justify-content: space-between;\n    margin-left: 12px;\n  }\n"], ["\n  display: none;\n\n  @media (min-width: 1160px) {\n    display: flex;\n    justify-content: space-between;\n    margin-left: 12px;\n  }\n"])));
var TopMenu = function () {
    var _a = react_1.useState(true), isBackgroundWhite = _a[0], setBackgroundWhite = _a[1];
    var _b = react_1.useState(false), isPrivateOfficeHovered = _b[0], setPrivateOfficeHovered = _b[1];
    var _c = react_1.useState(false), isHamburgerHovered = _c[0], setHamburgerHovered = _c[1];
    var navigate = react_router_dom_1.useNavigate();
    var pathname = react_router_dom_1.useLocation().pathname;
    // console.log(pathname);
    var TopMenuLinks = [
        { to: "/about", children: "О нас" },
        { to: "/investment", children: "Инвестиции" },
        { to: "/business", children: "Для бизнеса" },
        { to: "/news", children: "Новости" },
        { to: "/support", children: "Поддержка" },
        { to: "/contacts", children: "Контакты" },
    ];
    var openLoginForm = function () {
        console.log("LoginForm");
    };
    var openMenuMobil = function () {
        console.log("openMenuMobil");
    };
    var openAdminLogin = function () {
        console.log("AdminLogin");
    };
    return (react_1["default"].createElement(styles_1.Header, { isBackgroundWhite: isBackgroundWhite },
        react_1["default"].createElement(styles_1.Container, null,
            react_1["default"].createElement(styles_1.LeftBlock, null,
                react_1["default"].createElement(styles_1.HamburgerContainer, { onMouseOver: function () { return setHamburgerHovered(true); }, onMouseOut: function () { return setHamburgerHovered(false); }, onClick: openMenuMobil },
                    react_1["default"].createElement(TripleIcon_1["default"], { icon: "Hamburger", light: !isBackgroundWhite, hovered: isHamburgerHovered })),
                react_1["default"].createElement("div", { onClick: function () { return navigate("/", { replace: true }); } },
                    react_1["default"].createElement(Logotypes_1["default"], { isBackgroundWhite: isBackgroundWhite })),
                react_1["default"].createElement(exports.Nav, null, TopMenuLinks.map(function (link) { return (react_1["default"].createElement(MenuLink_1["default"], { key: link.to, to: link.to, isBackgroundWhite: isBackgroundWhite }, link.children)); }))),
            react_1["default"].createElement(styles_1.RigthBlock, null,
                react_1["default"].createElement(styles_1.Contacts, null,
                    react_1["default"].createElement(styles_1.ContactsContainer, null,
                        react_1["default"].createElement(styles_1.ContactsPhone, { isBackgroundWhite: isBackgroundWhite, href: "tel:+78002004766" }, "8 800 200-47-66"),
                        react_1["default"].createElement(styles_1.AdminLogin, { onClick: openAdminLogin, isBackgroundWhite: isBackgroundWhite }, "\u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440"))),
                react_1["default"].createElement(styles_1.PrivateOffice, { onMouseOver: function () { return setPrivateOfficeHovered(true); }, onMouseOut: function () { return setPrivateOfficeHovered(false); }, onClick: openLoginForm },
                    react_1["default"].createElement(TripleIcon_1["default"], { icon: "User", light: !isBackgroundWhite, hovered: isPrivateOfficeHovered }),
                    react_1["default"].createElement(styles_1.PersonalArea, { isBackgroundWhite: isBackgroundWhite }, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"))))));
};
exports["default"] = TopMenu;
var templateObject_1;
