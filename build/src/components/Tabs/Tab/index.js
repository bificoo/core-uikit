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

var Tab = function (props) {
    var _a;
    var _b = React.useContext(TabsContext["default"]), activeKey = _b.activeKey, setActiveKey = _b.setActiveKey;
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: cx__default["default"](Tab_module["default"].wrapper, (_a = {}, _a[Tab_module["default"].active] = props.eventKey === activeKey, _a), props.className), onClick: function (e) {
            setActiveKey(e, { eventKey: props.eventKey });
        } }, { children: props.title }), void 0));
};

exports["default"] = Tab;
