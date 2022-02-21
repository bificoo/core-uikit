import Modal$1 from './Modal/index.js';
import CustomModal from './CustomModal/index.js';
import ModalDialog from './ModalDialog/index.js';
import ModalHeader from './ModalHeader/index.js';
import ModalBody from './ModalBody/index.js';
import ModalFooter from './ModalFooter/index.js';
import { open, withAlert, withConfirm } from './withOpen.js';

var Modal = Object.assign(Modal$1, {
    alert: function (config) { return open(Modal$1, withAlert(config)); },
    confirm: function (config) { return open(Modal$1, withConfirm(config)); },
    Custom: CustomModal,
    Dialog: ModalDialog,
    Header: ModalHeader,
    Body: ModalBody,
    Footer: ModalFooter,
});

export { Modal as default };
