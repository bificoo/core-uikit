import Modal, { ModalProps } from "./Modal"
export type { ModalProps } from "./Modal"

import { open, withAlert, withConfirm } from "./withOpen"
export default Object.assign(Modal, {
  alert: (config: ModalProps) => open(Modal, withAlert(config)),
  confirm: (config: ModalProps) => open(Modal, withConfirm(config)),
})
