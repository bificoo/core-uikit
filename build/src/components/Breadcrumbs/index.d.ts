/// <reference types="react" />
export type { BreadcrumbsProps } from "./Breadcrumbs";
export type { BreadcrumbsItemProps } from "./BreadcrumbsItem";
declare const Breadcrumbs: ((props: ReactProps.WithChildren) => JSX.Element) & {
    Item: ({ href, text }: import("./BreadcrumbsItem").BreadcrumbsItemProps) => JSX.Element;
};
export default Breadcrumbs;
