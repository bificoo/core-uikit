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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cx from "classnames";
import styled from "./FormRadio.module.scss";
var FormRadio = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (_jsx("div", __assign({ className: cx("component-radio", styled.wrapper, props.className) }, { children: _jsxs("label", __assign({ className: styled.label }, { children: [_jsx("input", __assign({ type: "radio" }, props), void 0),
                _jsx("span", __assign({ className: styled.content }, { children: children }), void 0)] }), void 0) }), void 0));
};
export default FormRadio;
