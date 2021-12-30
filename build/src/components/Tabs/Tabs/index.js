'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('classnames');
var Tabs_module = require('./Tabs.module.scss.js');
var TabsContext = require('../TabsContext.js');
var usePrevious = require('../../../hooks/usePrevious.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var Tabs = function (_a) {
    var props = _tslib.__rest(_a, []);
    var _b = React.useState(props.defaultActiveKey), activeKey = _b[0], setActiveKey = _b[1];
    var prevActiveKey = usePrevious["default"](activeKey);
    var handleClickTab = function (e, _a) {
        var eventKey = _a.eventKey;
        if (!eventKey)
            return;
        setActiveKey(eventKey);
        props.onSelect && props.onSelect(e, { eventKey: eventKey });
    };
    var hasChild = React.useMemo(function () {
        var has = false;
        React__default["default"].Children.forEach(props.children, function (child) {
            if (React__default["default"].isValidElement(child) && React__default["default"].isValidElement(child.props.children))
                has = true;
        });
        return has;
    }, [props.children]);
    React.useEffect(function () {
        if (props.activeKey && prevActiveKey === activeKey && activeKey !== props.activeKey) {
            setActiveKey(props.activeKey);
        }
    }, [activeKey, props.activeKey]);
    return (jsxRuntime.jsx(TabsContext["default"].Provider, _tslib.__assign({ value: { activeKey: activeKey, setActiveKey: handleClickTab } }, { children: jsxRuntime.jsxs("div", _tslib.__assign({ className: cx__default["default"](Tabs_module["default"].wrapper, props.className), style: props.style }, { children: [jsxRuntime.jsxs("nav", _tslib.__assign({ className: Tabs_module["default"]["nav-tabs"] }, { children: [React__default["default"].Children.map(props.children, function (child) {
                            if (!React__default["default"].isValidElement(child))
                                return;
                            return child;
                        }), jsxRuntime.jsx("div", _tslib.__assign({ className: Tabs_module["default"]["extra-content"] }, { children: props.extraContent }), void 0)] }), void 0), hasChild && (jsxRuntime.jsx("div", _tslib.__assign({ className: Tabs_module["default"]["tab-content"] }, { children: React__default["default"].Children.map(props.children, function (child) {
                        if (!React__default["default"].isValidElement(child))
                            return;
                        if (activeKey === child.props.eventKey) {
                            return child.props.children;
                        }
                    }) }), void 0))] }), void 0) }), void 0));
};

exports["default"] = Tabs;
