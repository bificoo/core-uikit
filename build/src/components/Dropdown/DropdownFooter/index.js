import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import cx from 'classnames';
import styled from './DropdownFooter.module.scss.js';

var DropdownFooter = function (props) {
    return (jsx("div", __assign({ className: cx(styled.wrapper, props.className) }, { children: props.children }), void 0));
};

export { DropdownFooter as default };
