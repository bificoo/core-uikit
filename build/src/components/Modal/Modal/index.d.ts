import { ModalDialogProps } from "../ModalDialog";
import { PopupProps } from "reactjs-popup/dist/types";
export declare type ModalProps = {
    open?: boolean;
    backdrop?: boolean;
    custom?: boolean;
    onExited?: () => void;
} & ModalDialogProps & ReactProps.Component & Partial<Pick<PopupProps, "open" | "closeOnDocumentClick" | "onClose" | "children">>;
declare const Modal: ({ open, backdrop, custom, ...props }: ModalProps) => JSX.Element;
export default Modal;
