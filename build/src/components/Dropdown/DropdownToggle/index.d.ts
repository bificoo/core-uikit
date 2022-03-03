import React from "react";
import { WithComponent } from "../../../types/common";
export declare type DropdownToggleProps = {
    open?: boolean;
    /**
     * Callback when click.
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
} & WithComponent;
export declare type Ref = HTMLDivElement;
declare const DropdownToggle: React.ForwardRefExoticComponent<{
    open?: boolean | undefined;
    /**
     * Callback when click.
     */
    onClick?: React.MouseEventHandler<HTMLElement> | undefined;
} & import("../../../types/common").WithChildren & import("../../../types/common").WithClassName & import("../../../types/common").WithStyle & React.RefAttributes<HTMLDivElement>>;
export default DropdownToggle;
