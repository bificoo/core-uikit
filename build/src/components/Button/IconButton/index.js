import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import React__default from 'react';
import { Icon } from '../../Icon/index.js';
import { Button } from '../Button/index.js';

var IconButton = function (props) {
    var iconConfig = { leftIcon: false, rightIcon: false };
    React__default.Children.forEach(props.children, function (child, index) {
        if (!React__default.isValidElement(child))
            return;
        if (child.type === Icon) {
            if (index === 0)
                iconConfig.leftIcon = true;
            else
                iconConfig.rightIcon = true;
        }
    });
    var customChildren = [];
    React__default.Children.forEach(props.children, function (child, index) {
        if (React__default.isValidElement(child) && child.type === Icon) {
            customChildren.push(React__default.cloneElement(child, __assign(__assign({}, child.props), { style: index === 0 ? { marginRight: "4px" } : { marginLeft: "4px" }, key: index })));
        }
        else if (child) {
            customChildren.push(child);
        }
    });
    return (jsx(Button, __assign({ style: __assign(__assign({}, (iconConfig.leftIcon && { paddingLeft: "8px" })), (iconConfig.rightIcon && { paddingRight: "8px" })) }, props, { children: customChildren }), void 0));
};

export { IconButton as default };
