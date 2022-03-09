import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import Button from '../../Button/index.js';
import React__default, { forwardRef } from 'react';
import DropdownToggle from '../DropdownToggle/index.js';

var DropdownToggleForButton = forwardRef(function DropdownToggleForButton(props, ref) {
    return (jsx(DropdownToggle, __assign({}, props, { ref: ref }, { children: React__default.Children.map(props.children, function (child) {
            if (!React__default.isValidElement(child))
                return;
            if (child.type === Button) {
                return React__default.cloneElement(child, {
                    selected: props.open,
                });
            }
            return child;
        }) })));
});

export { DropdownToggleForButton as default };
