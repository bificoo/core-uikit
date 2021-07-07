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
import { forwardRef } from "react";
var DropdownToggle = forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, onClick = _a.onClick;
    return (_jsx("div", __assign({ className: className, onClick: onClick, ref: ref }, { children: children }), void 0));
});
DropdownToggle.displayName = "DropdownToggle";
export default DropdownToggle;
