import React from "react";
export declare type TooltipToggleProps = {
    onClick?: React.MouseEventHandler<HTMLElement>;
} & ReactProps.Component;
export declare type Ref = HTMLDivElement;
declare const TooltipToggle: React.ForwardRefExoticComponent<{
    onClick?: React.MouseEventHandler<HTMLElement> | undefined;
} & ReactProps.WithChildren & ReactProps.WithClassName & ReactProps.WithStyle & React.RefAttributes<HTMLDivElement>>;
export default TooltipToggle;
