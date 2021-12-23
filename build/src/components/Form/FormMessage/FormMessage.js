'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var FormMessage_module = require('./FormMessage.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var FormMessage = function (_a) {
    var className = _a.className, props = _tslib.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("p", _tslib.__assign({ className: cx__default["default"](FormMessage_module["default"].wrapper, FormMessage_module["default"][props.variant], className) }, props, { children: props.children }), void 0));
};

exports["default"] = FormMessage;
