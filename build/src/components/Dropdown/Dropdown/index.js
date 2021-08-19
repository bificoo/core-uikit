'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('classnames');
var reactjsPopup_esm = require('../../../../node_modules/reactjs-popup/dist/reactjs-popup.esm.js');
var DropdownContext = require('../DropdownContext.js');
var index = require('../DropdownToggle/index.js');
var index$1 = require('../DropdownMenu/index.js');
var Dropdown_module = require('./Dropdown.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var Dropdown = function (_a) {
    var props = tslib_es6.__rest(_a, []);
    var _b = React.useState(props.defaultActiveKey), eventKey = _b[0], setEventKay = _b[1];
    var popupRef = React.useRef(null);
    var dropdown = React.useMemo(function () {
        var triggerElement = jsxRuntime.jsx("div", {}, void 0);
        var menuElement = null;
        React__default['default'].Children.forEach(props.children, function (child) {
            if (!React__default['default'].isValidElement(child))
                return;
            if (child.type === index['default']) {
                triggerElement = child;
            }
            if (child.type === index$1['default']) {
                menuElement = child;
            }
        });
        return {
            trigger: triggerElement,
            menu: menuElement,
        };
    }, [props.children]);
    var handleClickItem = function (e, _a) {
        var _b;
        var eventKey = _a.eventKey;
        if (!eventKey)
            return;
        setEventKay(eventKey);
        props.onSelect && props.onSelect(e, { eventKey: eventKey });
        (_b = popupRef.current) === null || _b === void 0 ? void 0 : _b.close();
    };
    return (jsxRuntime.jsx(DropdownContext.DropdownContext.Provider, tslib_es6.__assign({ value: { activeKey: eventKey, setActiveKey: handleClickItem } }, { children: jsxRuntime.jsx("div", tslib_es6.__assign({ className: cx__default['default'](Dropdown_module['default'].wrapper, props.className), style: props.style }, { children: jsxRuntime.jsx(reactjsPopup_esm['default'], tslib_es6.__assign({ ref: popupRef, trigger: function (open) { return dropdown.trigger && React__default['default'].cloneElement(dropdown.trigger, { open: open }); }, position: "bottom center", on: "click", closeOnDocumentClick: true, mouseLeaveDelay: 300, mouseEnterDelay: 0, arrow: false, contentStyle: {
                    width: "100px",
                    border: "none",
                    padding: "8px",
                    boxShadow: "none",
                } }, { children: dropdown.menu }), void 0) }), void 0) }), void 0));
};

exports['default'] = Dropdown;
