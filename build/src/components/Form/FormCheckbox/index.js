'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var index = require('../../../../node_modules/classnames/index.js');
var check = require('./check.svg.js');
var FormCheckbox_module = require('./FormCheckbox.module.scss.js');

var FormCheckbox = function (_a) {
    var children = _a.children, props = tslib_es6.__rest(_a, ["children"]);
    return (jsxRuntime.jsx("div", tslib_es6.__assign({ className: index['default']("component-checkbox", FormCheckbox_module['default'].wrapper, props.className) }, { children: jsxRuntime.jsxs("label", tslib_es6.__assign({ className: FormCheckbox_module['default'].label }, { children: [jsxRuntime.jsx("input", tslib_es6.__assign({ type: "checkbox" }, props), void 0), !props.checked ? (jsxRuntime.jsx(check.ReactComponent, { className: index['default'](FormCheckbox_module['default'].check) }, void 0)) : (jsxRuntime.jsx(check.ReactComponent, { className: index['default'](FormCheckbox_module['default'].check) }, void 0)), jsxRuntime.jsx("span", tslib_es6.__assign({ className: FormCheckbox_module['default'].content }, { children: children }), void 0)] }), void 0) }), void 0));
};

exports.default = FormCheckbox;
