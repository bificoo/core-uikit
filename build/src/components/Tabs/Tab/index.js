'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('classnames');
var Tab_module = require('./Tab.module.scss.js');
var TabsContext = require('../TabsContext.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const Tab = (_a) => {
    var props = _tslib.__rest(_a, []);
    const { activeKey, setActiveKey } = React.useContext(TabsContext['default']);
    return (jsxRuntime.jsx("div", Object.assign({ className: cx__default['default'](Tab_module['default'].wrapper, { [Tab_module['default'].active]: props.eventKey === activeKey }, props.className), onClick: () => setActiveKey(props.eventKey) }, { children: props.title }), void 0));
};

exports['default'] = Tab;
