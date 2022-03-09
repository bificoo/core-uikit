import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import cx from 'classnames';
import styled from './DropdownHeader.module.scss.js';

var DropdownHeader = function (props) {
    return (jsx("div", __assign({ className: cx(styled.wrapper, props.className) }, { children: props.children })));
};

export { DropdownHeader as default };
