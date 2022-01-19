/// <reference types="react" />
import { WithClassName } from "../../../types/common";
export declare type ModalFooterProps = {
    /**
     * The text for confirm button.
     */
    confirmText?: string;
    /**
     * The props for confirm button.
     */
    confirmButtonProps?: JSX.IntrinsicElements["button"];
    /**
     * A callback triggered whenever the modal is confirmed.
     */
    onConfirm?: () => void;
    /**
     * The text for cancel button, if text is null button will be hidden
     */
    cancelText?: string | null;
    /**
     * The props for cancel button.
     */
    cancelButtonProps?: JSX.IntrinsicElements["button"];
    /**
     * A callback triggered whenever the cancel button clicked.
     */
    onCancel?: () => void;
    /**
     * A callback triggered whenever the modal is closed.
     */
    onClose?: () => void;
} & WithClassName;
declare const ModalFooter: (props: ModalFooterProps) => JSX.Element;
export default ModalFooter;
