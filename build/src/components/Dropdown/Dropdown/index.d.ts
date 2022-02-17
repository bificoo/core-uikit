import React from "react";
import { PopupProps } from "reactjs-popup/dist/types";
import { WithComponent, EventKey } from "../../../types/common";
export declare type DropdownSelectEventProps = {
    eventKey?: EventKey;
};
export declare type DropdownActions = {
    /**
     * Closed the menu.
     */
    close: () => void;
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
export declare type Ref = HTMLDivElement;
declare const Dropdown: React.ForwardRefExoticComponent<{
    /**
     * The default dropdown active key.
     */
    defaultActiveKey?: EventKey | undefined;
    keepTooltipInside?: PopupProps["keepTooltipInside"];
    /**
     * If true, the dropdown will be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Called when selected value has changed.
     */
    onSelect?: ((e: React.MouseEvent<Element, MouseEvent>, { eventKey }: DropdownSelectEventProps) => void) | undefined;
} & import("../../../types/common").WithChildren & import("../../../types/common").WithClassName & import("../../../types/common").WithStyle & React.RefAttributes<DropdownActions>>;
export default Dropdown;
