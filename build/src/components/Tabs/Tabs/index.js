'use strict';

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('classnames');
var index = require('../Tab/index.js');
var Tabs_module = require('./Tabs.module.scss.js');
var TabsContext = require('../TabsContext.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var Tabs = function (_a) {
    var props = _tslib.__rest(_a, []);
    var activeKey = React.useRef(props.defaultActiveKey);
    var _b = React.useReducer(function (x) { return x + 1; }, 0), forceUpdate = _b[1];
    var handleClickTab = function (eventKey) {
        if (!eventKey)
            return;
        activeKey.current = eventKey;
        forceUpdate();
    };
    var hasChild = React.useMemo(function () {
        var has = false;
        React__default['default'].Children.forEach(props.children, function (child) {
            if (React__default['default'].isValidElement(child) && React__default['default'].isValidElement(child.props.children))
                has = true;
        });
        return has;
    }, [props.children]);
    return (jsxRuntime.jsx(TabsContext.Provider, _tslib.__assign({ value: { activeKey: activeKey.current, setActiveKey: handleClickTab } }, { children: jsxRuntime.jsxs("div", _tslib.__assign({ className: cx__default['default'](Tabs_module.wrapper, props.className), onClick: function (e) {
                return props.onSelect && props.onSelect(e, { eventKey: activeKey.current });
            } }, { children: [jsxRuntime.jsx("nav", _tslib.__assign({ className: Tabs_module["nav-tabs"] }, { children: React__default['default'].Children.map(props.children, function (child) {
                        if (!React__default['default'].isValidElement(child))
                            return;
                        return (jsxRuntime.jsx(index, { className: child.props.className, title: child.props.title, eventKey: child.props.eventKey }, void 0));
                    }) }), void 0), hasChild && (jsxRuntime.jsx("div", _tslib.__assign({ className: Tabs_module["tab-content"] }, { children: React__default['default'].Children.map(props.children, function (child) {
                        if (!React__default['default'].isValidElement(child))
                            return;
                        if (activeKey.current === child.props.eventKey) {
                            return child.props.children;
                        }
                    }) }), void 0))] }), void 0) }), void 0));
};

module.exports = Tabs;
