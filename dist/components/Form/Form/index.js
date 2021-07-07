var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import FormContext from "components/Form/FormContext";
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
    return (_jsx(FormContext.Provider, __assign({ value: { attributes: attributes, setAttributes: update } }, { children: _jsx("form", __assign({}, props, { onSubmit: submit }, { children: props.children }), void 0) }), void 0));
};
export default Form;
