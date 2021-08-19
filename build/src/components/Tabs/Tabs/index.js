'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

const Tabs = (_a) => {
    var props = _tslib.__rest(_a, []);
    const activeKey = React.useRef(props.defaultActiveKey);
    const [, forceUpdate] = React.useReducer(x => x + 1, 0);
    const handleClickTab = (eventKey) => {
        if (!eventKey)
            return;
        activeKey.current = eventKey;
        forceUpdate();
    };
    const hasChild = React.useMemo(() => {
        let has = false;
        React__default['default'].Children.forEach(props.children, child => {
            if (React__default['default'].isValidElement(child) && React__default['default'].isValidElement(child.props.children))
                has = true;
        });
        return has;
    }, [props.children]);
    return (jsxRuntime.jsx(TabsContext['default'].Provider, Object.assign({ value: { activeKey: activeKey.current, setActiveKey: handleClickTab } }, { children: jsxRuntime.jsxs("div", Object.assign({ className: cx__default['default'](Tabs_module['default'].wrapper, props.className), onClick: (e) => props.onSelect && props.onSelect(e, { eventKey: activeKey.current }) }, { children: [jsxRuntime.jsx("nav", Object.assign({ className: Tabs_module['default']["nav-tabs"] }, { children: React__default['default'].Children.map(props.children, child => {
                        if (!React__default['default'].isValidElement(child))
                            return;
                        return (jsxRuntime.jsx(index['default'], { className: child.props.className, title: child.props.title, eventKey: child.props.eventKey }, void 0));
                    }) }), void 0), hasChild && (jsxRuntime.jsx("div", Object.assign({ className: Tabs_module['default']["tab-content"] }, { children: React__default['default'].Children.map(props.children, child => {
                        if (!React__default['default'].isValidElement(child))
                            return;
                        if (activeKey.current === child.props.eventKey) {
                            return child.props.children;
                        }
                    }) }), void 0))] }), void 0) }), void 0));
};

exports['default'] = Tabs;
