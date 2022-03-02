import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import React__default, { useState } from 'react';
import IconButton from '../IconButton/index.js';
import styled from './ButtonGroup.module.scss.js';

var ButtonGroup = function (props) {
    var _a = useState(props.defaultActiveKey), eventKey = _a[0], setEventKay = _a[1];
    var handleClick = function (e, _a) {
        var eventKey = _a.eventKey;
        if (!eventKey)
            return;
        setEventKay(eventKey);
        props.onSelect && props.onSelect(e, { eventKey: eventKey });
    };
    return (jsx("div", __assign({ className: styled.outer }, { children: React__default.Children.map(props.children, function (child) {
            if (!React__default.isValidElement(child))
                return;
            if (child.type === IconButton) {
                return React__default.cloneElement(child, __assign(__assign({}, child.props), { variant: "secondary", selected: child.props.eventKey === eventKey, onClick: handleClick }));
            }
            return null;
        }) }), void 0));
};

export { ButtonGroup as default };
