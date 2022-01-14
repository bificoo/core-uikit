import { ModalProps } from "./Modal";
export type { ModalProps } from "./Modal";
declare const Modal: (({ open, backdrop, custom, onExited, ...props }: ModalProps) => JSX.Element) & {
    alert: (config: ModalProps) => {
        destroy: () => void;
        update: (newConfig: ModalProps) => void;
    };
    confirm: (config: ModalProps) => {
        destroy: () => void;
        update: (newConfig: ModalProps) => void;
    };
};
export default Modal;
