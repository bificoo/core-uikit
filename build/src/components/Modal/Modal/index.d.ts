import { ModalPopupProps } from "../ModalPopup";
import { ModalBodyProps } from "../ModalBody";
import { ModalHeaderProps } from "../ModalHeader";
import { ModalFooterProps } from "../ModalFooter";
import { PopupProps } from "reactjs-popup/dist/types";
export declare type ModalProps = ModalPopupProps & ModalBodyProps & ModalHeaderProps & ModalFooterProps & Partial<Pick<PopupProps, "open" | "closeOnDocumentClick" | "onClose" | "children">>;
declare const Modal: (props: ModalProps) => JSX.Element;
export default Modal;
