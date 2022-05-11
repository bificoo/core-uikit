import Popup from "reactjs-popup"
import { PopupProps } from "reactjs-popup/dist/types"

export type ModalPopupProps = {
  open?: PopupProps["open"]
  backdrop?: PopupProps["closeOnDocumentClick"]
  lockScroll?: PopupProps["lockScroll"]
  onClose?: PopupProps["onClose"]
  children?: PopupProps["children"]
}

const ModalPopup = ({
  open = false,
  backdrop = true,
  lockScroll = true,
  ...props
}: ModalPopupProps) => {
  return (
    <Popup
      modal
      nested
      lockScroll={lockScroll}
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
      {props.children}
    </Popup>
  )
}

export default ModalPopup
