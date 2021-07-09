/// <reference types="react" />
export declare type DropdownToggleProps = {
    className?: string;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
};
export declare type Ref = HTMLDivElement;
declare const DropdownToggle: import("react").ForwardRefExoticComponent<DropdownToggleProps & import("react").RefAttributes<HTMLDivElement>>;
export default DropdownToggle;
