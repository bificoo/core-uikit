'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactjsPopup_esm = require('../../../../node_modules/reactjs-popup/dist/reactjs-popup.esm.js');
var index = require('../ModalDialog/index.js');

var Modal = function (_a) {
    var _b = _a.open, open = _b === void 0 ? false : _b, _c = _a.backdrop, backdrop = _c === void 0 ? true : _c, _d = _a.custom, custom = _d === void 0 ? false : _d, props = _tslib.__rest(_a, ["open", "backdrop", "custom"]);
    var opened = React.useRef(false);
    React.useEffect(function () {
        if (open)
            opened.current = true;
    }, [open]);
    React.useEffect(function () {
        if (!open && opened.current)
            props.onExited && props.onExited();
    }, [open, props.onExited]);
    return (jsxRuntime.jsxs(reactjsPopup_esm['default'], _tslib.__assign({ modal: true, lockScroll: true, open: open, closeOnDocumentClick: backdrop, closeOnEscape: true, onClose: props.onClose, contentStyle: {
            background: "transparent",
            border: "none",
            width: "auto",
        }, overlayStyle: {
            backgroundColor: "#091e428a",
        } }, { children: [custom && props.children, !custom && (jsxRuntime.jsx(index['default'], _tslib.__assign({ title: props.title, content: props.content, confirmText: props.confirmText, confirmButtonProps: props.confirmButtonProps, cancelText: props.cancelText, cancelButtonProps: props.cancelButtonProps, onConfirm: props.onConfirm, onCancel: props.onCancel, onClose: props.onClose }, { children: props.children }), void 0))] }), void 0));
};

exports['default'] = Modal;
