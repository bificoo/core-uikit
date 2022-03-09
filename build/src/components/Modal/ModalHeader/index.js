import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import cx from 'classnames';
import styled from './ModalHeader.module.scss.js';

var ModalHeader = function (props) {
    return (jsxs("header", __assign({ className: cx(styled.wrapper, props.className), style: props.style }, { children: [jsx("h1", { children: props.title }), props.children] })));
};

export { ModalHeader as default };
