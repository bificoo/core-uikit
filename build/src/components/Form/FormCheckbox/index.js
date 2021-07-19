'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var check = require('./check.svg.js');
var FormCheckbox_module = require('./FormCheckbox.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var FormCheckbox = function (_a) {
    var children = _a.children, props = tslib_es6.__rest(_a, ["children"]);
    return (jsxRuntime.jsx("div", tslib_es6.__assign({ className: cx__default['default']("component-checkbox", FormCheckbox_module['default'].wrapper, props.className) }, { children: jsxRuntime.jsxs("label", tslib_es6.__assign({ className: FormCheckbox_module['default'].label }, { children: [jsxRuntime.jsx("input", tslib_es6.__assign({ type: "checkbox" }, props), void 0), !props.checked ? (jsxRuntime.jsx(check.ReactComponent, { className: cx__default['default'](FormCheckbox_module['default'].check) }, void 0)) : (jsxRuntime.jsx(check.ReactComponent, { className: cx__default['default'](FormCheckbox_module['default'].check) }, void 0)), jsxRuntime.jsx("span", tslib_es6.__assign({ className: FormCheckbox_module['default'].content }, { children: children }), void 0)] }), void 0) }), void 0));
};

exports.default = FormCheckbox;
