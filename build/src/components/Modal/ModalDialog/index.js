'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var index = require('../ModalHeader/index.js');
var index$1 = require('../ModalFooter/index.js');
var cx = require('classnames');
var ModalDialog_module = require('./ModalDialog.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var ModalDialog = function (props) {
    return (jsxRuntime.jsxs("div", _tslib.__assign({ className: cx__default['default'](ModalDialog_module['default'].wrapper, props.className) }, { children: [jsxRuntime.jsx(index['default'], { title: props.title }, void 0), jsxRuntime.jsx("main", _tslib.__assign({ className: ModalDialog_module['default'].main }, { children: props.children || props.content }), void 0), jsxRuntime.jsx(index$1['default'], { confirmText: props.confirmText, confirmButtonProps: props.confirmButtonProps, cancelText: props.cancelText, cancelButtonProps: props.cancelButtonProps, onConfirm: props.onConfirm, onCancel: props.onCancel, onClose: props.onClose }, void 0)] }), void 0));
};

exports['default'] = ModalDialog;
