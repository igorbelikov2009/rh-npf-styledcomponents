"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var Selector = function (_a) {
    var value = _a.value, isvisible = _a.isvisible, onClickSelector = _a.onClickSelector;
    return (react_1["default"].createElement(styles_1.StyledSelector, null,
        react_1["default"].createElement(styles_1.TitleContainer, null,
            react_1["default"].createElement(styles_1.Border, { isvisible: isvisible },
                react_1["default"].createElement(styles_1.DateContainer, { isvisible: isvisible, onClick: onClickSelector },
                    react_1["default"].createElement(styles_1.DateSelector, null,
                        react_1["default"].createElement(styles_1.DateValue, null,
                            " ",
                            value,
                            " ")),
                    react_1["default"].createElement(styles_1.IconContainer, null,
                        react_1["default"].createElement(styles_1.IconRotated, { isvisible: isvisible, src: "/icons/triple/Arrow Down/Dark.svg", alt: "Arrow" }))),
                react_1["default"].createElement(styles_1.WhiteLine, { isvisible: isvisible },
                    react_1["default"].createElement(styles_1.BlackLine, { isvisible: isvisible }),
                    react_1["default"].createElement(styles_1.BlackLine, { isvisible: isvisible }))))));
};
exports["default"] = Selector;
