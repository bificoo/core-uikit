'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var index = require('../../../../node_modules/classnames/index.js');
var FormRadio_module = require('./FormRadio.module.scss.js');

var FormRadio = function (_a) {
    var children = _a.children, props = tslib_es6.__rest(_a, ["children"]);
    return (jsxRuntime.jsx("div", tslib_es6.__assign({ className: index['default']("component-radio", FormRadio_module['default'].wrapper, props.className) }, { children: jsxRuntime.jsxs("label", tslib_es6.__assign({ className: FormRadio_module['default'].label }, { children: [jsxRuntime.jsx("input", tslib_es6.__assign({ type: "radio" }, props), void 0), jsxRuntime.jsx("span", tslib_es6.__assign({ className: FormRadio_module['default'].content }, { children: children }), void 0)] }), void 0) }), void 0));
};

exports.default = FormRadio;
