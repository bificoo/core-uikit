import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import React__default, { useState, useEffect } from 'react';
import { TreeContext } from '../TreeContext.js';

var Tree = function (props) {
    var _a = useState(props.defaultActiveKey), eventKey = _a[0], setEventKey = _a[1];
    var customChildren = [];
    React__default.Children.forEach(props.children, function (child, index) {
        if (React__default.isValidElement(child)) {
            customChildren.push(React__default.cloneElement(child, __assign(__assign({}, child.props), { nodes: [child.props.eventKey], key: index })));
        }
    });
    useEffect(function () {
        eventKey && props.onClick(eventKey);
    }, [eventKey, props.onClick]);
    return (jsx(TreeContext.Provider, __assign({ value: {
            activeKey: eventKey,
            setActiveKey: function (eventKey) {
                setEventKey(eventKey);
            },
        } }, { children: customChildren }), void 0));
};

export { Tree as default };
