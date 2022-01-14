import { WithChildren } from "../../../types/common";
export declare type BreadcrumbsItemProps = {
    /**
     * Redirect url of breadcrumbs item
     */
    href?: string;
} & WithChildren;
declare const BreadcrumbsItem: ({ href, children }: BreadcrumbsItemProps) => JSX.Element;
export default BreadcrumbsItem;
