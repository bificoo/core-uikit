/// <reference types="react" />
export declare type ModalFooterProps = {
    confirmText?: string;
    confirmButtonProps?: JSXProps.ButtonElement;
    onConfirm?: () => void;
    cancelText?: string;
    cancelButtonProps?: JSXProps.ButtonElement;
    onCancel?: () => void;
    onClose?: () => void;
} & ReactProps.WithClassName;
declare const ModalFooter: (props: ModalFooterProps) => JSX.Element;
export default ModalFooter;
