import Modal from './Modal/index.js';
import { open, withAlert, withConfirm } from './withOpen.js';

var index = Object.assign(Modal, {
    alert: function (config) { return open(Modal, withAlert(config)); },
    confirm: function (config) { return open(Modal, withConfirm(config)); },
});

export { index as default };
