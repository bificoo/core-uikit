'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('classnames');
var Item_module = require('./Item.module.scss.js');
var DropdownContext = require('../DropdownContext.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var DropdownItem = function (_a) {
    var _b;
    var props = _tslib.__rest(_a, []);
    var _c = React.useContext(DropdownContext.DropdownContext), activeKey = _c.activeKey, setActiveKey = _c.setActiveKey;
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: cx__default['default'](Item_module['default'].wrapper, (_b = {}, _b[Item_module['default'].active] = props.eventKey === activeKey, _b), props.className), onClick: function (e) { return setActiveKey(e, { eventKey: props.eventKey }); } }, { children: props.children }), void 0));
};

exports['default'] = DropdownItem;
