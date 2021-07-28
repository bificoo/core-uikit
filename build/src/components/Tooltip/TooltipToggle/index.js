'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

var TooltipToggle = React.forwardRef(function TooltipToggle(props, ref) {
    return (jsxRuntime.jsx("div", tslib_es6.__assign({ className: props.className, onClick: props.onClick, ref: ref }, { children: props.children }), void 0));
});

exports.default = TooltipToggle;
