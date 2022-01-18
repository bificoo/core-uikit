import React from "react";
export declare type TreeContextProps = {
    activeKey?: string[];
    setActiveKey: (key: string[]) => void;
};
declare const TreeContext: React.Context<TreeContextProps>;
export { TreeContext };
export default TreeContext;
