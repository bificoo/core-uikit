'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var FormRadio_module = require('./FormRadio.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const FormRadio = (_a) => {
    var { children, inline } = _a, props = _tslib.__rest(_a, ["children", "inline"]);
    return (jsxRuntime.jsx("div", Object.assign({ className: cx__default['default']("component-radio", FormRadio_module['default'].wrapper, { [FormRadio_module['default'].inline]: inline }, props.className) }, { children: jsxRuntime.jsxs("label", Object.assign({ className: FormRadio_module['default'].label }, { children: [jsxRuntime.jsx("input", Object.assign({ type: "radio" }, props), void 0), jsxRuntime.jsx("span", Object.assign({ className: FormRadio_module['default'].content }, { children: children }), void 0)] }), void 0) }), void 0));
};

exports['default'] = FormRadio;
