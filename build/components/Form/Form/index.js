'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
require('../../../node_modules/react/jsx-runtime.js');
require('../../../node_modules/react/index.js');
var FormContext = require('../FormContext.js');
var index = require('../../../_virtual/index.js_commonjs-module');
var jsxRuntime = require('../../../_virtual/jsx-runtime.js_commonjs-module');

var Form = function (_a) {
    var layout = _a.layout, labelWidth = _a.labelWidth, props = tslib_es6.__rest(_a, ["layout", "labelWidth"]);
    var _b = index.react.exports.useState({
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
    return (jsxRuntime.jsxRuntime.exports.jsx(FormContext['default'].Provider, tslib_es6.__assign({ value: { attributes: attributes, setAttributes: update } }, { children: jsxRuntime.jsxRuntime.exports.jsx("form", tslib_es6.__assign({}, props, { onSubmit: submit }, { children: props.children }), void 0) }), void 0));
};

exports.default = Form;
//# sourceMappingURL=index.js.map
