import { ModalProps } from "./Modal";
import CustomModal from "./CustomModal";
export type { ModalProps } from "./Modal";
export type { CustomModalProps } from "./CustomModal";
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
    Dialog: (props: import("../../types/common").WithComponent) => JSX.Element;
    Header: (props: import("./ModalHeader").ModalHeaderProps) => JSX.Element;
    Body: (props: import("./ModalBody").ModalBodyProps) => JSX.Element;
    Footer: (props: import("./ModalFooter").ModalFooterProps) => JSX.Element;
};
export { CustomModal };
export default Modal;
