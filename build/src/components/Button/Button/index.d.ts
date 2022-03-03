import React, { PropsWithChildren } from "react";
import { WithComponent, EventKey } from "../../../types/common";
declare const VARIANT: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly IMPORTANT: "important";
    readonly TEXT: "text";
};
export declare type ButtonProps = {
    /**
     * Specify the type of the
     */
    variant?: typeof VARIANT[keyof typeof VARIANT];
    /**
     * The size is full of the button.
     */
    block?: boolean;
    /**
     * Specify whether the Button is currently selected
     */
    selected?: boolean;
    /**
     * The button's key for the ButtonGroup.
     */
    eventKey?: EventKey;
    /**
     * Provide an optional function to be called when the button element is clicked
     */
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, eventKey?: {
        eventKey?: EventKey;
    }) => void;
} & WithComponent & JSX.IntrinsicElements['button'];
export declare const Button: ({ variant, selected, block, className, children, eventKey, onClick, ...props }: PropsWithChildren<ButtonProps>) => JSX.Element;
export {};
