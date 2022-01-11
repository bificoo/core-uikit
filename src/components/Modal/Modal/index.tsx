import { useRef, useEffect } from "react"
import Popup from "reactjs-popup"
import ModalDialog, { ModalDialogProps } from "../ModalDialog"
import { PopupProps } from "reactjs-popup/dist/types"

export type ModalProps = {
  /**
   * Should the modal appear on screen or not
   */
  open?: boolean
  backdrop?: boolean
  custom?: boolean
  onExited?: () => void
} & ModalDialogProps 
  & Partial<Pick<PopupProps, "open" | "closeOnDocumentClick" | "onClose" | "children">>

const Modal = ({ open = false, backdrop = true, custom = false, onExited, ...props }: ModalProps) => {
  const opened = useRef(false)

  useEffect(() => {
    if (open) opened.current = true
  }, [open])

  useEffect(() => {
    if (!open && opened.current) onExited && onExited()
  }, [open, onExited])

  return (
    <Popup
      modal
      lockScroll
      open={open}
      closeOnDocumentClick={backdrop}
      closeOnEscape
      onClose={props.onClose}
      contentStyle={{
        background: "transparent",
        border: "none",
        width: "auto",
      }}
      overlayStyle={{
        backgroundColor: "#091e428a",
      }}>
      {custom && props.children}
      {!custom && (
        <ModalDialog
          title={props.title}
          content={props.content}
          confirmText={props.confirmText}
          confirmButtonProps={props.confirmButtonProps}
          cancelText={props.cancelText}
          cancelButtonProps={props.cancelButtonProps}
          onConfirm={props.onConfirm}
          onCancel={props.onCancel}
          onClose={props.onClose}>
          {props.children}
        </ModalDialog>
      )}
    </Popup>
  )
}

export default Modal
