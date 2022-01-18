import React from "react";
import { WithChildren } from "../../../types/common";
export declare type TreeCategoryProps = {
    renderName: React.ReactNode;
    eventKey: string;
    nodes?: string[];
} & WithChildren;
declare const TreeCategory: (props: TreeCategoryProps) => JSX.Element;
export default TreeCategory;
