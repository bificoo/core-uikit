'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var arrow = require('./arrow.svg.js');
var DropdownArrow_module = require('./DropdownArrow.module.scss.js');
var cx = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var DropdownArrow = function (_a) {
    var _b = _a.direction, direction = _b === void 0 ? "down" : _b;
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: cx__default['default'](DropdownArrow_module['default'].wrapper, DropdownArrow_module['default']["direction-" + direction]) }, { children: jsxRuntime.jsx(arrow.ReactComponent, {}, void 0) }), void 0));
};

exports['default'] = DropdownArrow;
