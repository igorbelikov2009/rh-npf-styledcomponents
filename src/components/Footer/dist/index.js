"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var footerData_1 = require("../../data/footerData");
var Logotypes_1 = require("../areCommon/Logotypes/Logotypes");
var FooterLink_1 = require("../ui/links/FooterLink");
var styles_1 = require("./styles");
var Footer = function () {
    var _a = react_1.useState(false), isAuth = _a[0], setAuth = _a[1];
    var navigate = react_router_dom_1.useNavigate();
    var handlerAdminLink = function () {
        if (isAuth) {
            return;
        }
        else {
            setAuth(true);
        }
    };
    return (react_1["default"].createElement(styles_1.StyledFooter, null,
        react_1["default"].createElement(styles_1.TopBlockFooter, null,
            react_1["default"].createElement(styles_1.LogotypeContainer, { onClick: function () { return navigate("/", { replace: true }); } },
                react_1["default"].createElement(Logotypes_1["default"], { isBackgroundWhite: true })),
            react_1["default"].createElement(styles_1.LogosContainer, null,
                react_1["default"].createElement(styles_1.IconLogo, { src: "/icons/logoNapf.svg", alt: "logo" }),
                react_1["default"].createElement(styles_1.IconLogo, { src: "/icons/logoAeb.svg", alt: "logo" }),
                react_1["default"].createElement(styles_1.IconLogo, { src: "/icons/logoExpert.svg", alt: "logo" }))),
        react_1["default"].createElement(styles_1.PhoneContainer, null,
            react_1["default"].createElement(styles_1.PhoneNumber, null, "8 800 200-47-66")),
        react_1["default"].createElement(styles_1.Content, null,
            react_1["default"].createElement(styles_1.Nav, null,
                react_1["default"].createElement(styles_1.Column, null, footerData_1.firstBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })),
                react_1["default"].createElement(styles_1.Column, null, footerData_1.secondBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })),
                react_1["default"].createElement(styles_1.Column, null,
                    footerData_1.thirdBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); }),
                    react_1["default"].createElement(styles_1.AdminLink, { onClick: handlerAdminLink }, isAuth ? (react_1["default"].createElement(FooterLink_1["default"], { children: "\u041F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430", to: "/adminpanel" })) : (react_1["default"].createElement(styles_1.AdminParagraph, null, "\u041F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430")))),
                react_1["default"].createElement(styles_1.Column, null,
                    react_1["default"].createElement(styles_1.CopyrightLink, { target: "_blank", href: "/pdf/infoOpening/archive-aktsionerov/01 Beneficiaries structure 16.03.2021.pdf" }, "\u0421\u043F\u0438\u0441\u043E\u043A \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043E\u0432 \u0424\u043E\u043D\u0434\u0430 \u0438 \u043B\u0438\u0446, \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u043C \u043B\u0438\u0431\u043E \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0432\u043B\u0438\u044F\u043D\u0438\u0435\u043C \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0424\u043E\u043D\u0434 (\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0432 \u0411\u0430\u043D\u043A \u0420\u043E\u0441\u0441\u0438\u0438 16.03.2021 \u0433. \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043D\u0430 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u043C \u0441\u0430\u0439\u0442\u0435 \u0411\u0430\u043D\u043A\u0430 \u0420\u043E\u0441\u0441\u0438\u0438)."),
                    react_1["default"].createElement(styles_1.Copyright, null, "\u00A92009-2019 \u041D\u041F\u0424\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441. \u041F\u0435\u043D\u0441\u0438\u0438."),
                    react_1["default"].createElement(styles_1.Copyright, null, "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u2116 383/2 \u043E\u0442 16 \u0438\u044E\u043D\u044F 2009 \u0433\u043E\u0434\u0430"))))));
};
exports["default"] = Footer;
