import TreeBase from "./Tree"
import TreeCategory from "./TreeCategory"
import TreeItem from "./TreeItem"

export type { TreeProps } from "./Tree"
export type { TreeCategoryProps } from "./TreeCategory"
export type { TreeItemProps } from "./TreeItem"

const Tree = Object.assign(TreeBase, {
  Category: TreeCategory,
  Item: TreeItem,
})

export default Tree
