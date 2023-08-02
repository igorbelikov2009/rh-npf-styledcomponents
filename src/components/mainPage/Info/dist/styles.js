"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ButtonContainer = exports.Subtitle = exports.Title = exports.Offer = exports.BlockOffers = exports.ImgBuilding = exports.StyledImg = exports.Images = exports.Subheading = exports.Heading = exports.Head = exports.StyledInfo = void 0;
var styled_components_1 = require("styled-components");
exports.StyledInfo = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 960px;\n  background-color: #fff;\n  margin: 0 auto;\n  padding: 24px;\n  padding-bottom: 72px;\n\n  @media screen and (min-width: 576px) {\n    padding-left: 28px;\n    padding-right: 28px;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding-top: 72px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    padding-left: 0;\n    padding-right: 0;\n  }\n"], ["\n  width: 100%;\n  max-width: 960px;\n  background-color: #fff;\n  margin: 0 auto;\n  padding: 24px;\n  padding-bottom: 72px;\n\n  @media screen and (min-width: 576px) {\n    padding-left: 28px;\n    padding-right: 28px;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding-top: 72px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    padding-left: 0;\n    padding-right: 0;\n  }\n"])));
exports.Head = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  padding: 0;\n  margin-bottom: 48px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 72px;\n  }\n"], ["\n  width: 100%;\n  padding: 0;\n  margin-bottom: 48px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 72px;\n  }\n"])));
exports.Heading = styled_components_1["default"].h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  max-width: 680px;\n  margin-bottom: 24px;\n  font-size: 18px;\n  line-height: 24px;\n  color: #28323c;\n\n  @media screen and (min-width: 768px) {\n    font-size: 34px;\n    line-height: 48px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    max-width: 860px;\n  }\n"], ["\n  display: block;\n  width: 100%;\n  max-width: 680px;\n  margin-bottom: 24px;\n  font-size: 18px;\n  line-height: 24px;\n  color: #28323c;\n\n  @media screen and (min-width: 768px) {\n    font-size: 34px;\n    line-height: 48px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    max-width: 860px;\n  }\n"])));
exports.Subheading = styled_components_1["default"].p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  max-width: 440px;\n  font-size: 13px;\n  color: #78828c;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    max-width: 560px;\n  }\n"], ["\n  display: block;\n  width: 100%;\n  max-width: 440px;\n  font-size: 13px;\n  color: #78828c;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    max-width: 560px;\n  }\n"])));
exports.Images = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n"], ["\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n"])));
exports.StyledImg = styled_components_1["default"].img(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  aspect-ratio: 660 / 440;\n  width: 100%;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 576px) {\n    max-width: calc(50% + 56px);\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: calc(50% + 80px);\n  }\n\n  &:first-of-type {\n    position: static;\n\n    @media screen and (min-width: 576px) {\n      position: relative;\n      margin-top: 120px;\n      bottom: 0;\n      left: 0;\n      margin-bottom: 87px;\n    }\n\n    @media screen and (min-width: 1024px) {\n      margin-bottom: 112px;\n    }\n  }\n\n  &:last-of-type {\n    display: none;\n\n    @media screen and (min-width: 576px) {\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 0;\n    }\n  }\n"], ["\n  aspect-ratio: 660 / 440;\n  width: 100%;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 576px) {\n    max-width: calc(50% + 56px);\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: calc(50% + 80px);\n  }\n\n  &:first-of-type {\n    position: static;\n\n    @media screen and (min-width: 576px) {\n      position: relative;\n      margin-top: 120px;\n      bottom: 0;\n      left: 0;\n      margin-bottom: 87px;\n    }\n\n    @media screen and (min-width: 1024px) {\n      margin-bottom: 112px;\n    }\n  }\n\n  &:last-of-type {\n    display: none;\n\n    @media screen and (min-width: 576px) {\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 0;\n    }\n  }\n"])));
exports.ImgBuilding = styled_components_1["default"].img(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  aspect-ratio: 660 / 440;\n  width: 100%;\n  margin-bottom: 24px;\n  display: block;\n\n  @media screen and (min-width: 576px) {\n    display: none;\n  }\n"], ["\n  aspect-ratio: 660 / 440;\n  width: 100%;\n  margin-bottom: 24px;\n  display: block;\n\n  @media screen and (min-width: 576px) {\n    display: none;\n  }\n"])));
exports.BlockOffers = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 100%;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  @media screen and (min-width: 768px) {\n    padding: 0 20px;\n  }\n\n  @media screen and (min-width: 1300px) {\n    padding: 0 100px;\n  }\n"], ["\n  width: 100%;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  @media screen and (min-width: 768px) {\n    padding: 0 20px;\n  }\n\n  @media screen and (min-width: 1300px) {\n    padding: 0 100px;\n  }\n"])));
exports.Offer = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 576px) {\n    max-width: 254px;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: 320px;\n  }\n\n  @media screen and (min-width: 1300px) {\n    max-width: 360px;\n  }\n"], ["\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 576px) {\n    max-width: 254px;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: 320px;\n  }\n\n  @media screen and (min-width: 1300px) {\n    max-width: 360px;\n  }\n"])));
exports.Title = styled_components_1["default"].h1(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  font-size: 18px;\n  line-height: 24px;\n  color: #28323c;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 34px;\n    line-height: 48px;\n  }\n"], ["\n  font-size: 18px;\n  line-height: 24px;\n  color: #28323c;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 34px;\n    line-height: 48px;\n  }\n"])));
exports.Subtitle = styled_components_1["default"].p(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-size: 13px;\n  line-height: 24px;\n  color: #5a646e;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"], ["\n  font-size: 13px;\n  line-height: 24px;\n  color: #5a646e;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"])));
exports.ButtonContainer = styled_components_1["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  max-width: 200px;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 576px) {\n    margin-bottom: 0;\n  }\n"], ["\n  max-width: 200px;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 576px) {\n    margin-bottom: 0;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;