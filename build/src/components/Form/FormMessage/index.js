'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var FormMessage = require('./FormMessage.js');

var FormHelperMessage = function (props) { return jsxRuntime.jsx(FormMessage['default'], _tslib.__assign({ variant: "helper" }, props), void 0); };
var FormValidMessage = function (props) { return jsxRuntime.jsx(FormMessage['default'], _tslib.__assign({ variant: "valid" }, props), void 0); };
var FormErrorMessage = function (props) { return jsxRuntime.jsx(FormMessage['default'], _tslib.__assign({ variant: "error" }, props), void 0); };

exports.default = FormMessage['default'];
exports.FormErrorMessage = FormErrorMessage;
exports.FormHelperMessage = FormHelperMessage;
exports.FormValidMessage = FormValidMessage;
