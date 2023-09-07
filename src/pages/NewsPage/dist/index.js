"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var TripleIcon_1 = require("../../components/areCommon/icons/TripleIcon");
var styles_1 = require("./styles");
var react_router_dom_1 = require("react-router-dom");
var useDate_1 = require("../../api/useDate/useDate");
var Article_1 = require("../../components/newsPage/Article");
var NewsLink_1 = require("../../components/news/NewsLink");
var newsAPI_1 = require("../../store/services/newsAPI");
var ServerIsLoading_1 = require("../../components/areCommon/ServerIsLoading");
var ServerError_1 = require("../../components/areCommon/ServerError");
var NewsPage = function () {
    var id = react_router_dom_1.useParams().id;
    var prevID = Number(id) - 1;
    var nextID = Number(id) + 1;
    var _a = react_1.useState(false), isHovered = _a[0], setHovered = _a[1];
    // // Получаем данные с newsReducer,
    var _b = newsAPI_1.newsAPI.useGetNewsQuery(), data = _b.data, isLoading = _b.isLoading, isError = _b.isError;
    var news = [];
    if (data) {
        news = data;
    }
    // const { news, isLoading, error } =
    // Фильтруем массив всех отсортированных новостей, с упорядоченным id, с отформатированной датой
    // Оставляем в массиве только те новости, ID которых соответствуют prevID и nextID.
    var anotherNews = __spreadArrays(news).filter(function (item) {
        return item.id === prevID || item.id === nextID;
    });
    // Форматируем дату других новостей:
    var formatedAnotherNews = __spreadArrays(anotherNews).map(function (item) { return ({
        id: Number(item.id),
        title: String(item.title),
        date: String(useDate_1["default"].format(new Date(item.date))),
        paragraphs: item.paragraphs
    }); });
    // Оставляем в массиве только те новости, ID которых соответствуют id.
    var currentNews = __spreadArrays(news).filter(function (item) {
        return item.id === Number(id);
    });
    // форматируем дату текущих новостей:
    var formatedCurrentNews = __spreadArrays(currentNews).map(function (item) { return ({
        id: Number(item.id),
        title: String(item.title),
        date: String(useDate_1["default"].format(new Date(item.date))),
        paragraphs: item.paragraphs
    }); });
    return (react_1["default"].createElement(styles_1.StyledNewsPage, null,
        react_1["default"].createElement(styles_1.Container, null,
            react_1["default"].createElement(styles_1.StyledLink, { to: "/news", onMouseOver: function () { return setHovered(true); }, onMouseOut: function () { return setHovered(false); } },
                react_1["default"].createElement(styles_1.IconContainer, null,
                    react_1["default"].createElement(TripleIcon_1["default"], { hovered: isHovered, light: false, icon: "Arrow Down" })),
                react_1["default"].createElement(styles_1.LinkTitle, null, "\u041A \u0441\u043F\u0438\u0441\u043A\u0443 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439")),
            isLoading && react_1["default"].createElement(ServerIsLoading_1["default"], null),
            isError && react_1["default"].createElement(ServerError_1["default"], null),
            react_1["default"].createElement(react_1["default"].Fragment, null,
                formatedCurrentNews ? (formatedCurrentNews.map(function (item) { return (react_1["default"].createElement(Article_1["default"], { key: item.id, id: item.id, date: item.date, title: item.date, paragraphs: item.paragraphs })); })) : (react_1["default"].createElement("p", null,
                    " \u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0441 ID ",
                    id,
                    " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")),
                formatedAnotherNews &&
                    formatedAnotherNews.map(function (item) { return (react_1["default"].createElement(NewsLink_1["default"], { key: item.id, date: item.date, title: item.title, id: Number(item.id) })); })))));
};
exports["default"] = NewsPage;
