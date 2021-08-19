'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormContext = require('../FormContext.js');

const Form = (_a) => {
    var { layout, labelWidth } = _a, props = _tslib.__rest(_a, ["layout", "labelWidth"]);
    const [attributes, setAttributes] = React.useState({
        layout: layout,
        labelWidth: labelWidth,
    });
    const update = (attributes) => {
        setAttributes(prev => {
            return Object.assign(Object.assign({}, prev), attributes);
        });
    };
    const submit = (e) => {
        e.preventDefault();
        props.onSubmit && props.onSubmit(e);
    };
    return (jsxRuntime.jsx(FormContext['default'].Provider, Object.assign({ value: { attributes, setAttributes: update } }, { children: jsxRuntime.jsx("form", Object.assign({}, props, { onSubmit: submit }, { children: props.children }), void 0) }), void 0));
};

exports['default'] = Form;
