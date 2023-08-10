"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var MyModal = function (_a) {
    var children = _a.children, isVisible = _a.isVisible, setVisible = _a.setVisible;
    return (
    // <StyledMyModal visible={isVisible} onClick={() => setVisible(false)}>
    react_1["default"].createElement(styles_1.StyledMyModal, { visible: isVisible },
        react_1["default"].createElement(styles_1.MyModalContent, null, children)));
};
exports["default"] = MyModal;
