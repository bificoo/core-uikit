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
import React, { useContext, useEffect, useState } from "react";
import { FormGroupContext } from "components/Form/FormContext";
import cx from "classnames";
import styled from "./FormInput.module.scss";
var FormInput = React.forwardRef(function FormInput(_a, ref) {
    var _b;
    if (ref === void 0) { ref = null; }
    var className = _a.className, _c = _a.type, type = _c === void 0 ? "text" : _c, isValid = _a.isValid, isInvalid = _a.isInvalid, props = __rest(_a, ["className", "type", "isValid", "isInvalid"]);
    var _d = useContext(FormGroupContext), attributes = _d.attributes, setAttributes = _d.setAttributes;
    var _e = useState(false), entered = _e[0], setEntered = _e[1];
    useEffect(function () {
        setAttributes({
            entered: entered,
            isValid: isValid,
            isInvalid: isInvalid,
            disabled: props.disabled,
            readOnly: props.readOnly,
        });
    }, [entered, isValid, isInvalid, props.disabled, props.readOnly]);
    return (_jsx("div", __assign({ className: cx("component-input", styled.wrapper, (_b = {},
            _b[styled.entered] = entered,
            _b[styled.disabled] = !!props.disabled,
            _b[styled["read-only"]] = !!props.readOnly,
            _b[styled["is-valid"]] = isValid,
            _b[styled["is-invalid"]] = isInvalid,
            _b)) }, { children: _jsx("input", __assign({}, props, { ref: ref, type: type, id: attributes === null || attributes === void 0 ? void 0 : attributes.formId, className: cx(styled.control, className), onChange: function (e) {
                if (e.target.value.trim() === "")
                    setEntered(false);
                else
                    setEntered(true);
                props.onChange && props.onChange(e);
            } }), void 0) }), void 0));
});
export default FormInput;
