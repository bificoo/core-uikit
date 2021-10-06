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
    var _b;
    var _c = _a.variant, variant = _c === void 0 ? "primary" : _c, _d = _a.block, block = _d === void 0 ? false : _d, className = _a.className, _e = _a.children, children = _e === void 0 ? "Click" : _e, eventKey = _a.eventKey, onClick = _a.onClick, props = _tslib.__rest(_a, ["variant", "block", "className", "children", "eventKey", "onClick"]);
    var _f = React.useContext(ButtonContext.ButtonContext), activeKey = _f.activeKey, setActiveKey = _f.setActiveKey;
    return (jsxRuntime.jsx("button", _tslib.__assign({ className: cx__default['default'](Button_module['default'].wrapper, Button_module['default'][variant], (_b = {}, _b[Button_module['default'].block] = block, _b), { active: eventKey && eventKey === activeKey }, className), onClick: function (e) {
            if (eventKey) {
                setActiveKey(e, { eventKey: eventKey });
            }
            else {
                onClick && onClick(e);
            }
        } }, props, { children: children }), void 0));
};

exports['default'] = Button;
