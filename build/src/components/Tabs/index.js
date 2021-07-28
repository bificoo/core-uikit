'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('classnames');
var index = require('./Tab/index.js');
var Tabs_module = require('./Tabs.module.scss.js');
var TabsContext = require('./TabsContext.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var Tabs = function (_a) {
    var props = tslib_es6.__rest(_a, []);
    var _b = React.useState(props.defaultActiveKey), activeKey = _b[0], setActiveKey = _b[1];
    return (jsxRuntime.jsx(TabsContext['default'].Provider, tslib_es6.__assign({ value: { activeKey: activeKey, setActiveKey: setActiveKey } }, { children: jsxRuntime.jsxs("div", tslib_es6.__assign({ className: cx__default['default'](Tabs_module['default'].wrapper, props.className) }, { children: [jsxRuntime.jsx("nav", tslib_es6.__assign({ className: Tabs_module['default']["nav-tabs"] }, { children: React__default['default'].Children.map(props.children, function (child) {
                        if (!React__default['default'].isValidElement(child))
                            return;
                        return (jsxRuntime.jsx(index['default'], { className: child.props.className, title: child.props.title, eventKey: child.props.eventKey }, void 0));
                    }) }), void 0), jsxRuntime.jsx("div", tslib_es6.__assign({ className: Tabs_module['default']["tab-content"] }, { children: React__default['default'].Children.map(props.children, function (child) {
                        if (!React__default['default'].isValidElement(child))
                            return;
                        if (activeKey === child.props.eventKey) {
                            return React__default['default'].cloneElement(jsxRuntime.jsx(jsxRuntime.Fragment, { children: child.props.children }, void 0));
                        }
                    }) }), void 0)] }), void 0) }), void 0));
};
Tabs.Tab = index['default'];

exports.default = Tabs;
