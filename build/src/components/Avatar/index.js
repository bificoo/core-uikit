'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var Avatar_module = require('./Avatar.module.scss.js');

var Avatar = function (props) {
    var defaultAvatar = (jsxRuntime.jsx("div", _tslib.__assign({ className: Avatar_module["default"]["default-avatar"] }, { children: jsxRuntime.jsx("svg", _tslib.__assign({ width: "24", height: "24", viewBox: "0 0 24 24", role: "presentation" }, { children: jsxRuntime.jsxs("g", _tslib.__assign({ fill: "currentColor", fillRule: "evenodd" }, { children: [jsxRuntime.jsx("path", { d: "M6 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z" }, void 0), jsxRuntime.jsx("circle", { cx: "12", cy: "7", r: "4" }, void 0)] }), void 0) }), void 0) }), void 0));
    return (jsxRuntime.jsx("div", { children: jsxRuntime.jsx("div", _tslib.__assign({ className: Avatar_module["default"].outer, style: props.style }, { children: props.children ? props.children : defaultAvatar }), void 0) }, void 0));
};

exports["default"] = Avatar;
