import BreadcrumbsBase from "./Breadcrumbs"
export type { BreadcrumbsProps } from "./Breadcrumbs"

import BreadcrumbsItem from "./BreadcrumbsItem"
export type { BreadcrumbsItemProps } from "./BreadcrumbsItem"

const Breadcrumbs = Object.assign(BreadcrumbsBase, {
  Item: BreadcrumbsItem,
})

export default Breadcrumbs
