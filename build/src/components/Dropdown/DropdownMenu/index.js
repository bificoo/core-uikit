import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import cx from 'classnames';
import styled from './DropdownMenu.module.scss.js';
import React__default, { forwardRef } from 'react';
import DropdownItem from '../DropdownItem/index.js';
import DropdownHeader from '../DropdownHeader/index.js';
import DropdownFooter from '../DropdownFooter/index.js';

var DropdownMenu = forwardRef(function Dropdown(props, ref) {
    var list = [];
    React__default.Children.map(props.children, function (child) {
        if (!React__default.isValidElement(child))
            return;
        if (child.type === DropdownItem) {
            list.push(child);
        }
    });
    return (jsxs("div", __assign({ className: cx(styled.wrapper, props.className), style: props.style, ref: ref }, { children: [React__default.Children.map(props.children, function (child) {
                if (!React__default.isValidElement(child))
                    return;
                if (child.type === DropdownHeader)
                    return child;
                return null;
            }), jsx("div", __assign({ className: styled.list }, { children: list.length >= 0 ? list : props.children }), void 0), React__default.Children.map(props.children, function (child) {
                if (!React__default.isValidElement(child))
                    return;
                if (child.type === DropdownFooter)
                    return child;
                return null;
            })] }), void 0));
});

export { DropdownMenu as default };
