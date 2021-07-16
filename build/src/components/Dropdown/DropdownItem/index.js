'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var Item_module = require('./Item.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var DropdownItem = function (_a) {
    var _b;
    var className = _a.className, children = _a.children, eventKey = _a.eventKey, active = _a.active, onClick = _a.onClick;
    return (jsxRuntime.jsx("div", tslib_es6.__assign({ className: cx__default['default'](Item_module['default'].wrapper, (_b = {}, _b[Item_module['default'].active] = active, _b), className), onClick: function (e) { return onClick && onClick(e, { eventKey: eventKey }); } }, { children: children }), void 0));
};

exports.default = DropdownItem;
