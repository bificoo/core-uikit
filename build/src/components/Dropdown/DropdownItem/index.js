'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('classnames');
var DropdownItem_module = require('./DropdownItem.module.scss.js');
var DropdownContext = require('../DropdownContext.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var DropdownItem = function (props) {
    var setActiveKey = React.useContext(DropdownContext.DropdownContext).setActiveKey;
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: cx__default['default'](DropdownItem_module['default'].wrapper, props.className), onClick: function (e) { return setActiveKey(e, { eventKey: props.eventKey }); } }, { children: props.children }), void 0));
};

exports['default'] = DropdownItem;
