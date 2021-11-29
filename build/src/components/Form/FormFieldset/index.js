'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var FormFieldset_module = require('./FormFieldset.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var FormFieldset = function (_a) {
    var _b;
    var _c = _a.inline, inline = _c === void 0 ? false : _c, props = _tslib.__rest(_a, ["inline"]);
    return (jsxRuntime.jsx("fieldset", _tslib.__assign({ className: cx__default['default']((_b = {}, _b[FormFieldset_module['default'].inline] = inline, _b), props.className) }, { children: props.children }), void 0));
};

exports['default'] = FormFieldset;
