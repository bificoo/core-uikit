'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

var getPopupRoot = function () {
    var popupRoot = document.getElementById("popup-root");
    if (!popupRoot) {
        popupRoot = document.createElement("div");
        popupRoot.setAttribute("id", "popup-root");
        document.body.appendChild(popupRoot);
    }
    return popupRoot;
};
function open(Modal, config) {
    var modalRoot = getPopupRoot();
    var modalDiv = document.createElement("div");
    modalRoot.appendChild(modalDiv);
    function bindClose(config) {
        var onConfirm = config.onConfirm, onCancel = config.onCancel, onClose = config.onClose, theOtherConfig = _tslib.__rest(config, ["onConfirm", "onCancel", "onClose"]);
        var bind = function (fn) {
            return fn
                ? function () {
                    typeof fn === "function" && fn();
                    close();
                }
                : close;
        };
        return _tslib.__assign(_tslib.__assign({}, theOtherConfig), { onConfirm: bind(onConfirm), onCancel: bind(onCancel), onClose: bind(onClose) });
    }
    function render(config) {
        ReactDOM__default["default"].render(jsxRuntime.jsx(Modal, _tslib.__assign({}, bindClose(config)), void 0), modalDiv);
    }
    function update(newConfig) {
        render(_tslib.__assign(_tslib.__assign(_tslib.__assign({}, config), newConfig), { open: true }));
    }
    function close() {
        render(_tslib.__assign(_tslib.__assign({}, config), { open: false }));
    }
    render(_tslib.__assign(_tslib.__assign({}, config), { open: true }));
    return {
        destroy: close,
        update: update,
    };
}
function withAlert(config) {
    return _tslib.__assign(_tslib.__assign({}, config), { cancelText: null });
}
function withConfirm(config) {
    return _tslib.__assign(_tslib.__assign({}, config), { cancelText: config.cancelText });
}

exports.getPopupRoot = getPopupRoot;
exports.open = open;
exports.withAlert = withAlert;
exports.withConfirm = withConfirm;
