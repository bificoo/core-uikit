import React, { useContext, useEffect, useState } from "react"
import Icon from "components/Icon"
import { WithChildren } from "types/common"
import styled from "./TreeCategory.module.scss"
import cx from "classnames"
import TreeContext from "../TreeContext"

export type TreeCategoryProps = {
  renderName: React.ReactNode
  eventKey: string
  nodes?: string[]
} & WithChildren

const TreeCategory = (props: TreeCategoryProps) => {
  const { activeKey } = useContext(TreeContext)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    activeKey?.some(el => {
      if (el === props.eventKey) setExpanded(true)
    })
  }, [activeKey, props.eventKey])

  return (
    <div>
      <div
        className={cx(styled.category, {
          [styled.active]: activeKey?.some(el => el === props.eventKey),
          [styled["first-level"]]: props.nodes?.length === 1,
        })}
        style={{ paddingLeft: `${((props.nodes?.length || 0) - 1) * 20}px` }}
        onClick={() => setExpanded(prev => !prev)}>
        <Icon.Arrow direction={!expanded ? "right" : "down"} />
        {props.renderName}
      </div>
      <div className={cx(styled.content, { [styled.expanded]: expanded })}>
        {React.Children.map(props.children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ...child.props,
              nodes: props.nodes && [...props.nodes, child.props.eventKey],
              key: index,
            })
          }
        })}</div>
    </div>
  )
}

export default TreeCategory
