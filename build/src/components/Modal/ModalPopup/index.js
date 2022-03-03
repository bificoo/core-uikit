import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import Popup from '../../../../node_modules/reactjs-popup/dist/reactjs-popup.esm.js';

var ModalPopup = function (_a) {
    var _b = _a.open, open = _b === void 0 ? false : _b, _c = _a.backdrop, backdrop = _c === void 0 ? true : _c, props = __rest(_a, ["open", "backdrop"]);
    return (jsx(Popup, __assign({ modal: true, nested: true, lockScroll: true, open: open, closeOnDocumentClick: backdrop, closeOnEscape: true, onClose: props.onClose, contentStyle: {
            background: "transparent",
            border: "none",
            width: "auto",
        }, overlayStyle: {
            backgroundColor: "#091e428a",
        } }, { children: props.children }), void 0));
};

export { ModalPopup as default };
