import React from "react";
import { PopupPosition, PopupProps } from "reactjs-popup/dist/types";
export declare type DropdownSelectEventProps = {
    eventKey?: ReactProps.EventKey;
};
export declare type DropdownProps = {
    defaultActiveKey?: ReactProps.EventKey;
    position?: PopupPosition[];
    keepTooltipInside?: PopupProps["keepTooltipInside"];
    style?: React.CSSProperties;
    onSelect?: (e: React.MouseEvent<Element, MouseEvent>, { eventKey }: DropdownSelectEventProps) => void;
} & ReactProps.Component;
declare const Dropdown: ({ position, ...props }: DropdownProps) => JSX.Element;
export default Dropdown;
