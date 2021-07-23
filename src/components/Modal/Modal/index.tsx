import { useRef, useEffect } from "react"
import Popup from "reactjs-popup"
import ModalDialog, { ModalDialogProps } from "../ModalDialog"
import { PopupProps } from "reactjs-popup/dist/types"
import "reactjs-popup/dist/index.css"
// import styled from "./Modal.module.scss"

export type ModalProps = {
  open?: boolean
  backdrop?: boolean
  custom?: boolean
  onExited?: () => void
} & ModalDialogProps &
  ReactProps.Component &
  Partial<Pick<PopupProps, "open" | "closeOnDocumentClick" | "onClose" | "children">>

const Modal = ({ open = false, backdrop = true, custom = false, ...props }: ModalProps) => {
  const opened = useRef(false)

  useEffect(() => {
    if (open) opened.current = true
  }, [open])

  useEffect(() => {
    if (!open && opened.current) props.onExited && props.onExited()
  }, [open, props.onExited])

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
