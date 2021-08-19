'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var Badge_module = require('./Badge.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const Badge = (_a) => {
    var { variant = "primary", pill = false, className, children } = _a, props = _tslib.__rest(_a, ["variant", "pill", "className", "children"]);
    return (jsxRuntime.jsx("span", Object.assign({ className: cx__default['default'](Badge_module['default'].wrapper, Badge_module['default'][variant], { [Badge_module['default'].pill]: pill }, className) }, props, { children: children }), void 0));
};

exports['default'] = Badge;
