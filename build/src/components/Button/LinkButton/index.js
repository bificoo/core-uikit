'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var LinkButton_module = require('./LinkButton.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, className = _a.className, _c = _a.children, children = _c === void 0 ? "Click" : _c, props = _tslib.__rest(_a, ["variant", "className", "children"]);
    return (jsxRuntime.jsx("a", _tslib.__assign({ className: cx__default["default"](LinkButton_module["default"].wrapper, LinkButton_module["default"][variant], className) }, props, { children: children }), void 0));
};

exports["default"] = Button;
