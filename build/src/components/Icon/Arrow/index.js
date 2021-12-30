'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var arrow = require('./arrow.svg.js');
var Arrow_module = require('./Arrow.module.scss.js');
var cx = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var Arrow = function (_a) {
    var _b = _a.direction, direction = _b === void 0 ? "down" : _b, style = _a.style;
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: cx__default["default"](Arrow_module["default"].wrapper, Arrow_module["default"]["direction-".concat(direction)]), style: style }, { children: jsxRuntime.jsx(arrow.ReactComponent, {}, void 0) }), void 0));
};

exports["default"] = Arrow;
