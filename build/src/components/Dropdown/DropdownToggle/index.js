'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

var DropdownToggle = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, onClick = _a.onClick;
    return (jsxRuntime.jsx("div", tslib_es6.__assign({ className: className, onClick: onClick, ref: ref }, { children: children }), void 0));
});
DropdownToggle.displayName = "DropdownToggle";

exports.default = DropdownToggle;
