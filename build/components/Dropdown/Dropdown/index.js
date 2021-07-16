import { __rest, __assign } from '../../../node_modules/tslib/tslib.es6.js';
import '../../../node_modules/react/jsx-runtime.js';
import React from '../../../node_modules/react/index.js';
import ReactDOM from '../../../node_modules/react-dom/index.js';
import cx from '../../../node_modules/classnames/index.js';
import { usePopper } from '../../../node_modules/react-popper/lib/esm/usePopper.js';
import styled from './Dropdown.module.scss.js';
import DropdownMenu from '../DropdownMenu/index.js';
import DropdownItem from '../DropdownItem/index.js';
import DropdownToggle from '../DropdownToggle/index.js';
import { r as react } from '../../../_virtual/index.js_commonjs-module';
import { j as jsxRuntime } from '../../../_virtual/jsx-runtime.js_commonjs-module';

var Dropdown = function (_a) {
    var _b = _a.open, open = _b === void 0 ? false : _b, _c = _a.trigger, trigger = _c === void 0 ? "hover" : _c, props = __rest(_a, ["open", "trigger"]);
    var dropdownRef = react.exports.useRef(null);
    var _d = react.exports.useState(open), show = _d[0], setShow = _d[1];
    var _e = react.exports.useState(null), toggleElement = _e[0], setToggleElement = _e[1];
    var _f = react.exports.useState(null), menuElement = _f[0], setMenuElement = _f[1];
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
    var Item = props.itemComponent || DropdownItem;
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
    return (jsxRuntime.exports.jsx("div", __assign({ className: cx(styled.wrapper, props.className), ref: dropdownRef, onMouseOver: function () { return trigger === "hover" && handleShow(true); }, onMouseLeave: function () { return trigger === "hover" && handleShow(false); } }, { children: React.Children.map(props.children, function (child) {
            var _a;
            if (!React.isValidElement(child))
                return;
            if (child.type === DropdownToggle || child.type === props.toggleComponent)
                return React.cloneElement(child, { onClick: handleToggleClick, ref: setToggleElement });
            if (child.type === DropdownMenu || child.type === props.menuComponent) {
                var items = child.props.children &&
                    (Array.isArray(child.props.children) ? child.props.children : [child.props.children]);
                return ReactDOM.createPortal(jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: React.cloneElement(child, {
                        className: cx(styled.menu, (_a = {}, _a[styled.show] = show, _a[styled.hover] = trigger === "hover", _a), child.props.className),
                        style: __assign({}, styles.popper),
                        attributes: attributes.popper,
                        ref: setMenuElement,
                    }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) {
                        if (item.type === Item || item.type === props.itemComponent) {
                            return (jsxRuntime.exports.jsx(Item, __assign({}, __assign(__assign({}, item.props), { onClick: function (e, _a) {
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
//# sourceMappingURL=index.js.map
