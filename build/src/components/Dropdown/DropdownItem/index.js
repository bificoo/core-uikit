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

const DropdownItem = (_a) => {
    var props = _tslib.__rest(_a, []);
    const { activeKey, setActiveKey } = React.useContext(DropdownContext.DropdownContext);
    return (jsxRuntime.jsx("div", Object.assign({ className: cx__default['default'](Item_module['default'].wrapper, { [Item_module['default'].active]: props.eventKey === activeKey }, props.className), onClick: e => setActiveKey(e, { eventKey: props.eventKey }) }, { children: props.children }), void 0));
};

exports['default'] = DropdownItem;
