"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TopBlock_1 = require("../../components/areCommon/TopBlock");
var infoTop_jpg_1 = require("../../assets/images/info/infoTop.jpg");
var GeneralInfo_1 = require("../../components/infoDisclosure/GeneralInfo");
var FundPerformance_1 = require("../../components/infoDisclosure/fundPerformance/FundPerformance");
var DocumentsOfTitle_1 = require("../../components/infoDisclosure/DocumentsOfTitle");
var PortfolioStructure_1 = require("../../components/infoDisclosure/PortfolioStructure");
var Notifics_1 = require("../../components/infoDisclosure/notifics/Notifics");
var SpecDepository_1 = require("../../components/infoDisclosure/specDepository/SpecDepository");
var InfoDisclosurePage = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TopBlock_1["default"], { heading: "\u0420\u0430\u0441\u043A\u0440\u044B\u0442\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438", image: infoTop_jpg_1["default"] }),
        react_1["default"].createElement(GeneralInfo_1["default"], null),
        react_1["default"].createElement(FundPerformance_1["default"], null),
        react_1["default"].createElement(DocumentsOfTitle_1["default"], null),
        react_1["default"].createElement(PortfolioStructure_1["default"], null),
        react_1["default"].createElement(SpecDepository_1["default"], null),
        react_1["default"].createElement(Notifics_1["default"], null)));
};
exports["default"] = InfoDisclosurePage;
