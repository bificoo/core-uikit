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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";
import styled from "./Tooltip.module.scss";
import { usePopper } from "react-popper";
var Tooltip = function (_a) {
    var _b = _a.arrow, arrow = _b === void 0 ? false : _b, className = _a.className, children = _a.children, content = _a.content, _c = _a.placement, placement = _c === void 0 ? "bottom" : _c;
    var _d = useState(false), isVisible = _d[0], setVisibility = _d[1];
    var _e = React.useState(null), referenceElement = _e[0], setReferenceElement = _e[1];
    var _f = React.useState(null), popperElement = _f[0], setPopperElement = _f[1];
    // the ref for the arrow must be a callback ref
    var _g = useState(null), arrowRef = _g[0], setArrowRef = _g[1];
    var _h = usePopper(referenceElement, popperElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: {
                    element: arrowRef,
                },
            },
            {
                name: "offset",
                options: {
                    offset: [0, 10],
                },
            },
        ],
    }), styles = _h.styles, attributes = _h.attributes;
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: styled.children, ref: setReferenceElement, onMouseEnter: function () { return setVisibility(true); }, onMouseLeave: function () { return setVisibility(false); } }, { children: children }), void 0),
            isVisible &&
                ReactDOM.createPortal(_jsxs("div", __assign({ className: cx(styled.wrapper, className), ref: setPopperElement, style: styles.popper }, attributes.popper, { children: [arrow && (_jsx("div", { id: "arrow", className: styled.arrow, ref: setArrowRef, style: styles.arrow }, void 0)), content] }), void 0), document.body)] }, void 0));
};
export default Tooltip;
