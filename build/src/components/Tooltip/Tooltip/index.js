'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactjsPopup_esm = require('../../../../node_modules/reactjs-popup/dist/reactjs-popup.esm.js');
var index = require('../TooltipToggle/index.js');
var index$1 = require('../TooltipBody/index.js');
require('./Tooltip.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Tooltip = function (_a) {
    var _b = _a.on, on = _b === void 0 ? ["hover"] : _b, _c = _a.position, position = _c === void 0 ? "bottom center" : _c, _d = _a.arrow, arrow = _d === void 0 ? false : _d, _e = _a.offsetX, offsetX = _e === void 0 ? 8 : _e, _f = _a.offsetY, offsetY = _f === void 0 ? 0 : _f, props = _tslib.__rest(_a, ["on", "position", "arrow", "offsetX", "offsetY"]);
    var tooltip = React.useMemo(function () {
        var triggerElement = jsxRuntime.jsx("div", {}, void 0);
        var bodyElement = null;
        var bodyStyle = {};
        React__default['default'].Children.forEach(props.children, function (child) {
            if (!React__default['default'].isValidElement(child))
                return;
            if (child.type === index['default']) {
                triggerElement = child;
            }
            else if (child.type === index$1['default']) {
                bodyElement = child;
                bodyStyle = child.props.style || {};
            }
        });
        return {
            trigger: triggerElement,
            body: bodyElement,
            bodyStyle: bodyStyle,
        };
    }, [props.children]);
    return (jsxRuntime.jsx(reactjsPopup_esm['default'], _tslib.__assign({ className: "core-tooltip", trigger: jsxRuntime.jsx("span", { children: tooltip.trigger }, void 0), on: on, position: position, closeOnDocumentClick: true, contentStyle: tooltip.bodyStyle, arrow: arrow, offsetX: offsetX, offsetY: offsetY }, { children: jsxRuntime.jsx("span", { children: tooltip.body }, void 0) }), void 0));
};

exports['default'] = Tooltip;
