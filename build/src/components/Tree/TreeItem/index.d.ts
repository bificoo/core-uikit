import React from "react";
export declare type TreeItemProps = {
    renderName?: React.ReactNode;
    eventKey: string;
    nodes?: string[];
} & ReactProps.WithChildren;
declare const TreeItem: (props: TreeItemProps) => JSX.Element;
export default TreeItem;
