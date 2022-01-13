export type { DropdownProps, DropdownSelectEventProps } from "./Dropdown";
export type { DropdownToggleProps } from "./DropdownToggle";
export type { DropdownMenuProps } from "./DropdownMenu";
export type { DropdownItemProps } from "./DropdownItem";
declare const Dropdown: (({ ...props }: import("./Dropdown").DropdownProps) => JSX.Element) & {
    Toggle: import("react").ForwardRefExoticComponent<{
        onClick?: import("react").MouseEventHandler<HTMLElement> | undefined;
    } & import("../../types/common").WithChildren & import("../../types/common").WithClassName & import("../../types/common").WithStyle & import("react").RefAttributes<HTMLDivElement>>;
    Menu: {
        (props: import("../../types/common").WithComponent): JSX.Element;
        displayName: string;
    };
    Item: (props: import("./DropdownItem").DropdownItemProps) => JSX.Element;
};
export default Dropdown;
