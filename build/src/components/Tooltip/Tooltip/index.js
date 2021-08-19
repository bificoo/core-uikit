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

const Tooltip = (_a) => {
    var { on = "hover", position = "bottom center", arrow = true } = _a, props = _tslib.__rest(_a, ["on", "position", "arrow"]);
    const tooltip = React.useMemo(() => {
        let triggerElement = jsxRuntime.jsx("div", {}, void 0);
        let bodyElement = null;
        React__default['default'].Children.forEach(props.children, child => {
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
    return (jsxRuntime.jsx(reactjsPopup_esm['default'], Object.assign({ className: "core-tooltip", trigger: jsxRuntime.jsx("span", { children: tooltip.trigger }, void 0), on: on, position: position, closeOnDocumentClick: true, arrow: arrow }, { children: jsxRuntime.jsx("span", { children: tooltip.body }, void 0) }), void 0));
};

exports['default'] = Tooltip;
