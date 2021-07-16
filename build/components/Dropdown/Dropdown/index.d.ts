import React from "react";
import { Placement, Options } from "@popperjs/core";
export declare type DropdownProps = {
    className?: string;
    open?: boolean;
    onToggle?: React.MouseEventHandler<HTMLElement>;
    trigger?: "click" | "hover";
    placement?: Placement;
    popperConfig?: Options["modifiers"];
    toggleComponent?: () => JSX.Element;
    menuComponent?: () => JSX.Element;
    itemComponent?: () => JSX.Element;
    children?: React.ReactNode;
};
declare const Dropdown: ({ open, trigger, ...props }: DropdownProps) => JSX.Element;
export default Dropdown;
