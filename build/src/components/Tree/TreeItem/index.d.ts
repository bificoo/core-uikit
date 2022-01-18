import React from "react";
import { WithChildren } from "../../../types/common";
export declare type TreeItemProps = {
    renderName?: React.ReactNode;
    eventKey: string;
    nodes?: string[];
} & WithChildren;
declare const TreeItem: (props: TreeItemProps) => JSX.Element;
export default TreeItem;
