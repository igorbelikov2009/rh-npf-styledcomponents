"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Arrows_1 = require("../Arrows");
var styles_1 = require("./styles");
var CarouselHeader = function (_a) {
    var headerTitle = _a.headerTitle, headerSubtitle = _a.headerSubtitle, isBlurredLeft = _a.isBlurredLeft, isBlurredRight = _a.isBlurredRight, isHoveredLeft = _a.isHoveredLeft, isHoveredRight = _a.isHoveredRight, onClickLeft = _a.onClickLeft, onClickRight = _a.onClickRight;
    return (react_1["default"].createElement(styles_1.StyledCarouselHeader, null,
        react_1["default"].createElement(styles_1.TitlesContainer, null,
            react_1["default"].createElement(styles_1.CarouselTitle, null,
                " ",
                headerTitle,
                " "),
            react_1["default"].createElement(styles_1.CarouselSubtitle, null,
                " ",
                headerSubtitle,
                " "),
            react_1["default"].createElement(Arrows_1["default"], { isBlurredLeft: isBlurredLeft, isBlurredRight: isBlurredRight, isHoveredLeft: isHoveredLeft, isHoveredRight: isHoveredRight, onClickLeft: onClickLeft, onClickRight: onClickRight }))));
};
exports["default"] = CarouselHeader;
