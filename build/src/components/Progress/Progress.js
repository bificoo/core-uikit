'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var Progress_module = require('./Progress.module.scss.js');

var Progress = function (props) {
    return (jsxRuntime.jsxs("div", _tslib.__assign({ className: Progress_module["default"].wrapper }, { children: [jsxRuntime.jsx("div", _tslib.__assign({ className: Progress_module["default"]["progress-bar"] }, { children: jsxRuntime.jsx("div", { className: Progress_module["default"].inner, style: { width: "".concat(props.percent, "%") } }, void 0) }), void 0), jsxRuntime.jsxs("div", _tslib.__assign({ className: Progress_module["default"].percent }, { children: [props.percent, "%"] }), void 0)] }), void 0));
};

exports["default"] = Progress;
