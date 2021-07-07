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
import { useContext } from "react";
import { FormGroupContext } from "components/Form/FormContext";
import styled from "./FormLabel.module.scss";
import cx from "classnames";
var FormLabel = function (_a) {
    var _b;
    var _c = _a.required, required = _c === void 0 ? false : _c, className = _a.className, htmlFor = _a.htmlFor, props = __rest(_a, ["required", "className", "htmlFor"]);
    var attributes = useContext(FormGroupContext).attributes;
    return (_jsx("label", __assign({ htmlFor: htmlFor || (attributes === null || attributes === void 0 ? void 0 : attributes.formId), className: cx(styled.wrapper, className, (_b = {},
            _b[styled.required] = required,
            _b)) }, props, { children: props.children }), void 0));
};
export default FormLabel;
