import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import cx from 'classnames';
import styled from './DropdownMenu.module.scss.js';

var DropdownMenu = function (props) {
    return (jsx("div", __assign({ className: cx(styled.wrapper, props.className), style: props.style }, { children: props.children }), void 0));
};
DropdownMenu.displayName = "DropdownMenu";

export { DropdownMenu as default };
