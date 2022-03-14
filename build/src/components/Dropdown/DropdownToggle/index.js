import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

var DropdownToggle = forwardRef(function DropdownToggle(props, ref) {
    return (jsx("div", __assign({ className: props.className, onClick: props.onClick, ref: ref }, { children: props.children }), void 0));
});

export { DropdownToggle as default };
