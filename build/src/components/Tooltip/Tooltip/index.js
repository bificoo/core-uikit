'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactjsPopup_esm = require('../../../../node_modules/reactjs-popup/dist/reactjs-popup.esm.js');
var cx = require('classnames');
var Dropdown_module = require('../../Dropdown/Dropdown/Dropdown.module.scss.js');
var index = require('../TooltipToggle/index.js');
var index$1 = require('../TooltipBody/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var Tooltip = function (_a) {
    var _b = _a.on, on = _b === void 0 ? "hover" : _b, _c = _a.position, position = _c === void 0 ? "bottom center" : _c, _d = _a.arrow, arrow = _d === void 0 ? true : _d, props = tslib_es6.__rest(_a, ["on", "position", "arrow"]);
    var tooltip = React.useMemo(function () {
        var triggerElement = jsxRuntime.jsx("div", {}, void 0);
        var bodyElement = null;
        React__default['default'].Children.forEach(props.children, function (child) {
            if (!React__default['default'].isValidElement(child))
                return;
            if (child.type === index['default']) {
                triggerElement = child;
            }
            else if (child.type === index$1['default']) {
                bodyElement = child;
            }
        });
        return {
            trigger: triggerElement,
            body: bodyElement,
        };
    }, [props.children]);
    return (jsxRuntime.jsxs("div", tslib_es6.__assign({ className: cx__default['default'](Dropdown_module['default'].wrapper, props.className) }, { children: [jsxRuntime.jsx("div", { children: jsxRuntime.jsx(reactjsPopup_esm['default'], tslib_es6.__assign({ trigger: function (open) { return (jsxRuntime.jsxs("button", tslib_es6.__assign({ className: "button" }, { children: ["Trigger - ", open ? "Opened" : "Closed"] }), void 0)); }, on: ["hover", "focus"], position: "right center", closeOnDocumentClick: true }, { children: jsxRuntime.jsx("span", { children: " Popup content " }, void 0) }), void 0) }, void 0), jsxRuntime.jsx("div", { children: jsxRuntime.jsx(reactjsPopup_esm['default'], tslib_es6.__assign({ trigger: function (open) { return React__default['default'].cloneElement(tooltip.trigger, { open: open }); }, position: position, on: on, closeOnDocumentClick: true, mouseLeaveDelay: 300, mouseEnterDelay: 0, arrow: arrow, contentStyle: {
                        width: "auto",
                        border: "none",
                        padding: "8px",
                        boxShadow: "none",
                    }, arrowStyle: {
                        width: "10x",
                        height: "10x",
                        backgroundColor: "#172b4d",
                        top: "8px",
                    } }, { children: tooltip.body }), void 0) }, void 0)] }), void 0));
};

exports['default'] = Tooltip;
