import React from "react";
export declare type DropdownSelectEventProps = {
    eventKey?: ReactProps.EventKey;
};
export declare type DropdownProps = {
    defaultActiveKey?: ReactProps.EventKey;
    style?: React.CSSProperties;
    onSelect?: (e: React.MouseEvent<Element, MouseEvent>, { eventKey }: DropdownSelectEventProps) => void;
} & ReactProps.Component;
declare const Dropdown: ({ ...props }: DropdownProps) => JSX.Element;
export default Dropdown;
