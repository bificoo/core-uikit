'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormContext = require('../FormContext.js');
var FormLabel_module = require('./FormLabel.module.scss.js');
var cx = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const FormLabel = (_a) => {
    var { required = false, className, htmlFor } = _a, props = _tslib.__rest(_a, ["required", "className", "htmlFor"]);
    const { attributes } = React.useContext(FormContext.FormGroupContext);
    return (jsxRuntime.jsx("label", Object.assign({ htmlFor: htmlFor || (attributes === null || attributes === void 0 ? void 0 : attributes.formId), className: cx__default['default'](FormLabel_module['default'].wrapper, className, {
            [FormLabel_module['default'].required]: required,
        }) }, props, { children: props.children }), void 0));
};

exports['default'] = FormLabel;
