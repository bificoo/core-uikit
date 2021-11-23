'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('classnames');
var Button_module = require('./Button.module.scss.js');
var ButtonContext = require('../ButtonContext.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var Button = function (_a) {
    var _b, _c;
    var _d = _a.variant, variant = _d === void 0 ? "primary" : _d, _e = _a.selected, selected = _e === void 0 ? false : _e, _f = _a.block, block = _f === void 0 ? false : _f, className = _a.className, _g = _a.children, children = _g === void 0 ? "Click" : _g, eventKey = _a.eventKey, onClick = _a.onClick, props = _tslib.__rest(_a, ["variant", "selected", "block", "className", "children", "eventKey", "onClick"]);
    var _h = React.useContext(ButtonContext.ButtonContext), activeKey = _h.activeKey, setActiveKey = _h.setActiveKey;
    return (jsxRuntime.jsx("button", _tslib.__assign({ className: cx__default['default']("core-uikit-button", Button_module['default'].wrapper, Button_module['default'][variant], (_b = {}, _b[Button_module['default'].block] = block, _b), (_c = {}, _c[Button_module['default'].selected] = selected, _c), { active: eventKey && eventKey === activeKey }, className), onClick: function (e) {
            if (eventKey) {
                setActiveKey(e, { eventKey: eventKey });
            }
            else {
                onClick && onClick(e);
            }
        } }, props, { children: children }), void 0));
};

exports['default'] = Button;
