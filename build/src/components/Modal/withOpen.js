import { __assign, __rest } from '../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import ReactDOM from 'react-dom';

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
        var onConfirm = config.onConfirm, onCancel = config.onCancel, onClose = config.onClose, theOtherConfig = __rest(config, ["onConfirm", "onCancel", "onClose"]);
        var bind = function (fn) {
            return fn
                ? function () {
                    typeof fn === "function" && fn();
                    close();
                }
                : close;
        };
        return __assign(__assign({}, theOtherConfig), { onConfirm: bind(onConfirm), onCancel: bind(onCancel), onClose: bind(onClose) });
    }
    function render(config) {
        ReactDOM.render(jsx(Modal, __assign({}, bindClose(config))), modalDiv);
    }
    function update(newConfig) {
        render(__assign(__assign(__assign({}, config), newConfig), { open: true }));
    }
    function close() {
        render(__assign(__assign({}, config), { open: false }));
    }
    render(__assign(__assign({}, config), { open: true }));
    return {
        destroy: close,
        update: update,
    };
}
function withAlert(config) {
    return __assign(__assign({}, config), { cancelText: null });
}
function withConfirm(config) {
    return __assign(__assign({}, config), { cancelText: config.cancelText });
}

export { getPopupRoot, open, withAlert, withConfirm };
