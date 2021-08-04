import React from "react";
export declare type TabsProps = {
    defaultActiveKey: string | number;
    onSelect?: (e: React.MouseEvent<Element, MouseEvent>, { eventKey }: {
        eventKey?: ReactProps.EventKey;
    }) => void;
} & ReactProps.Component;
declare const Tabs: {
    ({ ...props }: TabsProps): JSX.Element;
    Tab: ({ ...props }: import("./Tab").TabProps) => JSX.Element;
};
export default Tabs;
