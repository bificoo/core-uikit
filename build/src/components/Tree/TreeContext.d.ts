import React from "react";
export declare type TreeContextProps = {
    selected?: string[];
    expanded: string[];
    onNodeToggle: (nodeIds: string[]) => void;
    onNodeSelect: (nodeIds: string[]) => void;
};
declare const TreeContext: React.Context<TreeContextProps>;
export { TreeContext };
export default TreeContext;
