import ModalPopup from "../ModalPopup";
import { ModalPopupProps } from "../ModalPopup";

export type CustomModalProps = ModalPopupProps;

const CustomModal = (props: CustomModalProps) => {
  return (
    <ModalPopup
      open={props.open}
      closeOnDocumentClick={props.backdrop}
      onExited={props.onExited}
      onClose={props.onClose}
    >
      {props.children}
    </ModalPopup>
  );
};

export default CustomModal;