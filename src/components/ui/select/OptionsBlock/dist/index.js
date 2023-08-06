"use strict";
exports.__esModule = true;
var react_1 = require("react");
var OptionItem_1 = require("../OptionItem");
var styles_1 = require("./styles");
var OptionsBlock = function (_a) {
    var optionsItems = _a.optionsItems, emitValue = _a.emitValue, onClickOptionsBlock = _a.onClickOptionsBlock, currentValue = _a.currentValue;
    var onChangeOption = function (value, id) {
        emitValue(value, id);
        // console.log(value, id);
    };
    return (react_1["default"].createElement(styles_1.StyledOptionsBlock, { onClick: onClickOptionsBlock },
        react_1["default"].createElement(styles_1.ScrollableBlock, null, optionsItems.map(function (option, index) { return (react_1["default"].createElement(OptionItem_1["default"], { key: index, date: option.date, value: option.value, id: option.id, active: option.value === currentValue, emitValue: onChangeOption })); }))));
};
exports["default"] = OptionsBlock;
