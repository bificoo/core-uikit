export type { DropdownProps, DropdownSelectEventProps } from "./Dropdown";
export type { DropdownToggleProps } from "./DropdownToggle";
export type { DropdownMenuProps } from "./DropdownMenu";
export type { DropdownItemProps } from "./DropdownItem";
declare const Dropdown: (({ ...props }: import("./Dropdown").DropdownProps) => JSX.Element) & {
    Toggle: import("react").ForwardRefExoticComponent<{
        onClick?: import("react").MouseEventHandler<HTMLElement> | undefined;
    } & ReactProps.WithChildren & ReactProps.WithClassName & import("react").RefAttributes<HTMLDivElement>>;
    Menu: {
        (props: import("./DropdownMenu").DropdownMenuProps): JSX.Element;
        displayName: string;
    };
    Item: ({ ...props }: import("./DropdownItem").DropdownItemProps) => JSX.Element;
    Arrow: ({ direction }: import("./DropdownArrow").DropdownArrowProps) => JSX.Element;
};
export default Dropdown;
