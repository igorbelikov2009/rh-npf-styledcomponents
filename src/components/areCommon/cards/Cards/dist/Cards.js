"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CardItem_1 = require("../CardItem/CardItem");
var styles_1 = require("./styles");
var Cards = function (_a) {
    var cards = _a.cards;
    return (react_1["default"].createElement(styles_1.CardsContainer, null,
        react_1["default"].createElement(styles_1.CardsHeading, null, " \u0424\u043E\u043D\u0434 \u0432 \u0446\u0438\u0444\u0440\u0430\u0445 "),
        react_1["default"].createElement(styles_1.StyledCards, null, cards.map(function (card) { return (react_1["default"].createElement(CardItem_1["default"], { key: card.icon, icon: card.icon, title: card.title, span: card.span, subtitle: card.subtitle })); }))));
};
exports["default"] = Cards;
