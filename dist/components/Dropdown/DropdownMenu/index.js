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
import cx from "classnames";
import { forwardRef } from "react";
import styled from "./Menu.module.scss";
var DropdownMenu = forwardRef(function (_a, ref) {
    var className = _a.className, style = _a.style, attributes = _a.attributes, children = _a.children;
    return (_jsx("div", __assign({ className: cx(styled.wrapper, className), style: style, ref: ref }, attributes, { children: children }), void 0));
});
DropdownMenu.displayName = "DropdownMenu";
export default DropdownMenu;
