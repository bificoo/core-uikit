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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";
import { usePopper } from "react-popper";
import styled from "./Dropdown.module.scss";
import Menu from "../DropdownMenu";
import ItemComponent from "../DropdownItem";
import Toggle from "../DropdownToggle";
var Dropdown = function (_a) {
    var _b = _a.open, open = _b === void 0 ? false : _b, _c = _a.trigger, trigger = _c === void 0 ? "hover" : _c, props = __rest(_a, ["open", "trigger"]);
    var dropdownRef = useRef(null);
    var _d = useState(open), show = _d[0], setShow = _d[1];
    var _e = useState(null), toggleElement = _e[0], setToggleElement = _e[1];
    var _f = useState(null), menuElement = _f[0], setMenuElement = _f[1];
    var _g = usePopper(toggleElement, menuElement, {
        placement: props.placement,
        modifiers: props.popperConfig || [
            {
                name: "offset",
                options: {
                    offset: [-12, 10],
                },
            },
        ],
    }), styles = _g.styles, attributes = _g.attributes, forceUpdate = _g.forceUpdate;
    var Item = props.itemComponent || ItemComponent;
    var handleShow = function (show) {
        forceUpdate && forceUpdate();
        if (typeof show !== "undefined")
            setShow(show);
        else
            setShow(function (prev) { return !prev; });
    };
    var handleToggleClick = function () {
        trigger === "click" && handleShow();
    };
    return (_jsx("div", __assign({ className: cx(styled.wrapper, props.className), ref: dropdownRef, onMouseOver: function () { return trigger === "hover" && handleShow(true); }, onMouseLeave: function () { return trigger === "hover" && handleShow(false); } }, { children: React.Children.map(props.children, function (child) {
            var _a;
            if (!React.isValidElement(child))
                return;
            if (child.type === Toggle || child.type === props.toggleComponent)
                return React.cloneElement(child, { onClick: handleToggleClick, ref: setToggleElement });
            if (child.type === Menu || child.type === props.menuComponent) {
                var items = child.props.children &&
                    (Array.isArray(child.props.children) ? child.props.children : [child.props.children]);
                return ReactDOM.createPortal(_jsx(_Fragment, { children: React.cloneElement(child, {
                        className: cx(styled.menu, (_a = {}, _a[styled.show] = show, _a[styled.hover] = trigger === "hover", _a), child.props.className),
                        style: __assign({}, styles.popper),
                        attributes: attributes.popper,
                        ref: setMenuElement,
                    }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) {
                        if (item.type === Item || item.type === props.itemComponent) {
                            return (_jsx(Item, __assign({}, __assign(__assign({}, item.props), { onClick: function (e, _a) {
                                    var eventKey = _a.eventKey;
                                    item.props.onClick && item.props.onClick(e, { eventKey: eventKey });
                                    handleShow();
                                } })), idx));
                        }
                        else
                            return item;
                    })) }, void 0), document.body);
            }
        }) }), void 0));
};
export default Dropdown;
