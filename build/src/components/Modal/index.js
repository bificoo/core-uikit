import Modal$1 from './Modal/index.js';
import 'react/jsx-runtime';
import 'react';
import 'react-dom';
import ModalDialog from './ModalDialog/index.js';
import ModalHeader from './ModalHeader/index.js';
import ModalBody from './ModalBody/index.js';
import ModalFooter from './ModalFooter/index.js';
import { open, withAlert, withConfirm } from './withOpen.js';

var Modal = Object.assign(Modal$1, {
    alert: function (config) { return open(Modal$1, withAlert(config)); },
    confirm: function (config) { return open(Modal$1, withConfirm(config)); },
    Dialog: ModalDialog,
    Header: ModalHeader,
    Body: ModalBody,
    Footer: ModalFooter,
});

export { Modal as default };
