import React, { useContext } from "react"
import TreeContext from "../TreeContext"
import styled from "./TreeItem.module.scss"
import cx from "classnames"

export type TreeItemProps = {
  renderName?: React.ReactNode
  eventKey: string
  nodes?: string[]
} & ReactProps.WithChildren

const TreeItem = (props: TreeItemProps) => {
  const { activeKey, setActiveKey } = useContext(TreeContext)

  return (
    <div
      className={cx(styled.item, { [styled.active]: activeKey?.some(el => el === props.eventKey) })}
      style={{ paddingLeft: `${((props.nodes?.length || 0)) * 20}px` }}
      onClick={() => props.nodes && setActiveKey(props.nodes)}>
      {props.renderName}
    </div>
  )
}

export default TreeItem
