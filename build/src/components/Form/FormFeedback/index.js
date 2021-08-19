'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var FormFeedback_module = require('./FormFeedback.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const FormFeedback = (_a) => {
    var { className } = _a, props = _tslib.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("p", Object.assign({ className: cx__default['default'](FormFeedback_module['default'].wrapper, className) }, props, { children: props.children }), void 0));
};

exports['default'] = FormFeedback;
