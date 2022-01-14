import ModalBase, { ModalProps } from "./Modal"

import { open, withAlert, withConfirm } from "./withOpen"
export type { ModalProps } from "./Modal"

const Modal = Object.assign(ModalBase, {
  alert: (config: ModalProps) => open(ModalBase, withAlert(config)),
  confirm: (config: ModalProps) => open(ModalBase, withConfirm(config)),
})

export default Modal