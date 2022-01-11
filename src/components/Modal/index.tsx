import Modal, { ModalProps } from "./Modal"

import { open, withAlert, withConfirm } from "./withOpen"
export type { ModalProps } from "./Modal"

export default Object.assign(Modal, {
  alert: (config: ModalProps) => open(Modal, withAlert(config)),
  confirm: (config: ModalProps) => open(Modal, withConfirm(config)),
})
