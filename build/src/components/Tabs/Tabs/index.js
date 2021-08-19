import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import React__default, { useRef, useReducer, useMemo } from 'react';
import cx from 'classnames';
import Tab from '../Tab/index.js';
import styled from './Tabs.module.scss.js';
import TabsContext from '../TabsContext.js';

var Tabs = function (_a) {
    var props = __rest(_a, []);
    var activeKey = useRef(props.defaultActiveKey);
    var _b = useReducer(function (x) { return x + 1; }, 0), forceUpdate = _b[1];
    var handleClickTab = function (eventKey) {
        if (!eventKey)
            return;
        activeKey.current = eventKey;
        forceUpdate();
    };
    var hasChild = useMemo(function () {
        var has = false;
        React__default.Children.forEach(props.children, function (child) {
            if (React__default.isValidElement(child) && React__default.isValidElement(child.props.children))
                has = true;
        });
        return has;
    }, [props.children]);
    return (jsx(TabsContext.Provider, __assign({ value: { activeKey: activeKey.current, setActiveKey: handleClickTab } }, { children: jsxs("div", __assign({ className: cx(styled.wrapper, props.className), onClick: function (e) {
                return props.onSelect && props.onSelect(e, { eventKey: activeKey.current });
            } }, { children: [jsx("nav", __assign({ className: styled["nav-tabs"] }, { children: React__default.Children.map(props.children, function (child) {
                        if (!React__default.isValidElement(child))
                            return;
                        return (jsx(Tab, { className: child.props.className, title: child.props.title, eventKey: child.props.eventKey }, void 0));
                    }) }), void 0), hasChild && (jsx("div", __assign({ className: styled["tab-content"] }, { children: React__default.Children.map(props.children, function (child) {
                        if (!React__default.isValidElement(child))
                            return;
                        if (activeKey.current === child.props.eventKey) {
                            return child.props.children;
                        }
                    }) }), void 0))] }), void 0) }), void 0));
};

export { Tabs as default };
