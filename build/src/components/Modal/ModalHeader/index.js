import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import styled from './ModalHeader.module.scss.js';

var ModalHeader = function (props) {
    return (jsx("header", __assign({ className: styled.wrapper }, { children: jsx("h1", { children: props.title }, void 0) }), void 0));
};

export { ModalHeader as default };
