import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import FormContext from '../FormContext.js';

var Form = function (_a) {
    var layout = _a.layout, labelWidth = _a.labelWidth, props = __rest(_a, ["layout", "labelWidth"]);
    var _b = useState({
        layout: layout,
        labelWidth: labelWidth,
    }), attributes = _b[0], setAttributes = _b[1];
    var update = function (attributes) {
        setAttributes(function (prev) {
            return __assign(__assign({}, prev), attributes);
        });
    };
    var submit = function (e) {
        e.preventDefault();
        props.onSubmit && props.onSubmit(e);
    };
    return (jsx(FormContext.Provider, __assign({ value: { attributes: attributes, setAttributes: update } }, { children: jsx("form", __assign({}, props, { onSubmit: submit }, { children: props.children }), void 0) }), void 0));
};

export { Form as default };
