'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var FormFeedback_module = require('./FormFeedback.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var FormFeedback = function (_a) {
    var className = _a.className, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("p", tslib_es6.__assign({ className: cx__default['default'](FormFeedback_module['default'].wrapper, className) }, props, { children: props.children }), void 0));
};

exports['default'] = FormFeedback;
