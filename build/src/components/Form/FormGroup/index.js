'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index$1 = require('../FormLabel/index.js');
var FormContext = require('../FormContext.js');
require('../../../utils/uuid.js');
var FormGroup_module = require('./FormGroup.module.scss.js');
var cx = require('classnames');
var index = require('../../../../node_modules/nanoid/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var FormGroup = function (props) {
    var _a = React.useState({
        formId: props.formId || index.nanoid(),
        entered: false,
        disabled: false,
        readOnly: false,
        isValid: null,
        isInvalid: null,
    }), attributes = _a[0], setAttributes = _a[1];
    var formAttributes = React.useContext(FormContext['default']).attributes;
    var layout = props.layout || (formAttributes === null || formAttributes === void 0 ? void 0 : formAttributes.layout) || "horizontal";
    var labelWidth = props.labelWidth || (formAttributes === null || formAttributes === void 0 ? void 0 : formAttributes.labelWidth) || "auto";
    var update = function (attributes) {
        setAttributes(function (prev) {
            return tslib_es6.__assign(tslib_es6.__assign({}, prev), attributes);
        });
    };
    var label = null;
    var children = [];
    React__default['default'].Children.forEach(props.children, function (child, index) {
        if (!React__default['default'].isValidElement(child))
            return;
        if (child.type === index$1['default']) {
            label = React__default['default'].cloneElement(child, tslib_es6.__assign(tslib_es6.__assign({}, child.props), { style: tslib_es6.__assign(tslib_es6.__assign({}, child.props.style), { width: labelWidth + "px" }) }));
        }
        else {
            children.push(React__default['default'].cloneElement(child, { key: index }));
        }
    });
    return (jsxRuntime.jsx(FormContext.FormGroupContext.Provider, tslib_es6.__assign({ value: { attributes: attributes, setAttributes: update } }, { children: jsxRuntime.jsxs("div", tslib_es6.__assign({ className: cx__default['default'](FormGroup_module['default'].wrapper, FormGroup_module['default'][layout], props.className) }, { children: [label, jsxRuntime.jsx("div", tslib_es6.__assign({ className: FormGroup_module['default'].group }, { children: children }), void 0)] }), void 0) }), void 0));
};

exports.default = FormGroup;
