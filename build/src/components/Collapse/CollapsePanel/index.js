'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var CollapsePanel_module = require('./CollapsePanel.module.scss.js');
var React = require('react');
var CollapseContext = require('../CollapseContext.js');
var cx = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var CollapsePanel = function (props) {
    var _a;
    var expanded = React.useContext(CollapseContext.CollapseContext).expanded;
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: cx__default['default'](CollapsePanel_module['default'].wrapper, (_a = {},
            _a[CollapsePanel_module['default'].expanded] = expanded,
            _a)) }, { children: props.children }), void 0));
};

exports['default'] = CollapsePanel;
