import Button from "components/Button"
import cx from "classnames"
import styled from "./ModalFooter.module.scss"

export type ModalFooterProps = {
  confirmText?: string
  confirmButtonProps?: JSXProps.ButtonElement
  onConfirm?: () => void
  cancelText?: string
  cancelButtonProps?: JSXProps.ButtonElement
  onCancel?: () => void
  onClose?: () => void
} & ReactProps.WithClassName

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
    <footer className={cx(styled.wrapper, props.className)}>
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
