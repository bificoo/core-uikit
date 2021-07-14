/// <reference types="react" />
export type { DropdownProps } from "./Dropdown";
export type { DropdownToggleProps } from "./DropdownToggle";
export type { DropdownMenuProps } from "./DropdownMenu";
export type { DropdownItemProps } from "./DropdownItem";
declare const Dropdown: (({ open, trigger, ...props }: import("./Dropdown").DropdownProps) => JSX.Element) & {
    Toggle: import("react").ForwardRefExoticComponent<import("./DropdownToggle").DropdownToggleProps & import("react").RefAttributes<HTMLDivElement>>;
    Menu: import("react").ForwardRefExoticComponent<import("./DropdownMenu").DropdownMenuProps & import("react").RefAttributes<HTMLDivElement>>;
    Item: ({ className, children, eventKey, active, onClick }: import("./DropdownItem").DropdownItemProps) => JSX.Element;
};
export default Dropdown;
