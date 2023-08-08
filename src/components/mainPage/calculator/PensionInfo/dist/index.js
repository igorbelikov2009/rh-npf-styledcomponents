"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var PensionInfo = function (_a) {
    var pensionValue = _a.pensionValue, generalAccumValue = _a.generalAccumValue;
    return (react_1["default"].createElement(styles_1.StyledPensionInfo, null,
        react_1["default"].createElement(styles_1.Container, null,
            react_1["default"].createElement(styles_1.InFuture, null,
                react_1["default"].createElement(styles_1.InFutureContainer, null,
                    react_1["default"].createElement(styles_1.Pension, null,
                        " ",
                        pensionValue,
                        " \u20BD. "),
                    react_1["default"].createElement(styles_1.Title, null,
                        "\u041F\u0435\u043D\u0441\u0438\u044F",
                        react_1["default"].createElement(styles_1.Span, null, " \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C")))),
            react_1["default"].createElement(styles_1.Storage, null,
                react_1["default"].createElement(styles_1.Calculation, null,
                    react_1["default"].createElement(styles_1.Sum, null,
                        generalAccumValue,
                        " \u20BD."),
                    react_1["default"].createElement(styles_1.Title, null, " \u041D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u043E ")),
                react_1["default"].createElement(styles_1.Calculation, null,
                    react_1["default"].createElement(styles_1.CalculationContainer, null,
                        react_1["default"].createElement(styles_1.Social, null, " 273 000 \u20BD."),
                        react_1["default"].createElement(styles_1.Title, null, " \u0420\u0430\u0437\u043C\u0435\u0440 \u0441\u043E\u0446. \u0432\u044B\u0447\u0435\u0442\u0430 ")))))));
};
exports["default"] = PensionInfo;
