import Button from "components/Button"
import cx from "classnames"
import styled from "./ModalFooter.module.scss"
import { WithComponent } from "types/common"

export type ModalFooterProps = {
  /**
   * The text for confirm button.
   */
  confirmText?: string
  /**
   * The props for confirm button.
   */
  confirmButtonProps?: JSX.IntrinsicElements["button"]
  /**
   * A callback triggered whenever the modal is confirmed.
   */
  onConfirm?: () => void
  /**
   * The text for cancel button, if text is null button will be hidden
   */
  cancelText?: string | null
  /**
   * The props for cancel button.
   */
  cancelButtonProps?: JSX.IntrinsicElements["button"]
  /**
   * A callback triggered whenever the cancel button clicked.
   */
  onCancel?: () => void
  /**
   * A callback triggered whenever the modal is closed.
   */
  onClose?: () => void
} & WithComponent

const ModalFooter = (props: ModalFooterProps) => {
  const handleConfirm = () => {
    props.onConfirm && props.onConfirm()
    props.onClose && props.onClose()
  }

  const handleCancel = () => {
    props.onCancel && props.onCancel()
    props.onClose && props.onClose()
  }

  return (
    <footer className={cx(styled.wrapper, props.className)} style={props.style}>
      {props.children}
      {!!props.cancelText && (
        <Button variant="secondary" onClick={handleCancel} {...props.cancelButtonProps}>
          {props.cancelText}
        </Button>
      )}
      <Button onClick={handleConfirm} {...props.confirmButtonProps}>
        {props.confirmText}
      </Button>
    </footer>
  )
}

export default ModalFooter
