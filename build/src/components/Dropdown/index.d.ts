/// <reference types="react" />
export type { DropdownProps, DropdownSelectEventProps, DropdownActions } from "./Dropdown";
export type { DropdownToggleProps } from "./DropdownToggle";
export type { DropdownMenuProps } from "./DropdownMenu";
export type { DropdownItemProps } from "./DropdownItem";
declare const Dropdown: import("react").ForwardRefExoticComponent<{
    defaultActiveKey?: import("../../types/common").EventKey | undefined;
    keepTooltipInside?: string | boolean | undefined;
    disabled?: boolean | undefined;
    onSelect?: ((e: import("react").MouseEvent<Element, MouseEvent>, { eventKey }: import("./Dropdown").DropdownSelectEventProps) => void) | undefined;
} & import("../../types/common").WithChildren & import("../../types/common").WithClassName & import("../../types/common").WithStyle & import("react").RefAttributes<import("./Dropdown").DropdownActions>> & {
    Toggle: import("react").ForwardRefExoticComponent<{
        onClick?: import("react").MouseEventHandler<HTMLElement> | undefined;
    } & import("../../types/common").WithChildren & import("../../types/common").WithClassName & import("../../types/common").WithStyle & import("react").RefAttributes<HTMLDivElement>>;
    Menu: (props: import("../../types/common").WithComponent) => JSX.Element;
    Item: (props: import("./DropdownItem").DropdownItemProps) => JSX.Element;
};
export default Dropdown;
