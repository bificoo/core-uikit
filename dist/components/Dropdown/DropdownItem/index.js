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
import styled from "./Item.module.scss";
var DropdownItem = function (_a) {
    var _b;
    var className = _a.className, children = _a.children, eventKey = _a.eventKey, active = _a.active, onClick = _a.onClick;
    return (_jsx("div", __assign({ className: cx(styled.wrapper, (_b = {}, _b[styled.active] = active, _b), className), onClick: function (e) { return onClick && onClick(e, { eventKey: eventKey }); } }, { children: children }), void 0));
};
export default DropdownItem;
