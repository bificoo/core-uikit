import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import ModalHeader from '../ModalHeader/index.js';
import ModalFooter from '../ModalFooter/index.js';
import cx from 'classnames';
import styled from './ModalDialog.module.scss.js';

var ModalDialog = function (props) {
    return (jsxs("div", __assign({ className: cx(styled.wrapper, props.className) }, { children: [jsx(ModalHeader, { title: props.title }, void 0), jsx("main", __assign({ className: styled.main }, { children: props.children || props.content }), void 0), jsx(ModalFooter, { confirmText: props.confirmText, confirmButtonProps: props.confirmButtonProps, cancelText: props.cancelText, cancelButtonProps: props.cancelButtonProps, onConfirm: props.onConfirm, onCancel: props.onCancel, onClose: props.onClose }, void 0)] }), void 0));
};

export { ModalDialog as default };
