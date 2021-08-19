'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var Button_module = require('./Button.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var Button = function (_a) {
    var _b;
    var _c = _a.variant, variant = _c === void 0 ? "primary" : _c, _d = _a.block, block = _d === void 0 ? false : _d, className = _a.className, _e = _a.children, children = _e === void 0 ? "Click" : _e, props = tslib_es6.__rest(_a, ["variant", "block", "className", "children"]);
    return (jsxRuntime.jsx("button", tslib_es6.__assign({ className: cx__default['default'](Button_module['default'].wrapper, Button_module['default'][variant], (_b = {}, _b[Button_module['default'].block] = block, _b), className) }, props, { children: children }), void 0));
};

exports['default'] = Button;
