'use strict';

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var check = require('./check.svg.js');
var FormCheckbox_module = require('./FormCheckbox.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var FormCheckbox = function (_a) {
    var _b;
    var children = _a.children, inline = _a.inline, props = _tslib.__rest(_a, ["children", "inline"]);
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: cx__default['default']("component-checkbox", FormCheckbox_module.wrapper, (_b = {}, _b[FormCheckbox_module.inline] = inline, _b), props.className) }, { children: jsxRuntime.jsxs("label", _tslib.__assign({ className: FormCheckbox_module.label }, { children: [jsxRuntime.jsx("input", _tslib.__assign({ type: "checkbox" }, props), void 0), !props.checked ? (jsxRuntime.jsx(check.ReactComponent, { className: cx__default['default'](FormCheckbox_module.check) }, void 0)) : (jsxRuntime.jsx(check.ReactComponent, { className: cx__default['default'](FormCheckbox_module.check) }, void 0)), jsxRuntime.jsx("span", _tslib.__assign({ className: FormCheckbox_module.content }, { children: children }), void 0)] }), void 0) }), void 0));
};

module.exports = FormCheckbox;
