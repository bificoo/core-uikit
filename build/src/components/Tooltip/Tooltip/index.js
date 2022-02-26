import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import React__default, { useMemo } from 'react';
import Popup from '../../../../node_modules/reactjs-popup/dist/reactjs-popup.esm.js';
import TooltipToggle from '../TooltipToggle/index.js';
import TooltipBody from '../TooltipBody/index.js';
import './Tooltip.module.scss.js';

var Tooltip = function (_a) {
    var _b = _a.on, on = _b === void 0 ? "hover" : _b, _c = _a.position, position = _c === void 0 ? "bottom center" : _c, props = __rest(_a, ["on", "position"]);
    var tooltip = useMemo(function () {
        var triggerElement = jsx("div", {}, void 0);
        var bodyElement = null;
        var bodyStyle = {};
        React__default.Children.forEach(props.children, function (child) {
            if (!React__default.isValidElement(child))
                return;
            if (child.type === TooltipToggle) {
                triggerElement = child;
            }
            else if (child.type === TooltipBody) {
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
    return (jsx(Popup, __assign({ className: "core-tooltip", trigger: jsx("span", { children: tooltip.trigger }, void 0), on: on, position: position, closeOnDocumentClick: true, contentStyle: tooltip.bodyStyle, arrow: true, arrowStyle: { display: "none" } }, { children: jsx("span", { children: tooltip.body }, void 0) }), void 0));
};

export { Tooltip as default };
