import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef, useState, useRef, useMemo, useLayoutEffect, useImperativeHandle } from 'react';
import cx from 'classnames';
import Popup from '../../../../node_modules/reactjs-popup/dist/reactjs-popup.esm.js';
import { DropdownContext } from '../DropdownContext.js';
import Dropdown$1 from '../index.js';
import DropdownMenu from '../DropdownMenu/index.js';
import styled from './Dropdown.module.scss.js';

var Dropdown = forwardRef(function Dropdown(props, ref) {
    var _a = useState(100), clientWidth = _a[0], setClientWidth = _a[1];
    var _b = useState(props.defaultActiveKey), eventKey = _b[0], setEventKay = _b[1];
    var popupRef = useRef(null);
    var triggerRef = useRef(null);
    var dropdown = useMemo(function () {
        var triggerElement = jsx("div", {}, void 0);
        var menuElement = null;
        React__default.Children.forEach(props.children, function (child) {
            if (!React__default.isValidElement(child))
                return;
            if (child.type === Dropdown$1.Toggle) {
                triggerElement = child;
            }
            if (child.type === DropdownMenu) {
                menuElement = React__default.cloneElement(child, {
                    style: __assign(__assign({}, child.props.style), { minWidth: clientWidth }),
                });
            }
        });
        return {
            trigger: triggerElement,
            menu: menuElement,
        };
    }, [props.children, clientWidth]);
    var handleClickItem = function (e, _a) {
        var _b;
        var eventKey = _a.eventKey;
        if (!eventKey)
            return;
        setEventKay(eventKey);
        props.onSelect && props.onSelect(e, { eventKey: eventKey });
        (_b = popupRef.current) === null || _b === void 0 ? void 0 : _b.close();
    };
    useLayoutEffect(function () {
        var _a;
        setClientWidth(((_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) || 100);
    }, []);
    useImperativeHandle(ref, function () { return ({
        close: function () { var _a; return popupRef.current && ((_a = popupRef.current) === null || _a === void 0 ? void 0 : _a.close()); }
    }); });
    return (jsx(DropdownContext.Provider, __assign({ value: { activeKey: eventKey, setActiveKey: handleClickItem } }, { children: jsx("div", __assign({ className: cx(styled.wrapper, props.className), style: props.style, ref: triggerRef }, { children: jsx(Popup, __assign({ ref: popupRef, className: "dropdown", trigger: function (open) { return dropdown.trigger && React__default.cloneElement(dropdown.trigger, { open: open }); }, position: ["bottom left"], disabled: props.disabled, on: "click", closeOnDocumentClick: true, mouseLeaveDelay: 300, mouseEnterDelay: 0, arrow: false, contentStyle: {
                    border: "none",
                    padding: "8px",
                    boxShadow: "none",
                } }, { children: dropdown.menu }), void 0) }), void 0) }), void 0));
});

export { Dropdown as default };
