import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import '../../node_modules/react/jsx-runtime.js';
import React from '../../node_modules/react/index.js';
import ReactDOM from '../../node_modules/react-dom/index.js';
import cx from '../../node_modules/classnames/index.js';
import styled from './Tooltip.module.scss.js';
import { usePopper } from '../../node_modules/react-popper/lib/esm/usePopper.js';
import { r as react } from '../../_virtual/index.js_commonjs-module';
import { j as jsxRuntime } from '../../_virtual/jsx-runtime.js_commonjs-module';

var Tooltip = function (_a) {
    var _b = _a.arrow, arrow = _b === void 0 ? false : _b, className = _a.className, children = _a.children, content = _a.content, _c = _a.placement, placement = _c === void 0 ? "bottom" : _c;
    var _d = react.exports.useState(false), isVisible = _d[0], setVisibility = _d[1];
    var _e = React.useState(null), referenceElement = _e[0], setReferenceElement = _e[1];
    var _f = React.useState(null), popperElement = _f[0], setPopperElement = _f[1];
    // the ref for the arrow must be a callback ref
    var _g = react.exports.useState(null), arrowRef = _g[0], setArrowRef = _g[1];
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
    return (jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx("div", __assign({ className: styled.children, ref: setReferenceElement, onMouseEnter: function () { return setVisibility(true); }, onMouseLeave: function () { return setVisibility(false); } }, { children: children }), void 0),
            isVisible &&
                ReactDOM.createPortal(jsxRuntime.exports.jsxs("div", __assign({ className: cx(styled.wrapper, className), ref: setPopperElement, style: styles.popper }, attributes.popper, { children: [arrow && (jsxRuntime.exports.jsx("div", { id: "arrow", className: styled.arrow, ref: setArrowRef, style: styles.arrow }, void 0)), content] }), void 0), document.body)] }, void 0));
};

export default Tooltip;
//# sourceMappingURL=index.js.map
