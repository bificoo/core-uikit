import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import React__default, { useState, useMemo, useEffect } from 'react';
import cx from 'classnames';
import styled from './Tabs.module.scss.js';
import TabsContext from '../TabsContext.js';
import usePrevious from '../../../hooks/usePrevious.js';

var Tabs = function (_a) {
    var props = __rest(_a, []);
    var _b = useState(props.defaultActiveKey), activeKey = _b[0], setActiveKey = _b[1];
    var prevActiveKey = usePrevious(activeKey);
    var handleClickTab = function (e, _a) {
        var eventKey = _a.eventKey;
        if (!eventKey)
            return;
        setActiveKey(eventKey);
        props.onSelect && props.onSelect(e, { eventKey: eventKey });
    };
    var hasChild = useMemo(function () {
        var has = false;
        React__default.Children.forEach(props.children, function (child) {
            if (React__default.isValidElement(child) && React__default.isValidElement(child.props.children))
                has = true;
        });
        return has;
    }, [props.children]);
    useEffect(function () {
        if (props.activeKey && prevActiveKey === activeKey && activeKey !== props.activeKey) {
            setActiveKey(props.activeKey);
        }
    }, [activeKey, prevActiveKey, props.activeKey]);
    return (jsx(TabsContext.Provider, __assign({ value: { activeKey: activeKey, setActiveKey: handleClickTab } }, { children: jsxs("div", __assign({ className: cx(styled.wrapper, props.className), style: props.style }, { children: [jsxs("nav", __assign({ className: styled["nav-tabs"] }, { children: [React__default.Children.map(props.children, function (child) {
                            if (!React__default.isValidElement(child))
                                return;
                            return child;
                        }), jsx("div", __assign({ className: styled["extra-content"] }, { children: props.extraContent }))] })), hasChild && (jsx("div", __assign({ className: styled["tab-content"] }, { children: React__default.Children.map(props.children, function (child) {
                        if (!React__default.isValidElement(child))
                            return;
                        if (activeKey === child.props.eventKey) {
                            return child.props.children;
                        }
                    }) })))] })) })));
};

export { Tabs as default };
