'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormContext = require('../FormContext.js');
var FormLabel_module = require('./FormLabel.module.scss.js');
var index = require('../../../../node_modules/classnames/index.js');

var FormLabel = function (_a) {
    var _b;
    var _c = _a.required, required = _c === void 0 ? false : _c, className = _a.className, htmlFor = _a.htmlFor, props = tslib_es6.__rest(_a, ["required", "className", "htmlFor"]);
    var attributes = React.useContext(FormContext.FormGroupContext).attributes;
    return (jsxRuntime.jsx("label", tslib_es6.__assign({ htmlFor: htmlFor || (attributes === null || attributes === void 0 ? void 0 : attributes.formId), className: index['default'](FormLabel_module['default'].wrapper, className, (_b = {},
            _b[FormLabel_module['default'].required] = required,
            _b)) }, props, { children: props.children }), void 0));
};

exports.default = FormLabel;
