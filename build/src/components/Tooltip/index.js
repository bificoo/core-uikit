'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ReactDOM = require('react-dom');
var index = require('../../../node_modules/classnames/index.js');
var Tooltip_module = require('./Tooltip.module.scss.js');
var usePopper = require('../../../node_modules/react-popper/lib/esm/usePopper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

var Tooltip = function (_a) {
    var _b = _a.arrow, arrow = _b === void 0 ? false : _b, className = _a.className, children = _a.children, content = _a.content, _c = _a.placement, placement = _c === void 0 ? "bottom" : _c;
    var _d = React.useState(false), isVisible = _d[0], setVisibility = _d[1];
    var _e = React__default['default'].useState(null), referenceElement = _e[0], setReferenceElement = _e[1];
    var _f = React__default['default'].useState(null), popperElement = _f[0], setPopperElement = _f[1];
    // the ref for the arrow must be a callback ref
    var _g = React.useState(null), arrowRef = _g[0], setArrowRef = _g[1];
    var _h = usePopper.usePopper(referenceElement, popperElement, {
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
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", tslib_es6.__assign({ className: Tooltip_module['default'].children, ref: setReferenceElement, onMouseEnter: function () { return setVisibility(true); }, onMouseLeave: function () { return setVisibility(false); } }, { children: children }), void 0), isVisible &&
                ReactDOM__default['default'].createPortal(jsxRuntime.jsxs("div", tslib_es6.__assign({ className: index['default'](Tooltip_module['default'].wrapper, className), ref: setPopperElement, style: styles.popper }, attributes.popper, { children: [arrow && (jsxRuntime.jsx("div", { id: "arrow", className: Tooltip_module['default'].arrow, ref: setArrowRef, style: styles.arrow }, void 0)), content] }), void 0), document.body)] }, void 0));
};

exports.default = Tooltip;
