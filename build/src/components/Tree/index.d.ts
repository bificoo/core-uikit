export type { TreeProps } from "./Tree";
export type { TreeCategoryProps } from "./TreeCategory";
export type { TreeItemProps } from "./TreeItem";
declare const Tree: (({ defaultActiveKey, onClick, children }: import("./Tree").TreeProps) => JSX.Element) & {
    Category: (props: import("./TreeCategory").TreeCategoryProps) => JSX.Element;
    Item: (props: import("./TreeItem").TreeItemProps) => JSX.Element;
};
export default Tree;
