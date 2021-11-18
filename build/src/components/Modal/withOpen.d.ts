import React from "react";
import { ModalProps } from "./Modal";
export declare const getPopupRoot: () => HTMLElement;
export declare function open(Modal: React.FC<ModalProps>, config: ModalProps): {
    destroy: () => void;
    update: (newConfig: ModalProps) => void;
};
export declare function withAlert(config: ModalProps): {
    cancelText: null;
    open?: boolean | undefined;
    backdrop?: boolean | undefined;
    custom?: boolean | undefined;
    onExited?: (() => void) | undefined;
    content?: string | undefined;
    title?: string | undefined;
    className?: string | undefined;
    confirmText?: string | undefined;
    confirmButtonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | undefined;
    onConfirm?: (() => void) | undefined;
    cancelButtonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | undefined;
    onCancel?: (() => void) | undefined;
    onClose?: ((() => void) & ((event?: React.SyntheticEvent<Element, Event> | KeyboardEvent | TouchEvent | MouseEvent | undefined) => void)) | undefined;
    children?: React.ReactNode;
    style?: React.CSSProperties | undefined;
    closeOnDocumentClick?: boolean | undefined;
};
export declare function withConfirm(config: ModalProps): {
    cancelText: string | null | undefined;
    open?: boolean | undefined;
    backdrop?: boolean | undefined;
    custom?: boolean | undefined;
    onExited?: (() => void) | undefined;
    content?: string | undefined;
    title?: string | undefined;
    className?: string | undefined;
    confirmText?: string | undefined;
    confirmButtonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | undefined;
    onConfirm?: (() => void) | undefined;
    cancelButtonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | undefined;
    onCancel?: (() => void) | undefined;
    onClose?: ((() => void) & ((event?: React.SyntheticEvent<Element, Event> | KeyboardEvent | TouchEvent | MouseEvent | undefined) => void)) | undefined;
    children?: React.ReactNode;
    style?: React.CSSProperties | undefined;
    closeOnDocumentClick?: boolean | undefined;
};
