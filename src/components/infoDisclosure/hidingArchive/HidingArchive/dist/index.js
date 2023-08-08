"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DarkIcon_1 = require("../../../areCommon/icons/DarkIcon");
var ArchiveShareholders_1 = require("../ArchiveShareholders");
var ArchivePension_1 = require("../ArchivePension");
var ArchiveReporting_1 = require("../ArchiveReporting");
var ArchiveAssetValueRules_1 = require("../ArchiveAssetValueRules");
var styles_1 = require("./styles");
var HidingArchive = function (_a) {
    var isArchiveAssetValueRulesVisible = _a.isArchiveAssetValueRulesVisible, isArchivePensionVisible = _a.isArchivePensionVisible, isArchiveReportingVisible = _a.isArchiveReportingVisible, isArchiveShareholdersVisible = _a.isArchiveShareholdersVisible, isVisible = _a.isVisible, onClickHidingArchive = _a.onClickHidingArchive;
    return (react_1["default"].createElement(styles_1.StyledHidingArhive, { visible: isVisible },
        react_1["default"].createElement(styles_1.Background, { visible: isVisible }),
        react_1["default"].createElement(styles_1.Container, { visible: isVisible },
            react_1["default"].createElement(styles_1.Wrapper, null,
                react_1["default"].createElement(react_1["default"].Fragment, null,
                    isArchiveShareholdersVisible && react_1["default"].createElement(ArchiveShareholders_1["default"], null),
                    isArchivePensionVisible && react_1["default"].createElement(ArchivePension_1["default"], null),
                    isArchiveReportingVisible && react_1["default"].createElement(ArchiveReporting_1["default"], null),
                    isArchiveAssetValueRulesVisible && react_1["default"].createElement(ArchiveAssetValueRules_1["default"], null)),
                react_1["default"].createElement(styles_1.TopBlock, { visible: isVisible },
                    react_1["default"].createElement(styles_1.Heading, null, "\u0410\u0440\u0445\u0438\u0432"),
                    react_1["default"].createElement(styles_1.IconContainer, { onClick: onClickHidingArchive },
                        react_1["default"].createElement(DarkIcon_1["default"], { icon: "Cross" })))))));
};
exports["default"] = HidingArchive;
