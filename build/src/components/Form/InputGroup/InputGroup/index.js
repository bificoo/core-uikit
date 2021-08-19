'use strict';

var _tslib = require('../../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormContext = require('../../FormContext.js');
var InputGroup_module = require('./InputGroup.module.scss.js');
var cx = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var InputGroup = function (props) {
    var _a;
    var attributes = React.useContext(FormContext.FormGroupContext).attributes;
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: cx__default['default'](InputGroup_module.wrapper, (_a = {},
            _a[InputGroup_module.entered] = attributes === null || attributes === void 0 ? void 0 : attributes.entered,
            _a[InputGroup_module.disabled] = attributes === null || attributes === void 0 ? void 0 : attributes.disabled,
            _a[InputGroup_module["read-only"]] = attributes === null || attributes === void 0 ? void 0 : attributes.readOnly,
            _a[InputGroup_module["is-valid"]] = attributes === null || attributes === void 0 ? void 0 : attributes.isValid,
            _a[InputGroup_module["is-invalid"]] = attributes === null || attributes === void 0 ? void 0 : attributes.isInvalid,
            _a), props.className) }, { children: props.children }), void 0));
};

module.exports = InputGroup;
