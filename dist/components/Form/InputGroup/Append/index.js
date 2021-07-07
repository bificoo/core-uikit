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
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { FormGroupContext } from "components/Form/FormContext";
import styled from "./Append.module.scss";
import cx from "classnames";
var Append = function (props) {
    var _a;
    var attributes = useContext(FormGroupContext).attributes;
    return (_jsx("div", __assign({ className: cx(styled.wrapper, (_a = {},
            _a[styled.entered] = attributes === null || attributes === void 0 ? void 0 : attributes.entered,
            _a[styled.disabled] = attributes === null || attributes === void 0 ? void 0 : attributes.disabled,
            _a[styled["read-only"]] = attributes === null || attributes === void 0 ? void 0 : attributes.readOnly,
            _a), props.className) }, { children: props.children }), void 0));
};
export default Append;
