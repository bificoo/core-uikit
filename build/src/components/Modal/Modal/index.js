import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import ModalPopup from '../ModalPopup/index.js';
import ModalDialog from '../ModalDialog/index.js';
import ModalHeader from '../ModalHeader/index.js';
import ModalBody from '../ModalBody/index.js';
import ModalFooter from '../ModalFooter/index.js';

var Modal = function (props) {
    return (jsx(ModalPopup, __assign({ open: props.open, closeOnDocumentClick: props.backdrop, onClose: props.onClose }, { children: jsxs(ModalDialog, { children: [jsx(ModalHeader, { title: props.title }), jsx(ModalBody, __assign({ content: props.content }, { children: props.children })), jsx(ModalFooter, { confirmText: props.confirmText, confirmButtonProps: props.confirmButtonProps, cancelText: props.cancelText, cancelButtonProps: props.cancelButtonProps, onConfirm: props.onConfirm, onCancel: props.onCancel, onClose: props.onClose })] }) })));
};

export { Modal as default };
