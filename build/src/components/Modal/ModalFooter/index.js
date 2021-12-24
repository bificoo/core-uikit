'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var index = require('../../Button/index.js');
var cx = require('classnames');
var ModalFooter_module = require('./ModalFooter.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var ModalFooter = function (props) {
    var handleConfirm = function () {
        props.onConfirm && props.onConfirm();
        props.onClose && props.onClose();
    };
    var handleCancel = function () {
        props.onCancel && props.onCancel();
        props.onClose && props.onClose();
    };
    return (jsxRuntime.jsxs("footer", _tslib.__assign({ className: cx__default['default'](ModalFooter_module['default'].wrapper, props.className) }, { children: [!!props.cancelText && (jsxRuntime.jsx(index['default'], _tslib.__assign({ variant: "secondary", onClick: handleCancel }, props.cancelButtonProps, { children: props.cancelText }), void 0)), jsxRuntime.jsx(index['default'], _tslib.__assign({ onClick: handleConfirm }, props.confirmButtonProps, { children: props.confirmText }), void 0)] }), void 0));
};

exports['default'] = ModalFooter;
