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

var Dropdown = function (props) {
    var activeKey = React.useRef(null);
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
            else if (child.type === index$1['default']) {
                menuElement = React__default['default'].cloneElement(child, {
                    onSelect: function (e) {
                        child.props.onSelect && child.props.onSelect(e, { eventKey: activeKey.current });
                    },
                });
            }
        });
        return {
            trigger: triggerElement,
            menu: menuElement,
        };
    }, [props.children]);
    var handleClickItem = function (eventKey) {
        var _a;
        activeKey.current = eventKey || null;
        (_a = popupRef.current) === null || _a === void 0 ? void 0 : _a.close();
    };
    return (jsxRuntime.jsx(DropdownContext.DropdownContext.Provider, tslib_es6.__assign({ value: { onClickItem: handleClickItem } }, { children: jsxRuntime.jsx("div", tslib_es6.__assign({ className: cx__default['default'](Dropdown_module['default'].wrapper, props.className) }, { children: jsxRuntime.jsx(reactjsPopup_esm['default'], tslib_es6.__assign({ ref: popupRef, trigger: function (open) { return dropdown.trigger && React__default['default'].cloneElement(dropdown.trigger, { open: open }); }, position: "bottom center", on: "click", closeOnDocumentClick: true, mouseLeaveDelay: 300, mouseEnterDelay: 0, arrow: false, contentStyle: {
                    width: "100px",
                    border: "none",
                    padding: "8px",
                    boxShadow: "none",
                } }, { children: dropdown.menu }), void 0) }), void 0) }), void 0));
};

exports.default = Dropdown;
