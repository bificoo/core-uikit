'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var React = require('react');
var Menu_module = require('./Menu.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var DropdownMenu = React.forwardRef(function (_a, ref) {
    var className = _a.className, style = _a.style, attributes = _a.attributes, children = _a.children;
    return (jsxRuntime.jsx("div", tslib_es6.__assign({ className: cx__default['default'](Menu_module['default'].wrapper, className), style: style, ref: ref }, attributes, { children: children }), void 0));
});
DropdownMenu.displayName = "DropdownMenu";

exports.default = DropdownMenu;
