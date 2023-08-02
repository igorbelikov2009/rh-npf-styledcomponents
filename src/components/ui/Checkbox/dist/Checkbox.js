"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var Checkbox = function (_a) {
    var checkedValue = _a.checkedValue, toogleChecked = _a.toogleChecked, title = _a.title, span = _a.span, subtitle = _a.subtitle;
    var handlerCheckbox = function () {
        toogleChecked();
    };
    return (react_1["default"].createElement(styles_1.StyledCheckBox, null,
        react_1["default"].createElement(styles_1.Checker, null),
        react_1["default"].createElement(styles_1.SwitchChecker, { checkedValue: checkedValue }),
        react_1["default"].createElement(styles_1.CheckboxInput, { type: "checkbox", checked: checkedValue, onChange: handlerCheckbox }),
        react_1["default"].createElement(styles_1.ContainerAgree, null,
            react_1["default"].createElement(styles_1.AgreeTitle, null,
                " ",
                title,
                " "),
            react_1["default"].createElement(styles_1.AgreeSpan, null,
                " ",
                span,
                " "),
            react_1["default"].createElement(styles_1.AgreeTitle, null,
                " ",
                subtitle,
                " "))));
};
exports["default"] = Checkbox;
