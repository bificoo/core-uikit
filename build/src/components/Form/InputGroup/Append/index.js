'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormContext = require('../../FormContext.js');
var Append_module = require('./Append.module.scss.js');
var cx = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var Append = function (props) {
    var _a;
    var attributes = React.useContext(FormContext.FormGroupContext).attributes;
    return (jsxRuntime.jsx("div", tslib_es6.__assign({ className: cx__default['default'](Append_module['default'].wrapper, (_a = {},
            _a[Append_module['default'].entered] = attributes === null || attributes === void 0 ? void 0 : attributes.entered,
            _a[Append_module['default'].disabled] = attributes === null || attributes === void 0 ? void 0 : attributes.disabled,
            _a[Append_module['default']["read-only"]] = attributes === null || attributes === void 0 ? void 0 : attributes.readOnly,
            _a), props.className) }, { children: props.children }), void 0));
};

exports['default'] = Append;
