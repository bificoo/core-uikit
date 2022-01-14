import Modal$1 from './Modal/index.js';
import { open, withAlert, withConfirm } from './withOpen.js';

var Modal = Object.assign(Modal$1, {
    alert: function (config) { return open(Modal$1, withAlert(config)); },
    confirm: function (config) { return open(Modal$1, withConfirm(config)); },
});

export { Modal as default };
