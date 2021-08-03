import React from "react";
export declare type TabsContextProps = {
    activeKey?: ReactProps.EventKey;
    setActiveKey: (eventKey: ReactProps.EventKey) => void;
};
declare const TabsContext: React.Context<TabsContextProps>;
export default TabsContext;
