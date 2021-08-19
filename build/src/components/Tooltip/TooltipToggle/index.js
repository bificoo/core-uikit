'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

const TooltipToggle = React.forwardRef(function TooltipToggle(props, ref) {
    return (jsxRuntime.jsx("div", Object.assign({ className: props.className, onClick: props.onClick, ref: ref }, { children: props.children }), void 0));
});

exports['default'] = TooltipToggle;
