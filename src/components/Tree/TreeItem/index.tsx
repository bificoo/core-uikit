import React, { useContext } from "react"
import TreeContext from "../TreeContext"
import { WithChildren } from "types/common"
import styled from "./TreeItem.module.scss"
import cx from "classnames"

export type TreeItemProps = {
  renderName: React.ReactNode
  /**
   * The tree item key.
   */
  eventKey: string
  /**
   * The tree item nodes.
   */
  nodes?: string[]
} & WithChildren

const TreeItem = (props: TreeItemProps) => {
  const { selected, onNodeSelect } = useContext(TreeContext)

  return (
    <div
      className={cx(styled.item, { [styled.active]: selected?.some(el => el === props.eventKey) })}
      style={{ paddingLeft: `${((props.nodes?.length || 0) + 1) * 20}px` }}
      onClick={() => onNodeSelect([...(props.nodes || []), props.eventKey])}>
      <span>{props.renderName}</span>
    </div>
  )
}

export default TreeItem
