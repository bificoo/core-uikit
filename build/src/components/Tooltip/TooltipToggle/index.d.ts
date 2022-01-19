import React from "react";
import { WithComponent } from "../../../types/common";
export declare type TooltipToggleProps = {
    /**
     * A callback triggered whenever the tooltip is display
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
} & WithComponent;
export declare type Ref = HTMLDivElement;
declare const TooltipToggle: React.ForwardRefExoticComponent<{
    /**
     * A callback triggered whenever the tooltip is display
     */
    onClick?: React.MouseEventHandler<HTMLElement> | undefined;
} & import("../../../types/common").WithChildren & import("../../../types/common").WithClassName & import("../../../types/common").WithStyle & React.RefAttributes<HTMLDivElement>>;
export default TooltipToggle;
