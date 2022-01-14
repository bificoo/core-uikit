import React, { useContext } from "react"
import TreeContext from "../TreeContext"
import styled from "./TreeItem.module.scss"
import cx from "classnames"

export type TreeItemProps = {
  renderName?: React.ReactNode
  eventKey: string
} & ReactProps.WithChildren

const TreeItem = (props: TreeItemProps) => {
  const { activeKey, setActiveKey, levelMap } = useContext(TreeContext)

  return (
    <div
      className={cx(styled.item, { [styled.active]: activeKey === props.eventKey })}
      style={{ paddingLeft: `${((levelMap?.[props.eventKey]?.level || 0) + 1) * 20}px` }}
      onClick={() => setActiveKey(props.eventKey)}>
      {props.renderName}
    </div>
  )
}

export default TreeItem
