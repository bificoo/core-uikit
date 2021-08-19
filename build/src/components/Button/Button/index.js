'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var Button_module = require('./Button.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const Button = (_a) => {
    var { variant = "primary", block = false, className, children = "Click" } = _a, props = _tslib.__rest(_a, ["variant", "block", "className", "children"]);
    return (jsxRuntime.jsx("button", Object.assign({ className: cx__default['default'](Button_module['default'].wrapper, Button_module['default'][variant], { [Button_module['default'].block]: block }, className) }, props, { children: children }), void 0));
};

exports['default'] = Button;
