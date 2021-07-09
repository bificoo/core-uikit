'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
require('../../../node_modules/react/jsx-runtime.js');
var index$3 = require('../../../node_modules/react/index.js');
var index$6 = require('../../../node_modules/react-dom/index.js');
var index$2 = require('../../../node_modules/classnames/index.js');
var usePopper = require('../../../node_modules/react-popper/lib/esm/usePopper.js');
var Dropdown_module = require('./Dropdown.module.scss.js');
var index$5 = require('../DropdownMenu/index.js');
var index$1 = require('../DropdownItem/index.js');
var index$4 = require('../DropdownToggle/index.js');
var index = require('../../../_virtual/index.js_commonjs-module');
var jsxRuntime = require('../../../_virtual/jsx-runtime.js_commonjs-module');

var Dropdown = function (_a) {
    var _b = _a.open, open = _b === void 0 ? false : _b, _c = _a.trigger, trigger = _c === void 0 ? "hover" : _c, props = tslib_es6.__rest(_a, ["open", "trigger"]);
    var dropdownRef = index.react.exports.useRef(null);
    var _d = index.react.exports.useState(open), show = _d[0], setShow = _d[1];
    var _e = index.react.exports.useState(null), toggleElement = _e[0], setToggleElement = _e[1];
    var _f = index.react.exports.useState(null), menuElement = _f[0], setMenuElement = _f[1];
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
    var Item = props.itemComponent || index$1['default'];
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
    return (jsxRuntime.jsxRuntime.exports.jsx("div", tslib_es6.__assign({ className: index$2['default'](Dropdown_module['default'].wrapper, props.className), ref: dropdownRef, onMouseOver: function () { return trigger === "hover" && handleShow(true); }, onMouseLeave: function () { return trigger === "hover" && handleShow(false); } }, { children: index$3['default'].Children.map(props.children, function (child) {
            var _a;
            if (!index$3['default'].isValidElement(child))
                return;
            if (child.type === index$4['default'] || child.type === props.toggleComponent)
                return index$3['default'].cloneElement(child, { onClick: handleToggleClick, ref: setToggleElement });
            if (child.type === index$5['default'] || child.type === props.menuComponent) {
                var items = child.props.children &&
                    (Array.isArray(child.props.children) ? child.props.children : [child.props.children]);
                return index$6['default'].createPortal(jsxRuntime.jsxRuntime.exports.jsx(jsxRuntime.jsxRuntime.exports.Fragment, { children: index$3['default'].cloneElement(child, {
                        className: index$2['default'](Dropdown_module['default'].menu, (_a = {}, _a[Dropdown_module['default'].show] = show, _a[Dropdown_module['default'].hover] = trigger === "hover", _a), child.props.className),
                        style: tslib_es6.__assign({}, styles.popper),
                        attributes: attributes.popper,
                        ref: setMenuElement,
                    }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) {
                        if (item.type === Item || item.type === props.itemComponent) {
                            return (jsxRuntime.jsxRuntime.exports.jsx(Item, tslib_es6.__assign({}, tslib_es6.__assign(tslib_es6.__assign({}, item.props), { onClick: function (e, _a) {
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
//# sourceMappingURL=index.js.map
