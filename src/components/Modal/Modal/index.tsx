import Popup from "reactjs-popup"
import ModalDialog, { ModalDialogProps } from "../ModalDialog"
import { PopupProps } from "reactjs-popup/dist/types"
import "reactjs-popup/dist/index.css"
// import styled from "./Modal.module.scss"

export type ModalProps = {
  open?: boolean
  backdrop?: boolean
  custom?: boolean
} & ModalDialogProps &
  ReactProps.Component &
  Partial<Pick<PopupProps, "open" | "closeOnDocumentClick" | "onClose" | "children">>

const Modal = ({ open = false, backdrop = true, custom = false, ...props }: ModalProps) => {
  return (
    <Popup
      modal
      lockScroll
      open={open}
      closeOnDocumentClick={backdrop}
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
  // <div
  //   className={cx(
  //     styled.wrapper,
  //     styled["animation-slide"],
  //     { [styled.show]: show },
  //     props.className,
  //   )}>
  //   <div
  //     className={cx(styled.overlay, { "is-backdrop": backdrop })}
  //     onClick={() => {
  //       if (backdrop) props.onHide && props.onHide()
  //     }}
  //   />
  //   <ModalDialog
  //     className={cx(styled.outer, "modal-outer")}
  //     title={props.title}
  //     content={props.content}
  //     confirmText={props.confirmText}
  //     confirmButtonProps={props.confirmButtonProps}
  //     cancelText={props.cancelText}
  //     cancelButtonProps={props.cancelButtonProps}
  //     onConfirm={props.onConfirm}
  //     onCancel={props.onCancel}
  //     onHide={props.onHide}>
  //     {props.children}
  //   </ModalDialog>
  // </div>
}

export default Modal
