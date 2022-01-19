import { __assign, __spreadArray } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import React__default, { useState, useRef, useEffect } from 'react';
import { TreeContext } from '../TreeContext.js';

var Tree = function (_a) {
    var defaultActiveKey = _a.defaultActiveKey, onClick = _a.onClick, children = _a.children;
    var _b = useState(), activeKey = _b[0], setActiveKey = _b[1];
    var inited = useRef(true);
    useEffect(function () {
        if (!inited.current)
            return;
        var target = {};
        var findEventKey = function (props, nodes) {
            props.children && React__default.Children.forEach(props.children, function (child) {
                if (React__default.isValidElement(child)) {
                    target[child.props.eventKey] = __spreadArray(__spreadArray([], nodes, true), [child.props.eventKey], false);
                    findEventKey(child.props, __spreadArray(__spreadArray([], nodes, true), [child.props.eventKey], false));
                    if (!child.props.children && (child.props.eventKey === defaultActiveKey)) {
                        setActiveKey(target[child.props.eventKey]);
                    }
                }
            });
        };
        findEventKey({ children: children }, []);
        inited.current = false;
    }, [children, defaultActiveKey]);
    return (jsx(TreeContext.Provider, __assign({ value: {
            activeKey: activeKey,
            setActiveKey: function (activeKey, nodes) {
                setActiveKey(nodes);
                onClick && onClick(activeKey, { parents: nodes.filter(function (el) { return el !== activeKey; }) });
            },
        } }, { children: React__default.Children.map(children, function (child, index) {
            if (React__default.isValidElement(child)) {
                return React__default.cloneElement(child, __assign(__assign({}, child.props), { nodes: [child.props.eventKey], key: index }));
            }
        }) }), void 0));
};

export { Tree as default };
