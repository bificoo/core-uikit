import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import ModalPopup from '../ModalPopup/index.js';

var CustomModal = function (props) {
    return (jsx(ModalPopup, __assign({ open: props.open, closeOnDocumentClick: props.backdrop, onClose: props.onClose }, { children: props.children }), void 0));
};

export { CustomModal as default };
