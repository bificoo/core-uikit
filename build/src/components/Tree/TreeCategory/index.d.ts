import React from "react";
export declare type TreeCategoryProps = {
    children?: React.ReactElement | React.ReactElement[];
    renderName: React.ReactNode;
    eventKey: string;
    nodes?: string[];
} & ReactProps.WithChildren;
declare const TreeCategory: (props: TreeCategoryProps) => JSX.Element;
export default TreeCategory;
