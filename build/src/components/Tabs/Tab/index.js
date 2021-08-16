'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('classnames');
var Tab_module = require('./Tab.module.scss.js');
var TabsContext = require('../TabsContext.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var Tab = function (_a) {
    var _b;
    var props = tslib_es6.__rest(_a, []);
    var _c = React.useContext(TabsContext['default']), activeKey = _c.activeKey, setActiveKey = _c.setActiveKey;
    return (jsxRuntime.jsx("div", tslib_es6.__assign({ className: cx__default['default'](Tab_module['default'].wrapper, (_b = {}, _b[Tab_module['default'].active] = props.eventKey === activeKey, _b), props.className), onClick: function () { return setActiveKey(props.eventKey); } }, { children: props.title }), void 0));
};

exports['default'] = Tab;
