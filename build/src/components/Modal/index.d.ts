import { ModalProps } from "./Modal";
export type { ModalProps } from "./Modal";
export type { ModalHeaderProps } from "./ModalHeader";
export type { ModalFooterProps } from "./ModalFooter";
declare const Modal: ((props: ModalProps) => JSX.Element) & {
    alert: (config: ModalProps) => {
        destroy: () => void;
        update: (newConfig: ModalProps) => void;
    };
    confirm: (config: ModalProps) => {
        destroy: () => void;
        update: (newConfig: ModalProps) => void;
    };
    Custom: (props: import("./ModalPopup").ModalPopupProps) => JSX.Element;
    Dialog: (props: import("../../types/common").WithComponent) => JSX.Element;
    Header: (props: import("./ModalHeader").ModalHeaderProps) => JSX.Element;
    Body: (props: import("./ModalBody").ModalBodyProps) => JSX.Element;
    Footer: (props: import("./ModalFooter").ModalFooterProps) => JSX.Element;
};
export default Modal;
