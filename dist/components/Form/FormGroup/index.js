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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useContext } from "react";
import FormLabel from "../FormLabel";
import FormContext, { FormGroupContext } from "components/Form/FormContext";
import uuid from "utils/uuid";
import styled from "./FormGroup.module.scss";
import cx from "classnames";
var FormGroup = function (props) {
    var _a = useState({
        formId: props.formId || uuid(),
        entered: false,
        disabled: false,
        readOnly: false,
        isValid: null,
        isInvalid: null,
    }), attributes = _a[0], setAttributes = _a[1];
    var formAttributes = useContext(FormContext).attributes;
    var layout = props.layout || (formAttributes === null || formAttributes === void 0 ? void 0 : formAttributes.layout) || "horizontal";
    var labelWidth = props.labelWidth || (formAttributes === null || formAttributes === void 0 ? void 0 : formAttributes.labelWidth) || "auto";
    var update = function (attributes) {
        setAttributes(function (prev) {
            return __assign(__assign({}, prev), attributes);
        });
    };
    var label = null;
    var children = [];
    React.Children.forEach(props.children, function (child, index) {
        if (!React.isValidElement(child))
            return;
        if (child.type === FormLabel) {
            label = React.cloneElement(child, __assign(__assign({}, child.props), { style: __assign(__assign({}, child.props.style), { width: labelWidth + "px" }) }));
        }
        else {
            children.push(React.cloneElement(child, { key: index }));
        }
    });
    return (_jsx(FormGroupContext.Provider, __assign({ value: { attributes: attributes, setAttributes: update } }, { children: _jsxs("div", __assign({ className: cx(styled.wrapper, styled[layout], props.className) }, { children: [label, _jsx("div", __assign({ className: styled.group }, { children: children }), void 0)] }), void 0) }), void 0));
};
export default FormGroup;
