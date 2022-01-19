import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import Popup from '../../../../node_modules/reactjs-popup/dist/reactjs-popup.esm.js';
import ModalDialog from '../ModalDialog/index.js';

var Modal = function (_a) {
    var _b = _a.open, open = _b === void 0 ? false : _b, _c = _a.backdrop, backdrop = _c === void 0 ? true : _c, _d = _a.custom, custom = _d === void 0 ? false : _d, onExited = _a.onExited, props = __rest(_a, ["open", "backdrop", "custom", "onExited"]);
    var opened = useRef(false);
    useEffect(function () {
        if (open)
            opened.current = true;
    }, [open]);
    useEffect(function () {
        if (!open && opened.current)
            onExited && onExited();
    }, [open, onExited]);
    return (jsxs(Popup, __assign({ modal: true, lockScroll: true, open: open, closeOnDocumentClick: backdrop, closeOnEscape: true, onClose: props.onClose, contentStyle: {
            background: "transparent",
            border: "none",
            width: "auto",
        }, overlayStyle: {
            backgroundColor: "#091e428a",
        } }, { children: [custom && props.children, !custom && (jsx(ModalDialog, __assign({ title: props.title, content: props.content, confirmText: props.confirmText, confirmButtonProps: props.confirmButtonProps, cancelText: props.cancelText, cancelButtonProps: props.cancelButtonProps, onConfirm: props.onConfirm, onCancel: props.onCancel, onClose: props.onClose }, { children: props.children }), void 0))] }), void 0));
};

export { Modal as default };
