'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var chevron = require('../chevron.svg.js');
var CollapseContext = require('../CollapseContext.js');
var CollapseHeader_module = require('./CollapseHeader.module.scss.js');
var React = require('react');
var cx = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var CollapseHeader = function (props) {
    var _a;
    var _b = React.useContext(CollapseContext.CollapseContext), expanded = _b.expanded, setExpended = _b.setExpended;
    return (jsxRuntime.jsxs("header", _tslib.__assign({ className: cx__default['default'](props.className, CollapseHeader_module['default'].wrapper, (_a = {}, _a[CollapseHeader_module['default'].expanded] = expanded, _a)), onClick: function () { return setExpended(!expanded); }, style: props.style }, { children: [props.children, " ", jsxRuntime.jsx(chevron.ReactComponent, {}, void 0)] }), void 0));
};

exports['default'] = CollapseHeader;
