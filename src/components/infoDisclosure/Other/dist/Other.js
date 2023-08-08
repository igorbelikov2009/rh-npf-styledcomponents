"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ArchiveLink_1 = require("../../ui/links/ArchiveLink");
var styles_1 = require("./styles");
var Other = function () {
    var links = [
        {
            href: "/pdf/infoOpening/other/01 Рейтинг АО НПФ Ренесанс пенсии ruAA-1617266870709.pdf",
            title: "Свидетельство о присвоении рейтинга Эксперт РА"
        },
        {
            href: "/pdf/infoOpening/other/02 Свидетельство о членстве в Ассоциации Европейского Бизнеса-1576773162632.pdf",
            title: "Свидетельство о членстве в Ассоциации Европейского Бизнеса"
        },
        {
            href: "/pdf/infoOpening/other/03 Правила корпоративной этики АО НПФ РП-1576773142054.pdf",
            title: "Правила корпоративной этики АО НПФ «Ренессанс пенсии»"
        },
        {
            href: "/pdf/infoOpening/other/04 npf-terms-of-personal-data-1605258268312.pdf",
            title: "Политика в отношении обработки персональных данных в АО НПФ «Ренессанс пенсии» (редакция 1.0)"
        },
    ];
    return (react_1["default"].createElement(styles_1.StyledOther, null,
        react_1["default"].createElement(styles_1.Container, null,
            react_1["default"].createElement(styles_1.Heading, null, "\u041F\u0440\u043E\u0447\u0438\u0435"),
            react_1["default"].createElement(styles_1.Content, null, links.map(function (link, index) { return (react_1["default"].createElement(ArchiveLink_1["default"], { key: index, href: link.href, title: link.title })); })))));
};
exports["default"] = Other;
