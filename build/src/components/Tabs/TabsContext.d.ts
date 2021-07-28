import React from "react";
export declare type TabsContextProps = {
    activeKey?: string | number;
    setActiveKey: (eventKey: string | number) => void;
};
declare const TabsContext: React.Context<TabsContextProps>;
export default TabsContext;
