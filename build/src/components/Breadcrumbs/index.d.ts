export type { BreadcrumbsProps } from "./Breadcrumbs";
export type { BreadcrumbsItemProps } from "./BreadcrumbsItem";
declare const Breadcrumbs: ((props: import("../../types/common").WithChildren) => JSX.Element) & {
    Item: ({ href, children }: import("./BreadcrumbsItem").BreadcrumbsItemProps) => JSX.Element;
};
export default Breadcrumbs;
