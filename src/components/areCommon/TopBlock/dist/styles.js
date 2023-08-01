"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.SubheadingSpan = exports.Subheading = exports.HeadingSpan = exports.Heading = exports.Container = exports.StyledTopBlock = void 0;
var styled_components_1 = require("styled-components");
exports.StyledTopBlock = styled_components_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  position: relative;\n  top: 0;\n  margin: 0 auto;\n  height: 360px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 24px;\n\n  // background-image: url(\"../../public/images/main/mainTop.jpg\");\n\n  @media screen and (min-width: 576px) {\n    height: 552px;\n    padding: 0px 28px 48px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding-left: 240px;\n    padding-right: 240px;\n  }\n"], ["\n  width: 100%;\n  position: relative;\n  top: 0;\n  margin: 0 auto;\n  height: 360px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 24px;\n\n  // background-image: url(\"../../public/images/main/mainTop.jpg\");\n\n  @media screen and (min-width: 576px) {\n    height: 552px;\n    padding: 0px 28px 48px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding-left: 240px;\n    padding-right: 240px;\n  }\n"])));
exports.Container = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n"], ["\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n"])));
exports.Heading = styled_components_1["default"].h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 26px;\n  line-height: 36px;\n  color: #ffffff;\n  margin-bottom: 8px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 55px;\n    line-height: 74px;\n    margin-bottom: 24px;\n  }\n"], ["\n  font-size: 26px;\n  line-height: 36px;\n  color: #ffffff;\n  margin-bottom: 8px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 55px;\n    line-height: 74px;\n    margin-bottom: 24px;\n  }\n"])));
exports.HeadingSpan = styled_components_1["default"].span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n"], ["\n  display: block;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n"])));
exports.Subheading = styled_components_1["default"].h2(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 13px;\n  line-height: 24px;\n  color: #ffffff;\n  max-width: 660px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n    line-height: 24px;\n  }\n"], ["\n  font-size: 13px;\n  line-height: 24px;\n  color: #ffffff;\n  max-width: 660px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n    line-height: 24px;\n  }\n"])));
exports.SubheadingSpan = styled_components_1["default"].span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: block;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n"], ["\n  display: block;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;