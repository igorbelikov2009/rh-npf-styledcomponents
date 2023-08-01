"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var TopBlock = function (_a) {
    var heading = _a.heading, headingSpan = _a.headingSpan, subheading = _a.subheading, subheadingSpan = _a.subheadingSpan, image = _a.image;
    return (react_1["default"].createElement(styles_1.StyledTopBlock, { style: { backgroundImage: "url(" + image + ")" } },
        react_1["default"].createElement(styles_1.Container, null,
            react_1["default"].createElement(styles_1.Heading, null,
                heading,
                react_1["default"].createElement(styles_1.HeadingSpan, null,
                    headingSpan,
                    " ")),
            react_1["default"].createElement(styles_1.Subheading, null,
                subheading,
                react_1["default"].createElement(styles_1.SubheadingSpan, null, subheadingSpan)))));
};
exports["default"] = TopBlock;
