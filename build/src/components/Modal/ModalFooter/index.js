import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import Button from '../../Button/index.js';
import cx from 'classnames';
import styled from './ModalFooter.module.scss.js';

var ModalFooter = function (props) {
    var handleConfirm = function () {
        props.onConfirm && props.onConfirm();
        props.onClose && props.onClose();
    };
    var handleCancel = function () {
        props.onCancel && props.onCancel();
        props.onClose && props.onClose();
    };
    return (jsxs("footer", __assign({ className: cx(styled.wrapper, props.className), style: props.style }, { children: [props.children, !!props.cancelText && (jsx(Button, __assign({ variant: "secondary", onClick: handleCancel }, props.cancelButtonProps, { children: props.cancelText }), void 0)), jsx(Button, __assign({ onClick: handleConfirm }, props.confirmButtonProps, { children: props.confirmText }), void 0)] }), void 0));
};

export { ModalFooter as default };
