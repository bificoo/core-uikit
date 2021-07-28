'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('classnames');
var Item_module = require('./Item.module.scss.js');
var DropdownContext = require('../DropdownContext.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var DropdownItem = function (props) {
    var _a;
    var context = React.useContext(DropdownContext.DropdownContext);
    return (jsxRuntime.jsx("div", tslib_es6.__assign({ className: cx__default['default'](Item_module['default'].wrapper, (_a = {}, _a[Item_module['default'].active] = props.active, _a), props.className), onClick: function () { return context.onClickItem(props.eventKey); } }, { children: props.children }), void 0));
};

exports.default = DropdownItem;
