'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormContext = require('../FormContext.js');

var Form = function (_a) {
    var layout = _a.layout, labelWidth = _a.labelWidth, props = _tslib.__rest(_a, ["layout", "labelWidth"]);
    var _b = React.useState({
        layout: layout,
        labelWidth: labelWidth,
    }), attributes = _b[0], setAttributes = _b[1];
    var update = function (attributes) {
        setAttributes(function (prev) {
            return _tslib.__assign(_tslib.__assign({}, prev), attributes);
        });
    };
    var submit = function (e) {
        e.preventDefault();
        props.onSubmit && props.onSubmit(e);
    };
    return (jsxRuntime.jsx(FormContext["default"].Provider, _tslib.__assign({ value: { attributes: attributes, setAttributes: update } }, { children: jsxRuntime.jsx("form", _tslib.__assign({}, props, { onSubmit: submit }, { children: props.children }), void 0) }), void 0));
};

exports["default"] = Form;
