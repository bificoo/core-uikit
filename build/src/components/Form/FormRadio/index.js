'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var FormRadio_module = require('./FormRadio.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var FormRadio = function (_a) {
    var _b;
    var children = _a.children, inline = _a.inline, props = tslib_es6.__rest(_a, ["children", "inline"]);
    return (jsxRuntime.jsx("div", tslib_es6.__assign({ className: cx__default['default']("component-radio", FormRadio_module['default'].wrapper, (_b = {}, _b[FormRadio_module['default'].inline] = inline, _b), props.className) }, { children: jsxRuntime.jsxs("label", tslib_es6.__assign({ className: FormRadio_module['default'].label }, { children: [jsxRuntime.jsx("input", tslib_es6.__assign({ type: "radio" }, props), void 0), jsxRuntime.jsx("span", tslib_es6.__assign({ className: FormRadio_module['default'].content }, { children: children }), void 0)] }), void 0) }), void 0));
};

exports.default = FormRadio;
