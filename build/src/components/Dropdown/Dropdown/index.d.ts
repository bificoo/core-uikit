import React from "react";
import { PopupProps } from "reactjs-popup/dist/types";
import { WithComponent, EventKey } from "../../../types/common";
export declare type DropdownSelectEventProps = {
    eventKey?: EventKey;
};
export declare type DropdownProps = {
    /**
     * The default dropdown active key.
     */
    defaultActiveKey?: EventKey;
    keepTooltipInside?: PopupProps["keepTooltipInside"];
    /**
     * If true, the dropdown will be disabled.
     */
    disabled?: boolean;
    /**
     * Called when selected value has changed.
     */
    onSelect?: (e: React.MouseEvent<Element, MouseEvent>, { eventKey }: DropdownSelectEventProps) => void;
} & WithComponent;
declare const Dropdown: ({ ...props }: DropdownProps) => JSX.Element;
export default Dropdown;
