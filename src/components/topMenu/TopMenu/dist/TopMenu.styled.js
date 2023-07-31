"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.TopMenuContainer = exports.Header = void 0;
var styled_components_1 = require("styled-components");
exports.Header = styled_components_1["default"].header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 1920px;\n  margin: 0 auto;\n  height: 72px;\n  position: absolute;\n  top: 0;\n\n  border-bottom: ", ";\n"], ["\n  width: 100%;\n  max-width: 1920px;\n  margin: 0 auto;\n  height: 72px;\n  position: absolute;\n  top: 0;\n\n  border-bottom: ", ";\n"])), function (_a) {
    var isBackgroundWhite = _a.isBackgroundWhite;
    return (isBackgroundWhite ? "1px solid #e4e4e4" : "none");
});
exports.TopMenuContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 24px 18px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  @media (min-width: 576px) {\n    padding-left: 28px;\n    padding-right: 28px;\n  }\n"], ["\n  width: 100%;\n  margin: 0 auto;\n  padding: 24px 18px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  @media (min-width: 576px) {\n    padding-left: 28px;\n    padding-right: 28px;\n  }\n"])));
var templateObject_1, templateObject_2;
