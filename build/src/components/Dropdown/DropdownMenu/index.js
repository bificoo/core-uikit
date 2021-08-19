'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var Menu_module = require('./Menu.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const DropdownMenu = (props) => {
    return (jsxRuntime.jsx("div", Object.assign({ className: cx__default['default'](Menu_module['default'].wrapper, props.className), style: props.style }, { children: props.children }), void 0));
};
DropdownMenu.displayName = "DropdownMenu";

exports['default'] = DropdownMenu;
