import { useRef, useEffect } from "react";
import Popup from "reactjs-popup";
import { PopupProps } from "reactjs-popup/dist/types";

export type ModalPopupProps = {
  /**
   * Should the modal appear on screen or not
   */
  open?: boolean;
  backdrop?: boolean;
  onExited?: () => void;
} & Partial<
  Pick<PopupProps, "open" | "closeOnDocumentClick" | "onClose" | "children">
>;

const ModalPopup = ({
  open = false,
  backdrop = true,
  onExited,
  ...props
}: ModalPopupProps) => {
  const opened = useRef(false);

  useEffect(() => {
    if (open) opened.current = true;
  }, [open]);

  useEffect(() => {
    if (!open && opened.current) onExited && onExited();
  }, [open, onExited]);

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
      }}
    >
      {props.children}
    </Popup>
  );
};

export default ModalPopup;
