'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormContext = require('../FormContext.js');
var FormLabel_module = require('./FormLabel.module.scss.js');
var cx = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var FormLabel = function (_a) {
    var _b;
    var _c = _a.required, required = _c === void 0 ? false : _c, className = _a.className, htmlFor = _a.htmlFor, props = _tslib.__rest(_a, ["required", "className", "htmlFor"]);
    var attributes = React.useContext(FormContext.FormGroupContext).attributes;
    return (jsxRuntime.jsx("label", _tslib.__assign({ htmlFor: htmlFor || (attributes === null || attributes === void 0 ? void 0 : attributes.formId), className: cx__default['default'](FormLabel_module['default'].wrapper, className, (_b = {},
            _b[FormLabel_module['default'].required] = required,
            _b)) }, props, { children: props.children }), void 0));
};

exports['default'] = FormLabel;
