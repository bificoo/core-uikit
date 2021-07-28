import React from "react";
export declare type DropdownToggleProps = {
    onClick?: React.MouseEventHandler<HTMLElement>;
} & ReactProps.Component;
export declare type Ref = HTMLDivElement;
declare const DropdownToggle: React.ForwardRefExoticComponent<{
    onClick?: React.MouseEventHandler<HTMLElement> | undefined;
} & ReactProps.WithChildren & ReactProps.WithClassName & React.RefAttributes<HTMLDivElement>>;
export default DropdownToggle;
