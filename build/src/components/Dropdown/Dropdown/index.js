'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ReactDOM = require('react-dom');
var cx = require('classnames');
var usePopper = require('../../../../node_modules/react-popper/lib/esm/usePopper.js');
var Dropdown_module = require('./Dropdown.module.scss.js');
var index$2 = require('../DropdownMenu/index.js');
var index = require('../DropdownItem/index.js');
var index$1 = require('../DropdownToggle/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var Dropdown = function (_a) {
    var _b = _a.open, open = _b === void 0 ? false : _b, _c = _a.trigger, trigger = _c === void 0 ? "hover" : _c, props = tslib_es6.__rest(_a, ["open", "trigger"]);
    var dropdownRef = React.useRef(null);
    var _d = React.useState(open), show = _d[0], setShow = _d[1];
    var _e = React.useState(null), toggleElement = _e[0], setToggleElement = _e[1];
    var _f = React.useState(null), menuElement = _f[0], setMenuElement = _f[1];
    var _g = usePopper.usePopper(toggleElement, menuElement, {
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
    var Item = props.itemComponent || index['default'];
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
    return (jsxRuntime.jsx("div", tslib_es6.__assign({ className: cx__default['default'](Dropdown_module['default'].wrapper, props.className), ref: dropdownRef, onMouseOver: function () { return trigger === "hover" && handleShow(true); }, onMouseLeave: function () { return trigger === "hover" && handleShow(false); } }, { children: React__default['default'].Children.map(props.children, function (child) {
            var _a;
            if (!React__default['default'].isValidElement(child))
                return;
            if (child.type === index$1['default'] || child.type === props.toggleComponent)
                return React__default['default'].cloneElement(child, { onClick: handleToggleClick, ref: setToggleElement });
            if (child.type === index$2['default'] || child.type === props.menuComponent) {
                var items = child.props.children &&
                    (Array.isArray(child.props.children) ? child.props.children : [child.props.children]);
                return ReactDOM__default['default'].createPortal(jsxRuntime.jsx(jsxRuntime.Fragment, { children: React__default['default'].cloneElement(child, {
                        className: cx__default['default'](Dropdown_module['default'].menu, (_a = {}, _a[Dropdown_module['default'].show] = show, _a[Dropdown_module['default'].hover] = trigger === "hover", _a), child.props.className),
                        style: tslib_es6.__assign({}, styles.popper),
                        attributes: attributes.popper,
                        ref: setMenuElement,
                    }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) {
                        if (item.type === Item || item.type === props.itemComponent) {
                            return (jsxRuntime.jsx(Item, tslib_es6.__assign({}, tslib_es6.__assign(tslib_es6.__assign({}, item.props), { onClick: function (e, _a) {
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

exports.default = Dropdown;
