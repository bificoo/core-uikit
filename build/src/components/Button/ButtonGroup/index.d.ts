import React from "react";
import { WithChildren, WithClassName } from "../../../types/common";
declare type EventKey = string | number;
export declare type ButtonGroupProps = {
    /**
     * Default values for the ButtonGroup.
     */
    defaultActiveKey?: EventKey;
    /**
     * Called when selected value has changed.
     */
    onSelect?: (e: React.MouseEvent<Element, MouseEvent>, { eventKey }: {
        eventKey?: EventKey;
    }) => void;
} & WithChildren & WithClassName;
declare const ButtonGroup: (props: ButtonGroupProps) => JSX.Element;
export default ButtonGroup;
