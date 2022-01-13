import React from "react";
import { WithComponent, EventKey } from "../../../types/common";
export declare type TabsProps = {
    /**
     * The default tabs active key.
     */
    defaultActiveKey: EventKey;
    /**
      * The current active tab index
      */
    activeKey?: EventKey;
    /**
     * For tabs customization extra content.
     */
    extraContent?: JSX.Element;
    /**
     * Callback fired when selected tab changed.
     */
    onSelect?: (e: React.MouseEvent<Element, MouseEvent>, { eventKey }: {
        eventKey?: EventKey;
    }) => void;
} & WithComponent;
declare const Tabs: ({ ...props }: TabsProps) => JSX.Element;
export default Tabs;
