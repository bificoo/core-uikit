'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../FormLabel/index.js');
var FormContext = require('../FormContext.js');
var uuid = require('../../../utils/uuid.js');
var FormGroup_module = require('./FormGroup.module.scss.js');
var cx = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var FormGroup = function (props) {
    var _a = React.useState({
        formId: props.formId || uuid["default"](),
        entered: false,
        disabled: false,
        readOnly: false,
        isValid: null,
        isInvalid: null,
    }), attributes = _a[0], setAttributes = _a[1];
    var formAttributes = React.useContext(FormContext["default"]).attributes;
    var layout = props.layout || (formAttributes === null || formAttributes === void 0 ? void 0 : formAttributes.layout) || "horizontal";
    var labelWidth = props.labelWidth || (formAttributes === null || formAttributes === void 0 ? void 0 : formAttributes.labelWidth) || "auto";
    var update = function (attributes) {
        setAttributes(function (prev) {
            return _tslib.__assign(_tslib.__assign({}, prev), attributes);
        });
    };
    var label = null;
    var children = [];
    React__default["default"].Children.forEach(props.children, function (child, index$1) {
        if (!React__default["default"].isValidElement(child))
            return;
        if (child.type === index["default"]) {
            label = React__default["default"].cloneElement(child, _tslib.__assign(_tslib.__assign({}, child.props), { style: _tslib.__assign(_tslib.__assign({}, child.props.style), { width: "".concat(labelWidth, "px") }) }));
        }
        else {
            children.push(React__default["default"].cloneElement(child, { key: index$1 }));
        }
    });
    return (jsxRuntime.jsx(FormContext.FormGroupContext.Provider, _tslib.__assign({ value: { attributes: attributes, setAttributes: update } }, { children: jsxRuntime.jsxs("div", _tslib.__assign({ className: cx__default["default"](FormGroup_module["default"].wrapper, FormGroup_module["default"][layout], props.className) }, { children: [label, jsxRuntime.jsx("div", _tslib.__assign({ className: FormGroup_module["default"].group }, { children: children }), void 0)] }), void 0) }), void 0));
};

exports["default"] = FormGroup;
