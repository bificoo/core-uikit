import React from "react";
export declare type TabsProps = {
    defaultActiveKey: ReactProps.EventKey;
    activeKey?: ReactProps.EventKey;
    extraContent?: JSX.Element;
    onSelect?: (e: React.MouseEvent<Element, MouseEvent>, { eventKey }: {
        eventKey?: ReactProps.EventKey;
    }) => void;
} & ReactProps.Component;
declare const Tabs: ({ ...props }: TabsProps) => JSX.Element;
export default Tabs;
