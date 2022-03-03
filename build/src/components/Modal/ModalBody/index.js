import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import cx from 'classnames';
import styled from './ModalBody.module.scss.js';

var ModalBody = function (props) {
    return (jsx("main", __assign({ className: cx(styled.main, props.className), style: props.style }, { children: props.children || props.content }), void 0));
};

export { ModalBody as default };
