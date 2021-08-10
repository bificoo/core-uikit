'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormContext = require('../FormContext.js');

var Form = function (_a) {
    var layout = _a.layout, labelWidth = _a.labelWidth, props = tslib_es6.__rest(_a, ["layout", "labelWidth"]);
    var _b = React.useState({
        layout: layout,
        labelWidth: labelWidth,
    }), attributes = _b[0], setAttributes = _b[1];
    var update = function (attributes) {
        setAttributes(function (prev) {
            return tslib_es6.__assign(tslib_es6.__assign({}, prev), attributes);
        });
    };
    var submit = function (e) {
        e.preventDefault();
        props.onSubmit && props.onSubmit(e);
    };
    return (jsxRuntime.jsx(FormContext['default'].Provider, tslib_es6.__assign({ value: { attributes: attributes, setAttributes: update } }, { children: jsxRuntime.jsx("form", tslib_es6.__assign({}, props, { onSubmit: submit }, { children: props.children }), void 0) }), void 0));
};

exports['default'] = Form;
