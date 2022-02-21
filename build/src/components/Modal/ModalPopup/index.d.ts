import { PopupProps } from "reactjs-popup/dist/types";
export declare type ModalPopupProps = {
    /**
     * Should the modal appear on screen or not
     */
    open?: boolean;
    backdrop?: boolean;
    onExited?: () => void;
} & Partial<Pick<PopupProps, "open" | "closeOnDocumentClick" | "onClose" | "children">>;
declare const ModalPopup: ({ open, backdrop, onExited, ...props }: ModalPopupProps) => JSX.Element;
export default ModalPopup;
