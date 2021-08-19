'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
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

const Dropdown = (_a) => {
    var props = _tslib.__rest(_a, []);
    const [eventKey, setEventKay] = React.useState(props.defaultActiveKey);
    const popupRef = React.useRef(null);
    const dropdown = React.useMemo(() => {
        let triggerElement = jsxRuntime.jsx("div", {}, void 0);
        let menuElement = null;
        React__default['default'].Children.forEach(props.children, child => {
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
    const handleClickItem = (e, { eventKey }) => {
        var _a;
        if (!eventKey)
            return;
        setEventKay(eventKey);
        props.onSelect && props.onSelect(e, { eventKey });
        (_a = popupRef.current) === null || _a === void 0 ? void 0 : _a.close();
    };
    return (jsxRuntime.jsx(DropdownContext.DropdownContext.Provider, Object.assign({ value: { activeKey: eventKey, setActiveKey: handleClickItem } }, { children: jsxRuntime.jsx("div", Object.assign({ className: cx__default['default'](Dropdown_module['default'].wrapper, props.className), style: props.style }, { children: jsxRuntime.jsx(reactjsPopup_esm['default'], Object.assign({ ref: popupRef, trigger: open => dropdown.trigger && React__default['default'].cloneElement(dropdown.trigger, { open }), position: "bottom center", on: "click", closeOnDocumentClick: true, mouseLeaveDelay: 300, mouseEnterDelay: 0, arrow: false, contentStyle: {
                    width: "100px",
                    border: "none",
                    padding: "8px",
                    boxShadow: "none",
                } }, { children: dropdown.menu }), void 0) }), void 0) }), void 0));
};

exports['default'] = Dropdown;
