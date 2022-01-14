import { ModalDialogProps } from "../ModalDialog";
import { PopupProps } from "reactjs-popup/dist/types";
export declare type ModalProps = {
    /**
     * Should the modal appear on screen or not
     */
    open?: boolean;
    backdrop?: boolean;
    custom?: boolean;
    onExited?: () => void;
} & ModalDialogProps & Partial<Pick<PopupProps, "open" | "closeOnDocumentClick" | "onClose" | "children">>;
declare const Modal: ({ open, backdrop, custom, onExited, ...props }: ModalProps) => JSX.Element;
export default Modal;
