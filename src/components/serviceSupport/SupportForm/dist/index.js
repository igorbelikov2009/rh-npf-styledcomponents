"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var InputTitle_1 = require("../../ui/inputs/InputTitle");
var styles_1 = require("./styles");
var InputSubmit_1 = require("../../ui/inputs/InputSubmit");
var SupportForm = function () {
    var _a, _b, _c, _d, _e;
    var _f = react_1.useState(false), isActiveUserName = _f[0], setActiveUserName = _f[1];
    var _g = react_1.useState(false), isActivePhone = _g[0], setActivePhone = _g[1];
    var _h = react_1.useState(false), isActiveEmail = _h[0], setActiveEmail = _h[1];
    var _j = react_1.useState(false), isActivePassword = _j[0], setActivePassword = _j[1];
    var _k = react_1.useState(false), isActiveMessage = _k[0], setActiveMessage = _k[1];
    var _l = react_hook_form_1.useForm({ mode: "all" }), register = _l.register, // позволяет регистрировать различные поля для форм
    _m = _l.formState, errors = _m.errors, isValid = _m.isValid, // объект с ошибками и т.д...
    handleSubmit = _l.handleSubmit, // некая обертка над нашим кастомным обработчиком отправки формы, она позволяет делать магии, связанные с валидацией.
    reset = _l.reset, // для очистки полей после отправки формы
    watch = _l.watch; // all / onBlur / onChange / onSubmit / onTouched
    var formData = {};
    // наш кастомный обработчик отправки формы
    var onSubmit = function (formData) {
        // formData - это набор данных из нашей формы
        // console.log(formData);
        localStorage.setItem("formData-renaissance-pension", JSON.stringify(formData));
        reset();
        setActiveUserName(false);
        setActivePhone(false);
        setActiveEmail(false);
        setActivePassword(false);
        setActiveMessage(false);
    };
    // console.log(watch("firstName")); // следит за изменением значения
    // Восстановить из localStorage
    if (localStorage.getItem("formData-renaissance-pension")) {
        formData = JSON.parse(localStorage.getItem("formData-renaissance-pension") || "");
        // Для typescript вы можете использовать ||оператор и добавить к нему строку, чтобы она больше
        // не была нулевой. JSON.parse(localStorage.getItem("formData-renaissance-pension") || "")
    }
    //   console.log(formData)
    return (react_1["default"].createElement(styles_1.StyledSupportForm, null,
        react_1["default"].createElement(styles_1.Container, null,
            react_1["default"].createElement(styles_1.Content, null,
                react_1["default"].createElement(styles_1.CustomerService, null,
                    react_1["default"].createElement(styles_1.Heading, null,
                        "\u041A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0430\u044F ",
                        react_1["default"].createElement(styles_1.Span, null, "\u0441\u043B\u0443\u0436\u0431\u0430")),
                    react_1["default"].createElement(styles_1.PhoneSupport, { href: "tel:+78002004766" }, " 8 800 200-47-66 "),
                    react_1["default"].createElement(styles_1.PhoneTitle, null, "\u0437\u0432\u043E\u043D\u043E\u043A \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439"))),
            react_1["default"].createElement(styles_1.Form, { onSubmit: handleSubmit(onSubmit) },
                react_1["default"].createElement(styles_1.Label, null,
                    react_1["default"].createElement(InputTitle_1["default"], { title: "\u041A\u0430\u043A \u0432\u0430\u0441 \u0437\u043E\u0432\u0443\u0442?", isActive: isActiveUserName }),
                    react_1["default"].createElement(styles_1.Input, __assign({}, register("userName", {
                        required: "Это поле обязательно к заполнению",
                        onChange: function (event) {
                            setActiveUserName(true);
                        },
                        onBlur: function () {
                            if (watch("userName").length === 0) {
                                setActiveUserName(false);
                            }
                        },
                        minLength: {
                            value: 3,
                            message: "Минимум 3 символов"
                        }
                    }))),
                    (errors === null || errors === void 0 ? void 0 : errors.userName) && react_1["default"].createElement(styles_1.LineInvalid, null),
                    (errors === null || errors === void 0 ? void 0 : errors.userName) && react_1["default"].createElement(styles_1.SpanError, null, ((_a = errors === null || errors === void 0 ? void 0 : errors.userName) === null || _a === void 0 ? void 0 : _a.message) || "Error!")),
                react_1["default"].createElement(styles_1.Label, null,
                    react_1["default"].createElement(InputTitle_1["default"], { title: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", isActive: isActivePhone }),
                    react_1["default"].createElement(styles_1.Input, __assign({ type: "tel" }, register("phone", {
                        required: "Это поле обязательно к заполнению",
                        onChange: function (event) {
                            setActivePhone(true);
                        },
                        onBlur: function () {
                            if (watch("phone").length === 0) {
                                setActivePhone(false);
                            }
                        },
                        minLength: {
                            value: 11,
                            message: "Минимум 11 символов"
                        },
                        maxLength: {
                            value: 16,
                            message: "Максимум 16 символов"
                        }
                    }))),
                    (errors === null || errors === void 0 ? void 0 : errors.phone) && react_1["default"].createElement(styles_1.LineInvalid, null),
                    (errors === null || errors === void 0 ? void 0 : errors.phone) && react_1["default"].createElement(styles_1.SpanError, null,
                        ((_b = errors === null || errors === void 0 ? void 0 : errors.phone) === null || _b === void 0 ? void 0 : _b.message) || "Error!",
                        " ")),
                react_1["default"].createElement(styles_1.Label, null,
                    react_1["default"].createElement(InputTitle_1["default"], { title: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430", isActive: isActiveEmail }),
                    react_1["default"].createElement(styles_1.Input, __assign({ type: "email" }, register("email", {
                        required: "Это поле обязательно к заполнению",
                        onChange: function (event) {
                            setActiveEmail(true);
                        },
                        onBlur: function () {
                            if (watch("email").length === 0) {
                                setActiveEmail(false);
                            }
                        },
                        minLength: {
                            value: 5,
                            message: "Минимум 5 символов"
                        }
                    }))),
                    (errors === null || errors === void 0 ? void 0 : errors.email) && react_1["default"].createElement(styles_1.LineInvalid, null),
                    (errors === null || errors === void 0 ? void 0 : errors.email) && react_1["default"].createElement(styles_1.SpanError, null, ((_c = errors === null || errors === void 0 ? void 0 : errors.email) === null || _c === void 0 ? void 0 : _c.message) || "Error!")),
                react_1["default"].createElement(styles_1.Label, null,
                    react_1["default"].createElement(InputTitle_1["default"], { title: "\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C", isActive: isActivePassword }),
                    react_1["default"].createElement(styles_1.Input, __assign({ type: "text" }, register("password", {
                        required: "Это поле обязательно к заполнению",
                        onChange: function (event) {
                            setActivePassword(true);
                        },
                        onBlur: function () {
                            if (watch("password").length === 0) {
                                setActivePassword(false);
                            }
                        },
                        minLength: {
                            value: 5,
                            message: "Минимум 5 символов"
                        }
                    }))),
                    (errors === null || errors === void 0 ? void 0 : errors.password) && react_1["default"].createElement(styles_1.LineInvalid, null),
                    (errors === null || errors === void 0 ? void 0 : errors.password) && react_1["default"].createElement(styles_1.SpanError, null, ((_d = errors === null || errors === void 0 ? void 0 : errors.password) === null || _d === void 0 ? void 0 : _d.message) || "Error!")),
                react_1["default"].createElement(styles_1.Label, null,
                    react_1["default"].createElement(InputTitle_1["default"], { title: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435", isActive: isActiveMessage }),
                    react_1["default"].createElement(styles_1.Input, __assign({ type: "text" }, register("message", {
                        required: "Это поле обязательно к заполнению",
                        onChange: function (event) {
                            setActiveMessage(true);
                        },
                        onBlur: function () {
                            if (watch("message").length === 0) {
                                setActiveMessage(false);
                            }
                        },
                        minLength: {
                            value: 15,
                            message: "Минимум 15 символов"
                        }
                    }))),
                    (errors === null || errors === void 0 ? void 0 : errors.message) && react_1["default"].createElement(styles_1.LineInvalid, null),
                    (errors === null || errors === void 0 ? void 0 : errors.message) && react_1["default"].createElement(styles_1.SpanError, null, ((_e = errors === null || errors === void 0 ? void 0 : errors.message) === null || _e === void 0 ? void 0 : _e.message) || "Error!")),
                react_1["default"].createElement(styles_1.ButtonContainer, null,
                    react_1["default"].createElement(InputSubmit_1["default"], { children: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443", disabled: !isValid }))))));
};
exports["default"] = SupportForm;
