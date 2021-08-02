import Header, { ModalHeaderProps } from "../ModalHeader"
import Footer, { ModalFooterProps } from "../ModalFooter"
import cx from "classnames"
import styled from "./ModalDialog.module.scss"

export type ModalDialogProps = {
  content?: string
} & ModalHeaderProps &
  ModalFooterProps &
  ReactProps.Component

const ModalDialog = (props: ModalDialogProps) => {
  return (
    <div className={cx(styled.wrapper, props.className)}>
      <Header title={props.title} />
      <main className={styled.main}>{props.children || props.content}</main>
      <Footer
        confirmText={props.confirmText}
        confirmButtonProps={props.confirmButtonProps}
        cancelText={props.cancelText}
        cancelButtonProps={props.cancelButtonProps}
        onConfirm={props.onConfirm}
        onCancel={props.onCancel}
        onClose={props.onClose}
      />
    </div>
  )
}

export default ModalDialog